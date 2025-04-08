
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
  const params = new URLSearchParams(event.queryStringParameters);
  const code = params.get("code");
  const state = params.get("state");
  
  if (!code) {
    console.error("No code provided in GitHub callback");
    // Check if this is the initial auth request that needs to redirect to GitHub
    if (event.queryStringParameters && event.queryStringParameters.provider === "github") {
      const siteId = event.queryStringParameters.site_id || "";
      const scope = event.queryStringParameters.scope || "repo";
      
      // Redirect to GitHub OAuth authorization page
      const clientId = process.env.GITHUB_CLIENT_ID || "YOUR_GITHUB_CLIENT_ID";
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
        params: event.queryStringParameters || {},
        path: event.path,
        help: "This endpoint needs either a code parameter (from GitHub) or provider=github to start auth flow"
      })
    };
  }

  try {
    console.log("Received code from GitHub, continuing auth process");
    
    // The URL to redirect back to after authentication
    const redirectUrl = event.headers.host 
      ? `https://${event.headers.host}/admin/`
      : 'https://biohackathon.netlify.app/admin/';
    
    // Redirect back to the admin page with the auth info in the hash
    return {
      statusCode: 303, // See Other
      headers: {
        Location: `${redirectUrl}#${new URLSearchParams({
          provider: "github",
          token: code,
          state: state || ""
        }).toString()}`
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
