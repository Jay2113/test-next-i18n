//import { createHandler } from '../../../server';
import { SessionUser, AuthStatus } from "../../../src/contexts/auth/types";
import {Auth} from "aws-amplify";
import { UserService } from "../../../server/services/users";
import { AuthService } from "../../../server/services/auth";

const handler = async (req, res) => {
  try {
    const userService : UserService = new UserService();
    const authService : AuthService = new AuthService({userService});
    const user = await authService.currentUser();
    
    res.json({
      authenticated: true,
      user,
    } as AuthStatus);
  } catch (err) {
    res.json({ authenticated: false } as AuthStatus);
  }
};

// const handler = createHandler({}).get(async (req, res) => {
//   const user = req.session.get<SessionUser>('user');
//   if (user) {
//     res.ok({
//       authenticated: true,
//       user,
//     } as AuthStatus);
//   } else {
//     res.ok({
//       authenticated: false,
//     } as AuthStatus);
//   }
// });

export default handler;
