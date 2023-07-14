import { ApiGateway } from "aws-cdk-lib/aws-events-targets";
import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
} from "aws-lambda";

import { getSpace } from "./handlers/GetSpace";

async function handler(
  event: APIGatewayProxyEvent,
  context: Context
): Promise<APIGatewayProxyResult> {
  let body = {};

  switch (event.httpMethod) {
    case "GET":
      body = await getSpace(event);
      break;
    case "POST":
      body = {
        message: "POST request received",
      };
      break;
    default:
      break;
  }

  const response: APIGatewayProxyResult = {
    statusCode: 200,
    body: JSON.stringify(body),
  };

  return response;
}

export { handler };
