import { Auth } from "aws-amplify";
import { v4 as uuid } from "uuid";
import { SessionUser } from "../../../src/contexts/auth/types";
import type { UserService, UserAttributes } from "../users";
// import { verifyPassword } from './verify_password';
// import type { Database, PasswordResetTokenDAO } from '../../database';

type AuthServiceOptions = {
  userService: UserService;
};

type AuthenticateResponse =
  | {
      authenticated: true;
      user: UserAttributes;
    }
  | {
      authenticated: false;
      errorCode: string;
    };

export class AuthService {
  private readonly userService: UserService;

  constructor({ userService }: AuthServiceOptions) {
    this.userService = userService;
  }

  async authenticate(
    username: string,
    password: string
  ): Promise<AuthenticateResponse> {
    try {
      const cognitoUser = await this.userService.findUser(username, password);

      if (cognitoUser !== undefined) {
        //TODO CONSTRUT OBJCTE USER
        return { authenticated: true, user: cognitoUser };
      } else {
        return { authenticated: false, errorCode: "undefined" };
      }
    } catch (err) {
      if (err.code === "UserNotConfirmedException") {
        return { authenticated: false, errorCode: err.code };
      }

      if (err.code === "NotAuthorizedException") {
        // The error happens when the incorrect password is provided
        return { authenticated: false, errorCode: err.code };
      }

      if (err.code === "UserNotFoundException") {
        // The error happens when the supplied username/email does not exist in the Cognito user pool
        return { authenticated: false, errorCode: err.code };
      }
    }
  }

  async currentUser(): Promise<SessionUser> {
    try {
      const currentUser = await Auth.currentAuthenticatedUser();
      if (currentUser) {
        return {
          id: currentUser.attributes.sub,
          email: currentUser.attributes.email,
        };
      }
    } catch (e) {
      throw e;
    }
  }

}
