import React, { FC } from "react";
import { TopBar, TopBarCustomHomePage } from "./topbar";
//import { Footer } from './footer';
import { makeStyles, Grid } from "@material-ui/core";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { Footer } from "./footer/footer";

interface DefaultPageLayoutProps {
  title?: string;
  color?: string;
}

const useStyles = makeStyles((theme) => ({
  rootContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  mainContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    background: theme.palette.primary.main,
  },
}));

export const DefaultPageLayout: FC<DefaultPageLayoutProps> = ({
  title,
  children,
  color,
}) => {
  const styles = useStyles();
  const customStyle = {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    background: color,
  };

  return (
    <div className={styles.rootContainer}>
      <Head>
        <title>{title} | ArtConsortium</title>
      </Head>
      {color && (
        <>
          <TopBarCustomHomePage color={color} />
          <main style={customStyle as React.CSSProperties}>{children}</main>
        </>
      )}
      {!color && (
        <>
          <TopBar />
          <main className={styles.mainContainer}>{children}</main>
        </>
      )}
      <Footer />
    </div>
  );
};
