
// This is a serverless function that will handle the GitHub authentication
import fetch from "node-fetch";

export async function handler(event, context) {
  // Only handle GET requests
  if (event.httpMethod !== "GET") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  // Extract code and state from query parameters
  const params = new URLSearchParams(event.queryStringParameters);
  const code = params.get("code");
  const state = params.get("state");
  
  if (!code) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "No code provided" })
    };
  }

  try {
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
      body: JSON.stringify({ error: "Server error during authentication" })
    };
  }
}
