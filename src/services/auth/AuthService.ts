import { type CognitoUser } from "@aws-amplify/auth";
import { Amplify, Auth } from "aws-amplify";

const awsRegion = "us-east-2";

Amplify.configure({
  Auth: {
    region: awsRegion,
    userPoolId: "eu-west-2_o9VQnGm4r",
    userPoolWebClientId: "6vdlq18csb7g80epsptpf75g22",
    authenticationFlowType: "USER_PASSWORD_AUTH",
  },
});

export class AuthService {
  public async login(userName: string, password: string): Promise<CognitoUser> {
    const result = await Auth.signIn(userName, password);
    return result;
  }
}
