import { Auth } from "aws-amplify";
import type { UserAttributes } from "../../database/model/user";

export class UserService {
  async findUser(
    username: string,
    password: string
  ): Promise<UserAttributes | undefined> {
    //this.log.debug(`searching for user with id: ${id}`);
    try {
      const cognitoUser = await Auth.signIn(username, password);
      if (cognitoUser) {
        const convertUser: UserAttributes = {
          id: cognitoUser.attributes.sub,
          email: cognitoUser.attributes.email,
          username: cognitoUser.username,
        };

        return convertUser;
      }

      return undefined;
    } catch (e) {
      console.log("error searching for user", e);
      throw e;
    }
  }

  async create(): Promise<UserAttributes> {
    return null;
  }

  async changePassword(id: number, newPassword: string) {
    return null;
  }

  async activate(email: string): Promise<boolean> {
    return null;
  }
}
