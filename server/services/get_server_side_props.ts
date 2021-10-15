import { GetServerSidePropsContext } from 'next';
import { Services } from './types';
import { getServices } from './get_services';

export interface ServicesEnhancedGetServerSidePropsContext {
  services: Services;
}

export const enhanceGetServiceSidePropsContextWithServices = async (
  context: GetServerSidePropsContext & ServicesEnhancedGetServerSidePropsContext
) => {
  context.services = {
    ...context.services,
    ...(await getServices()),
  };
};