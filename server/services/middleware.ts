import { Middleware } from 'next-connect';
import type { NextApiRequest, NextApiResponse } from 'next';
import type { Services } from './types';
import { getServices } from './get_services';

export interface ServicesEnhancedRequest extends NextApiRequest {
  services: Services;
}

export const servicesMiddleware: Middleware<ServicesEnhancedRequest, NextApiResponse> = async (
  req,
  res,
  next
) => {
  req.services = {
    ...req.services,
    ...await getServices(),
  };
  return next();
};