import { AuthService } from "../src/services/auth/AuthService";

async function testAuth() {
  const authService = new AuthService();
  const result = await authService.login("samogorm", "ks629423dsd49DS@!");
  // access token
  // signInUserSession.idToken.jwtToken
  console.log(result);
}

testAuth();
