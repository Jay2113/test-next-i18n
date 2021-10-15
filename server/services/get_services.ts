import { Services } from './types';
import { AuthService } from './auth';
import { UserService } from './users';

let services: Services;

export const getServices = async (): Promise<Services> => {
  if (!services) {
    services = await createServices();
  }
  return services;
};

const createServices = async (): Promise<Services> => {

  //const config = getConfig();

  const userService = new UserService();
  const authService = new AuthService({userService});



  return {
    auth: authService,
    user: userService,
  };
};