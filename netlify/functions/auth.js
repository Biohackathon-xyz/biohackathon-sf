
// This is a serverless function that will handle the GitHub authentication
export async function handler(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Auth handler",
      event: event.path
    })
  };
}
