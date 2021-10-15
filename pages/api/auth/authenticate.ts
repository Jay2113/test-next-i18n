
//import { createHandler } from '../../../server';
import {
  SessionUser,
  AuthenticationFailure,
  AuthenticationSuccess,
} from '../../../src/contexts/auth/types';
import { AuthService } from '../../../server/services/auth';
 import { UserService } from '../../../server/services/users';


// const handler = createHandler({}).post(async (req, res) => {
//   const { username, password } = req.body;
//   const { auth } = req.services;
//   const attempt = await auth.authenticate(username, password);

//   console.log("authenticate", attempt);
//   if (attempt.authenticated === false) {
//     return res.unauthorized({
//       authenticated: false,
//       errorCode: attempt.errorCode,
//     } as AuthenticationFailure);
//   }

  
//   const { user } = attempt;
//   const sessionUser: SessionUser = {
//     id: user.id,
//     email: user.email,
//   };

//   req.session.set('user', sessionUser);
//   await req.session.save();

//   res.ok({
//     authenticated: true,
//     user: sessionUser,
//   } as AuthenticationSuccess);
// });


const handler = async (req, res) => {
  const { username, password } = req.body;
  const userService : UserService = new UserService();
  const authService : AuthService = new AuthService({userService});
  const attempt = await authService.authenticate(username, password);

  console.log("authenticate", attempt);
  if (attempt.authenticated === false) {
    return res.status(401).json({
      authenticated: false,
      errorCode: attempt.errorCode,
    } as AuthenticationFailure);
  }

  
  const { user } = attempt;
  const sessionUser: SessionUser = {
    id: user.id,
    email: user.email,
  };

  res.status(200).json({
    authenticated: true,
    user: sessionUser,
  } as AuthenticationSuccess);
};


export default handler;

