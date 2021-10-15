import React, { useEffect } from "react";
import Amplify from "@aws-amplify/core";
import Head from "next/head";
import Auth from "@aws-amplify/auth";
import { AuthProvider } from "../src/contexts/auth/auth";
import { AppProps } from "next/app";
import "../styles/globals.css";
import { MuiThemeProvider } from "@material-ui/core";
import { theme } from "../src/theme";
import { appWithTranslation } from "next-i18next";
import { awsconfig } from "../config/aws-config/config";

Amplify.configure({
  Auth: {
    region: "eu-west-1", //! Konfiguration
    userPoolId: process.env.USER_POOL_ID,
    userPoolWebClientId: process.env.USER_POOL_CLIENT_ID,
    mandatorySignIn: false,
    // OPTIONAL - Configuration for cookie storage
    // Note: if the secure flag is set to true, then the cookie transmission requires a secure protocol
    // example taken from https://aws-amplify.github.io/docs/js/authentication
  }, ssr: true
});

Auth.configure({
  oauth: {
    domain: process.env.IDP_DOMAIN,
    scope: ["email", "openid"],
    // we need the /autologin step in between to set the cookies properly,
    // we don't need that when signing out though
    redirectSignIn: process.env.REDIRECT_SIGN_IN,
    redirectSignOut: process.env.REDIRECT_SIGN_OUT,
    responseType: "token",
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <MuiThemeProvider theme={theme}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </MuiThemeProvider>
  );
}

// add i18n HOC
export default appWithTranslation(MyApp);
