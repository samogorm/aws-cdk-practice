import { APIGatewayProxyEvent } from "aws-lambda";

import { hasAdminGroup } from "../../../utils/hasAdminGroup";

export async function getSpace(event: APIGatewayProxyEvent) {
  const isAuthorized = hasAdminGroup(event);

  if (!isAuthorized) {
    return {
      statusCode: 401,
      message: "Insifficient permissions",
    };
  }

  return {
    message: "GET request received",
  };
}
