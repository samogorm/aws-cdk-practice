import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
} from "aws-lambda";

async function handler(event: APIGatewayProxyEvent, context: Context) {
  const response: APIGatewayProxyResult = {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello world!",
    }),
  };

  console.log("Event: ", event);

  return response;
}

export { handler };
