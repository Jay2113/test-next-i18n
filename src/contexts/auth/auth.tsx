import { Auth } from "aws-amplify";
import router from "next/router";
import { http } from '../../services/http';
import {
  createContext,
  FC,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import { AuthStatus,  AuthenticationResponse } from "./types";

export type AuthContext = {
  auth: AuthStatus;
  signIn: (
    username: string,
    password: string
  ) => Promise<AuthenticationResponse>;
  signOut: () => Promise<void>;
};

const defaultAuth: AuthStatus = { authenticated: false };

const authContext = createContext<AuthContext>({
  auth: defaultAuth,
} as AuthContext);

export const useAuth = () => {
  return useContext(authContext);
};

const useProvideAuth = () => {
  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const { body: authStatus } = await http.get<AuthStatus>('/api/auth/current');
        console.log(authStatus);
        setStatus(authStatus);
      } catch (e) {
        if (e !== "No current user") {
          alert(e);
        }
      }
    };
    fetchCurrentUser();
  }, []);

  const signIn = async (
    username: string,
    password: string
  ): Promise<AuthenticationResponse> => {
    try {
      const { body } = await http.post<AuthenticationResponse>('/api/auth/authenticate', {
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (body.authenticated) {
        setStatus({ authenticated: body.authenticated, user: body.user });
      } 
      if (body.authenticated === false){
        setStatus({ authenticated: false, errorCode: body.errorCode });
      }
      return body;

    } catch (error) {
      console.log("error signing in", error);
    }
  };

  const signOut = async () => {
    await http.get('/api/auth/logout');
    setStatus({ authenticated: false });
    await router.push('/');
  };

  const [authContext, setAuthContext] = useState<AuthContext>({
    auth: defaultAuth,
    signIn,
    signOut,
  });

  const setStatus = useCallback(
    (status: AuthStatus) => {
      setAuthContext((context) => ({
        ...context,
        auth: status,
      }));
    },
    [setAuthContext]
  );

  return {
    auth: authContext,
  };
};

export const AuthProvider: FC = ({ children }) => {
  const { auth } = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};
