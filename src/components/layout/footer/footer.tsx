import React, { FC } from "react";
import classNames from "classnames";
import {
  Typography,
  Button,
  makeStyles,
  Container,
  Grid,
  Link as MaterialLink,
} from "@material-ui/core";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import Image from "next/image";
import { colors } from "../../../theme";
import { CustomInputField } from "../../textField/textField";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    width: `100%`,
    paddingTop: "15px",
  },
  gridTitle: {
    margin: "0 3rem",
    flexGrow: 0,
    width: "25%",
    paddingBottom: '3rem',
    [theme.breakpoints.down("sm")]: {
      width: "auto",
      margin: 0,
      padding: 0
    },
  },

  gridSecondary: {
    margin: "0 2rem",
    flexGrow: 0,
    width: "12%",
    paddingBottom: '3rem',
    borderRight : '1px solid' + theme.palette.divider,
    [theme.breakpoints.down("sm")]: {
      width: "auto",
      margin: 0,
      padding: 0
    },
  },

  lastGridSecondary: {
    margin: "0 2rem",
    flexGrow: 0,
    width: "12%",
    paddingBottom: '3rem',
    [theme.breakpoints.down("sm")]: {
      width: "auto",
      margin: 0,
      padding: 0
    },
  },
  logoImage: {
    marginBottom: "20px",
  },
  sectionTitle: {
    color: theme.palette.secondary.main,
    fontWeight: "bold",
    paddingBottom: "10px",
  },
  subtitle: {
    color: theme.palette.secondary.main,
  },

  sectionLink: {
    display: "block",
    marginBottom: "10px",
    color: "#523878",
    fontSize: "12px",
    cursor: "pointer",
    "&:hover": {
      color: theme.palette.secondary.main,
    },
  },
  textBlack: {
    color: theme.palette.secondary.main,
  },
  btnHelp: {
    border: "1px solid #533C76",
    borderRadius: "24px",
    opacity: 1,
    marginBottom: "1em",
  },
  containerBrand: {
    backgroundColor: "#fff",
  },
  copyrightBlock: {
    backgroundImage: "none",
    padding: "24px 80px 40px"
  },
  copyrightText: {
    color: theme.palette.secondary.light,
  },
  girdContainer: {
    borderBottom : '1px solid' + theme.palette.divider,

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      margin: "0 0 2rem",
    },
  },
}));

const SectionLink: FC<{ href: string; label: string }> = ({ href, label }) => {
  const classes = useStyles();

  return (
    <Link href={href} passHref={true}>
      <MaterialLink className={classes.sectionLink}>{label}</MaterialLink>
    </Link>
  );
};

export const Footer: FC = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <footer className={classes.footer}>
      <Grid
        container
        justifyContent="space-between"
        direction="row"
        className={classes.girdContainer}
      >
        <Grid className={classes.gridTitle} item>
          <MaterialLink href="" target="_blank" >
            <Image className={classes.logoImage} alt=""  height={35} width={150} src="/logos/logo_ac.svg" />
          </MaterialLink>
          <Grid item>
            <Grid item>
              <Typography variant="h6" className={classes.subtitle}>
                {t(
                  "Don’t miss your future artwork, sign up for our newsletter"
                )}
              </Typography>
              <CustomInputField placeholder={t("Enter your email")} />
            </Grid>
          </Grid>
        </Grid>
        <Grid className={classes.gridSecondary} item>
          <Typography variant="h6" className={classes.sectionTitle}>
            {t("Company")}
          </Typography>
          <MaterialLink href={"/"}>
            <Typography className={classes.textBlack} variant="body2">{t("Marketplace")}</Typography>
          </MaterialLink>
          <MaterialLink href={"/"}>
            <Typography className={classes.textBlack} variant="body2">{t("Artists")}</Typography>
          </MaterialLink>
          <MaterialLink href={"/"}>
            <Typography className={classes.textBlack} variant="body2">{t("Galeries")}</Typography>
          </MaterialLink>
          <MaterialLink href={"/"}>
            <Typography className={classes.textBlack} variant="body2">{t("Collectors")}</Typography>
          </MaterialLink>
          <MaterialLink href={"/"}>
            <Typography className={classes.textBlack} variant="body2">{t("The consortium")}</Typography>
          </MaterialLink>
        </Grid>
        <Grid className={classes.gridSecondary} item>
          <Typography variant="h6" className={classes.sectionTitle}>
            {t("General")}
          </Typography>
          <MaterialLink href={"/"}>
            <Typography className={classes.textBlack} variant="body2">{t("Home")}</Typography>
          </MaterialLink>
          <MaterialLink href={"/"}>
            <Typography className={classes.textBlack} variant="body2">{t("About")}</Typography>
          </MaterialLink>
          <MaterialLink href={"/"}>
            <Typography className={classes.textBlack} variant="body2">{t("Professional")}</Typography>
          </MaterialLink>
          <MaterialLink href={"/"}>
            <Typography className={classes.textBlack} variant="body2">{t("Contact us")}</Typography>
          </MaterialLink>
        </Grid>
        <Grid className={classes.lastGridSecondary} item>
          <Typography variant="h6" className={classes.sectionTitle}>{t("Legal")}</Typography>
          <MaterialLink href={"/"}>
            <Typography className={classes.textBlack}variant="body2">{t("Terms &")}</Typography>
          </MaterialLink>
          <MaterialLink href={"/"}>
            <Typography className={classes.textBlack} variant="body2">{t("Conditions")}</Typography>
          </MaterialLink>

          <MaterialLink href={"/"}>
            <Typography className={classes.textBlack} variant="body2">{t("Privacy Policy")}</Typography>
          </MaterialLink>
        </Grid>
      </Grid>
      <Grid
        className={classes.copyrightBlock}
        container
        justifyContent="space-between"
        alignItems="center"
        direction="row"
      >
          <Grid item>
          <Typography className={classes.copyrightText}>
          {t("Copyright 2021, designed by twobirds")}
        </Typography>
          </Grid>

          <Grid item>
          <Typography className={classes.copyrightText}>
          {t("twoBirds 2021")}
        </Typography>
          </Grid>
      
      </Grid>
    </footer>
  );
};
