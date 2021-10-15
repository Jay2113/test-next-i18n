import { Grid, Typography, Link as MaterialLink } from "@mui/material";
import React, { FC } from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useAuthFunctions } from "aws-cognito-next";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.primary.main,
    borderBottom: '1px solid' + theme.palette.divider,
    borderLeft: '1px solid' + theme.palette.divider,
    borderRight: '1px solid' + theme.palette.divider,
    padding: '56px 0'
  },
  animatedItem: {
    display: "flex",
    margin: "0 auto",
    whiteSpace: "nowrap",
    overflow: "hidden",
  },
  textAnimated: {
    //display: "flex",
  },
  animation: {
    animation: "$myeffet 5s linear infinite",
  },

  "@keyframes myeffet": {
    "0%": {
      transform: "translate(0, 0)",
    },
    "50%": {
      transform: "translate(-50%, 0)",
    },
    "100%": {
      transform: "translate(-100%, 0)",
    },
  },
  paddingImage: {
    padding: "0 40px",
  },
}));

export const Slider: FC = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      justifyContent="center"
      className={classes.container}
    >
      <Grid item className={classes.animatedItem}>
        <Grid item className={classes.textAnimated}>
          <Typography variant="h5" className={classes.animation}>
            {t("DISCOVER MORE WORK")}{" "}
            <MaterialLink className={classes.paddingImage}>
              <Image src="/icons/ellipse.svg" alt="" width={8} height={8} />
            </MaterialLink>
          </Typography>
        </Grid>
        <Grid item className={classes.textAnimated}>
          <Typography variant="h5" className={classes.animation}>
            {t("DISCOVER MORE WORK")}{" "}
            <MaterialLink className={classes.paddingImage}>
              <Image src="/icons/ellipse.svg" alt="" width={8} height={8} />
            </MaterialLink>
          </Typography>
        </Grid>
        <Grid item className={classes.textAnimated}>
          <Typography variant="h5" className={classes.animation}>
            {t("DISCOVER MORE WORK")}{" "}
            <MaterialLink className={classes.paddingImage}>
              <Image src="/icons/ellipse.svg" alt="" width={8} height={8} />
            </MaterialLink>
          </Typography>
        </Grid>
        <Grid item className={classes.textAnimated}>
          <Typography variant="h5" className={classes.animation}>
            {t("DISCOVER MORE WORK")}{" "}
            <MaterialLink className={classes.paddingImage}>
              <Image src="/icons/ellipse.svg" alt="" width={8} height={8} />
            </MaterialLink>
          </Typography>
        </Grid>
        <Grid item className={classes.textAnimated}>
          <Typography variant="h5" className={classes.animation}>
            {t("DISCOVER MORE WORK")}{" "}
            <MaterialLink className={classes.paddingImage}>
              <Image src="/icons/ellipse.svg" alt="" width={8} height={8} />
            </MaterialLink>
          </Typography>
        </Grid>
        <Grid item className={classes.textAnimated}>
          <Typography variant="h5" className={classes.animation}>
            {t("DISCOVER MORE WORK")}{" "}
            <MaterialLink className={classes.paddingImage}>
              <Image src="/icons/ellipse.svg" alt="" width={8} height={8} />
            </MaterialLink>
          </Typography>
        </Grid>
        <Grid item className={classes.textAnimated}>
          <Typography variant="h5" className={classes.animation}>
            {t("DISCOVER MORE WORK")}{" "}
            <MaterialLink className={classes.paddingImage}>
              <Image src="/icons/ellipse.svg" alt="" width={8} height={8} />
            </MaterialLink>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Slider;
