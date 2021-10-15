export type SessionUser = {
  id: number;
  email: string;
};

export type AuthenticationSuccess = {
  authenticated: true;
  user: SessionUser;
};

export type AuthenticationFailure = {
  authenticated: false;
  errorCode: string;
  user?: undefined;
};

export type AuthStatus =
  | {
      authenticated: false;
      user?: undefined;
      errorCode?: string;
    }
  | {
      authenticated: true;
      user: SessionUser;
    };

export type AuthenticationResponse = AuthenticationSuccess | AuthenticationFailure;
