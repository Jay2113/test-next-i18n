import type { AuthService } from './auth';
import type { UserService } from './users';


export type Services = {
  auth: AuthService;
  user: UserService,
}