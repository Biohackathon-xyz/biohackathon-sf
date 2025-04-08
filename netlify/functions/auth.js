
// This is a serverless function that will handle the GitHub authentication
import fetch from "node-fetch";

export async function handler(event, context) {
  console.log("Auth handler received request:", {
    path: event.path,
    queryParams: event.queryStringParameters,
    headers: {
      host: event.headers.host,
      referer: event.headers.referer
    }
  });

  // Only handle GET requests
  if (event.httpMethod !== "GET") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  // Extract code and state from query parameters
  const params = event.queryStringParameters || {};
  const code = params.code;
  const state = params.state;
  
  if (!code) {
    console.error("No code provided in GitHub callback");
    // Check if this is the initial auth request that needs to redirect to GitHub
    if (params && params.provider === "github") {
      const siteId = params.site_id || "";
      const scope = params.scope || "repo";
      
      // Redirect to GitHub OAuth authorization page
      const clientId = process.env.GITHUB_CLIENT_ID;
      if (!clientId) {
        console.error("Missing GITHUB_CLIENT_ID environment variable");
        return {
          statusCode: 500,
          body: JSON.stringify({
            error: "Server configuration error",
            message: "GitHub Client ID is not configured"
          })
        };
      }
      
      const redirectUri = `https://${event.headers.host}/.netlify/functions/auth`;
      const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&state=${siteId}`;
      
      console.log("Redirecting to GitHub auth:", githubAuthUrl);
      
      return {
        statusCode: 302,
        headers: {
          Location: githubAuthUrl
        },
        body: ""
      };
    }
    
    return {
      statusCode: 400,
      body: JSON.stringify({ 
        error: "No code provided",
        params: params,
        path: event.path,
        help: "This endpoint needs either a code parameter (from GitHub) or provider=github to start auth flow"
      })
    };
  }

  try {
    console.log("Received code from GitHub, exchanging for token");
    
    // Exchange the code for an access token
    const tokenResponse = await fetch("https://github.com/login/oauth/access_token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code: code
      })
    });
    
    const tokenData = await tokenResponse.json();
    
    if (tokenData.error) {
      console.error("GitHub token exchange error:", tokenData);
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: "GitHub authentication error",
          message: tokenData.error_description || tokenData.error
        })
      };
    }
    
    const accessToken = tokenData.access_token;
    
    if (!accessToken) {
      console.error("No access token in GitHub response:", tokenData);
      return {
        statusCode: 500,
        body: JSON.stringify({
          error: "Failed to get GitHub access token",
          details: "Token exchange succeeded but no access token was provided"
        })
      };
    }
    
    console.log("Successfully obtained GitHub access token");
    
    // The URL to redirect back to after authentication
    const redirectUrl = event.headers.host 
      ? `https://${event.headers.host}/admin/`
      : 'https://biohackathon.netlify.app/admin/';
    
    // FIX: Format the hash parameters correctly without a leading slash
    const hashParams = new URLSearchParams({
      provider: "github",
      token: accessToken,
      state: state || ""
    }).toString();
    
    // Redirect back to the admin page with the auth info in the hash
    return {
      statusCode: 303, // See Other
      headers: {
        Location: `${redirectUrl}#${hashParams}`
      },
      body: ""
    };
  } catch (error) {
    console.error("Auth Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: "Server error during authentication",
        message: error.message || "Unknown error"
      })
    };
  }
}
