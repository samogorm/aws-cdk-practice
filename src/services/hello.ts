import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
} from "aws-lambda";
import { S3Client, ListBucketsCommand } from "@aws-sdk/client-s3";

// Important that this is instantiated outside of the handler
// as this will be reused for subsequent invocations
const s3Client = new S3Client({});

async function handler(event: APIGatewayProxyEvent, context: Context) {
  const command = new ListBucketsCommand({});
  const listBucketsResult = await s3Client.send(command);

  const response: APIGatewayProxyResult = {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello world!" + JSON.stringify(listBucketsResult),
    }),
  };

  console.log("Event: ", event);

  return response;
}

export { handler };
