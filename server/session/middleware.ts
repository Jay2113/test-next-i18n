import type { NextApiRequest, NextApiResponse } from "next";
import { Middleware } from "next-connect";
import {
  ironSession,
  Session,
  SessionOptions,
  applySession,
} from "next-iron-session";
import { GetServerSidePropsContext } from "next";

export interface SessionEnhancedRequest extends NextApiRequest {
  session: Session;
}

export interface SessionEnhancedGetServerSidePropsContext {
  req: {
    session: Session;
  };
}

const ironSessionOptions: SessionOptions = {
  cookieName: "j-session-id",
  password: "I will need to change that at some point",
  ttl: 60 * 60 * 24 * 7,
  cookieOptions: {
    secure: false,
    httpOnly: true,
    sameSite: "lax",
  },
};

export const enhanceGetServiceSidePropsContextWithSession = async (
  context: GetServerSidePropsContext
) => {
  await applySession(context.req, context.res, ironSessionOptions);
};

export const sessionMiddleware: Middleware<
  SessionEnhancedRequest,
  NextApiResponse
> = async (req, res, next) => {
  // TODO: load config async
  ironSession(ironSessionOptions)(req, res, next);
};