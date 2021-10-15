// pages/index.tsx
import { FC } from "react";
import { GetServerSideProps } from "next";
import { useAuth } from "../src/contexts/auth/auth";
import { DefaultPageLayout } from "../src/components/layout";
import {
  Button,
  makeStyles,
  Typography,
  Grid,
  Link as MaterialLink,
} from "@material-ui/core";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { colors, theme } from "../src/theme";
import Image from "next/image";
import { WorkList, data } from "../src/common/work";
import { Slider, CarouselHomeArt, CarouselHomeGal, dataImage } from "../src/common/carousel";
import image from "next/image";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "footer"])),
      // Will be passed to the page component as props
    },
  };
}

const useStyles = makeStyles((theme) => ({
  firstTitle: {
    fontWeight: 400,
    fontFamily: "Ogg Trial Italic",
    color: theme.palette.primary.main,
    padding: "0 32px",
  },

  paddingSecondTitle: {
    padding: "0 48px 0 24px",
  },
  groupTitle: {
    display: "flex",
  },

  lastTitle: {
    paddingBottom: "13rem",
  },

  firstPainting: {
    position: "relative",
    left: "10rem",
    zIndex: 2,
  },

  secondPainting: {
    position: "absolute",
    left: 0,
    top: "129px",
  },

  thirdPainting: {
    position: "absolute",
    right: 0,
    top: "27rem",
  },

  fourthPainting: {
    position: "absolute",
    right: 0,
    top: "40rem",
  },
  fithPainting: {
    position: "absolute",
    right: "12rem",
    top: "50rem",
  },
  sixthPainting: {
    position: "absolute",
    left: 0,
    top: "45rem",
  },
  whiteContainer: {
    padding: "80px 0 0 120px",
    backgroundColor: theme.palette.primary.main,
  },
  sutitlesWc: {
    paddingTop: "2rem",
  },

  arrowItem: {
    display: "flex",
    padding: "4.5rem 0 120px",
  },
  gridWork: {
    backgroundColor: theme.palette.primary.main,
    border: "1px solid" + theme.palette.divider,
  },
  paddingTextImg: {
    paddingLeft: "13px",
  },
}));

export const Home: FC = () => {
  const { auth, signOut } = useAuth();
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <DefaultPageLayout title={t("Home")} color={colors.softBlue}>
      <img
        src="/painting/painting-988.svg"
        className={classes.firstPainting}
        alt=""
        width="auto"
        height="auto"
      />
      <img
        src="/painting/painting-985.svg"
        className={classes.secondPainting}
        alt=""
        width="auto"
        height="auto"
      />
      <img
        src="/painting/painting-987.svg"
        className={classes.thirdPainting}
        alt=""
        width="auto"
        height="auto"
      />
      <img
        src="/painting/painting-955.svg"
        className={classes.fourthPainting}
        alt=""
        width="auto"
        height="auto"
      />
      <img
        src="/painting/painting-956.svg"
        className={classes.fithPainting}
        alt=""
        width="auto"
        height="auto"
      />
      <img
        src="/painting/painting-986.svg"
        className={classes.sixthPainting}
        alt=""
        width="auto"
        height="auto"
      />
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item className={classes.groupTitle}>
          <Typography variant="h1" className={classes.firstTitle}>
            {t("Buy")}
          </Typography>
          <Typography variant="h1">{t("EXCLU")}</Typography>
        </Grid>
        <Grid item className={classes.groupTitle}>
          {" "}
          <Image src="/images/Rectangle.svg" alt="" width={120} height={18} />
          <Typography className={classes.paddingSecondTitle} variant="h1">
            {t("SIVE")}
          </Typography>
          <Grid item>
            <Typography variant="subtitle1">{t("Welcome to")}</Typography>
            <Typography variant="subtitle1">{t("Art Consortium")}</Typography>
            <Typography variant="body2">
              {t("Lorem Ipsum is simply dummy text of the")}
            </Typography>
            <Typography variant="body2">
              {t("printing and typesetting industry.")}
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="h1" className={classes.lastTitle}>
            {t("MASTERPIECE")}
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        className={classes.whiteContainer}
      >
        <Grid item>
          <Typography variant="h4">
            {t("Buy physical works of art ")}
          </Typography>
          <Typography variant="h4">{t("from the most renown")}</Typography>
          <Typography variant="h4">
            {t("artists of all times, on the")}
          </Typography>
          <Typography variant="h4">{t("blockchain.")}</Typography>
          <Grid item className={classes.sutitlesWc}>
            <Typography variant="h5">
              {t("+ Lorem ipsum dolor sit amet")}
            </Typography>
            <Typography variant="h5">
              {t("+ Consectetur adipiscing elit adipiscing")}
            </Typography>
            <Typography variant="h5">
              {t("+ Nunc pharetra, erat vitae molestie")}
            </Typography>
          </Grid>
          <Grid item className={classes.arrowItem}>
            <Image src="/icons/arrow.svg" alt="" width={13} height={13} />
            <Link href="#" passHref>
              <Typography variant="h6" className={classes.paddingTextImg}>
                {t("Join the club")}
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </Grid>

      <WorkList data={data} className={classes.gridWork} />
      <Slider />

      <CarouselHomeGal images={dataImage} title='Hot galeries' />
      <CarouselHomeArt images={dataImage} />


      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          {auth.authenticated && (
            <Button onClick={() => signOut()}>{t("signOut")}</Button>
          )}
        </Grid>
      </Grid>
    </DefaultPageLayout>
  );
};

export default Home;
