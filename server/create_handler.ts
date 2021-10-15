 import type { NextApiResponse } from 'next';
//  import nextConnect, { Middleware } from 'next-connect';
//  import { i18nMiddleware, I18nEnhancedRequest } from './i18n';
//  import { createAuthMiddleware, AuthEnhancedRequest } from './services/auth/middleware';
//  import { servicesMiddleware, ServicesEnhancedRequest } from './services';
//  import { sessionMiddleware, SessionEnhancedRequest } from './session';

//  /**
//   * Params to use when invoking {@link createHandler}
//   */
//  export interface CreateHandlerParams {
//    /**
//     * If true, will return a 401 if user is not authenticated
//     */
//    authRequired?: boolean;
//  }

//  // TODO: we would use type inference from the input params to have
//  // correct typing and add type enhancement only when the option has been selected
//  // but the upsides probably aren't worth the cost on type complexity.
//  type ContextEnhancedRequest = 
//    SessionEnhancedRequest &
//    I18nEnhancedRequest &
//    AuthEnhancedRequest &
//    ServicesEnhancedRequest;

// export interface HelperEnhancedResponse extends NextApiResponse {
//   ok(body: object): void; 

//   unauthorized(body: object): void;

//   badRequest(body: object): void;
// }

// /**
//  * Factory to create server-side route handler with preconfigured middlewares
//  */
// export const createHandler = ({ authRequired = false }: CreateHandlerParams = {}) => {
//   let middlewares: Middleware<any, any>[] = [
//     sessionMiddleware,
//     enhanceResponse,
//     createAuthMiddleware({ authRequired }),
//     i18nMiddleware,
//     servicesMiddleware,
//   ];
//   return nextConnect<ContextEnhancedRequest, HelperEnhancedResponse>().use(...middlewares);
// };

// const enhanceResponse: Middleware<ContextEnhancedRequest, HelperEnhancedResponse> = (
//   req,
//   res,
//   next
// ) => {
//   res.ok = (body) => {
//     res.statusCode = 200;
//     res.json(body);
//   };
//   res.unauthorized = (body) => {
//     res.statusCode = 401;
//     res.json(body);
//   };
//   res.badRequest = (body) => {
//     res.statusCode = 400;
//     res.json(body);
//   };
//   return next();
// };