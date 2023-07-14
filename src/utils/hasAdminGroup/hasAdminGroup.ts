import { APIGatewayProxyEvent } from "aws-lambda";

export function hasAdminGroup(event: APIGatewayProxyEvent) {
  const groups = event.requestContext.authorizer?.claims["cognito:groups"];

  if (groups) {
    return groups.includes("admins");
  }

  return false;
}
