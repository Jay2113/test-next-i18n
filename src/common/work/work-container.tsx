import { Grid, makeStyles } from "@material-ui/core";
import { Button, Typography, ButtonBase} from "@mui/material";
import { palette } from "@mui/system";
import { useTranslation } from "next-i18next";
import React, { FC } from "react";
import Image from "next/image";
import { colors } from "../../theme";
import { Work } from './data'



const useStyles = makeStyles((theme) => ({
  duration: {
    color: theme.palette.secondary.light,
    padding: '0 200px 0 8px'
  },
  btnLike: {
    border: "1px solid" + theme.palette.divider,
    borderRadius: "24px",
    opacity: 1,
    marginBottom: "1em",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.palette.primary.main,
    justifyContent: "center",
    borderLeft: "1px solid" + theme.palette.divider,
    borderRight: "1px solid" + theme.palette.divider,
    borderBottom: "1px solid" + theme.palette.divider,

  },
  containerSubtitle: {
    display: "flex",
    padding: '24px 33px'
  },
  btnTag: {
    border: "1px solid" + theme.palette.divider,
    borderRadius: "initial",
    color: colors.grey600,
    padding: '3px',
    margin: 0,
  },
  colorGrey: {
    color: theme.palette.secondary.light,
  },
  underwork: {
      padding: '28px 24px'
  },
  subtitle: {
      padding: '8px 0;'
  },
  containerArtist: {
      padding: '0 32px 0 0'
  }
}));

type WorkContainerOptions = {
    work: Work;
}

export const WorkContainer: FC<WorkContainerOptions> = ({ work }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <>
      <Grid item className={classes.container}>
        <Grid item className={classes.containerSubtitle}>
          <Typography variant="body1">{work.price}</Typography>
          <Typography className={classes.duration} variant="body1">
            {work.duration}
          </Typography>
          <Button className={classes.btnLike}>
            <Image src="/icons/heart.svg" alt="" width={13} height={12} />
            <Typography variant="caption" style={{paddingLeft: '5px'}}>{work.like}</Typography>
          </Button>
        </Grid>
        <Image src={work.work} alt="" width={240} height={240} />
        <Grid item className={classes.underwork}>
          <Typography className={classes.btnTag} variant="caption">
            {work.tag}
          </Typography>
          <Typography variant="subtitle1" className={classes.subtitle}>{work.title}</Typography>
          <Grid item style={{display: 'flex'}}>
            <Grid item className={classes.containerArtist}>
              <Typography variant="body1" className={classes.colorGrey}>{work.subtitleArt}</Typography>
              <Typography variant="body2">{work.artist}</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" className={classes.colorGrey}>{work.subtitleGalery}</Typography>
              <Typography variant="body2">{work.galery}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
