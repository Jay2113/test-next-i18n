export {};
// import { Middleware } from 'next-connect';
// import type { SessionEnhancedRequest } from '../../session';
// import type { HelperEnhancedResponse } from '../../create_handler';
// import { NextApiRequest } from 'next';
// import { SessionUser } from '../../../src/contexts/auth/types';

// export interface AuthEnhancedRequest extends NextApiRequest {
//   user?: SessionUser;
// }

// export const createAuthMiddleware = ({
//   authRequired,
// }: {
//   authRequired: boolean;
// }): Middleware<SessionEnhancedRequest & AuthEnhancedRequest, HelperEnhancedResponse> => {
//   return async (req, res, next) => {
//     const user = req.session.get<SessionUser>('user');
//     req.user = user;
//     if (authRequired && !user) {
//       res.unauthorized({ unauthorized: true });
//     } else {
//       return next();
//     }
//   };
// };