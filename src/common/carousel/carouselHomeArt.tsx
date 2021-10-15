
import { Grid, Typography, Link as MaterialLink, Button } from "@mui/material";
import React, { Children, FC, useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { makeStyles } from "@material-ui/core";
import useEmblaCarousel from "embla-carousel-react";
import { CustomButtonLight } from "../../components/button/button";
import Link from "next/link";
import {autoplay} from './autoplay';
import { CarouselHomeOptions} from './types';

const useStyles = makeStyles((theme) => ({
    container: {
      backgroundColor: theme.palette.primary.main,
      display: "flex",
      border: "1px solid" + theme.palette.divider,
    },
  
    embla: {
      overflow: "hidden",
      borderRight: "1px solid" + theme.palette.divider,
      borderLeft: "1px solid" + theme.palette.divider,
    },
  
    embla__container: {
      display: "flex",
    },
  
    embla__slide: {
      position: "relative",
      flex: "0 0 20%",
      borderLeft: "1px solid" + theme.palette.divider,
      padding: "16px 0",
    },
    underwork: {
      padding: "0 24px",
    },
  
    subtitle: {
      padding: "8px 0;",
    },
    containerSubtitle: {
      display: "flex",
      padding: "8px 0 24px",
    },
    containerWork: {
      padding: "0 32px 0 0",
    },
    colorGrey: {
      color: theme.palette.secondary.light,
    },
  
    containerHotGal: {
      backgroundColor: theme.palette.primary.main,
      padding: "80px 80px 24px",
      borderBottom: "1px solid" + theme.palette.divider,
    },
    itemHotGal: {
      display: "flex",
    },
    paddingTextImg: {
      paddingLeft: "13px",
    },
  }));
export const CarouselHomeArt: FC<CarouselHomeOptions> = ({ images }) => {
    const { t } = useTranslation();
    const classes = useStyles();
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
    const autoplayer = autoplay(emblaApi, 4000);
  
    useEffect(() => {
      if (emblaApi) {
        // Embla API is ready
        emblaApi.on("pointerDown", autoplayer.stop);
        emblaApi.on("init", autoplayer.play);
        emblaApi.on("pointerUp", autoplayer.play);
      }
    }, [emblaApi]);
  
    const handlePrevButton = useCallback(() => {
      emblaApi.scrollPrev();
    }, [autoplayer, emblaApi]);
  
    const handleNextButton = useCallback(() => {
      emblaApi.scrollNext();
    }, [autoplayer, emblaApi]);
    return (
      <>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          className={classes.containerHotGal}
        >
          <Grid item>
            <Typography variant="h5">{t("Hot galeries")}</Typography>
          </Grid>
          <Grid item className={classes.itemHotGal}>
            <Image src="/icons/arrow.svg" alt="" width={13} height={13} />
            <Link href="#" passHref>
              <Typography variant="h6" className={classes.paddingTextImg}>
                {t("See all galeries")}
              </Typography>
            </Link>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
          className={classes.container}
        >
          <Grid item xs={1}>
            <Button onClick={handleNextButton}>
              <Image
                src="/carousel/arrowCarouselLeft.svg"
                width={7}
                height={13}
                alt=""
              />
            </Button>
          </Grid>
          <Grid item className={classes.embla} ref={emblaRef} xs={10}>
            <Grid item className={classes.embla__container}>
              {images.map((image, index) => {
                return (
                  <Grid item className={classes.embla__slide} key={index}>
                    <img src={image.src} width={394} height={240} alt="" />
                    <Grid item className={classes.underwork}>
                      <Typography variant="subtitle1">
                        {t("Galerie Albane")}
                      </Typography>
                      <Typography variant="body2">{t("Paris")}</Typography>
                      <Grid item className={classes.containerSubtitle}>
                        <Grid item className={classes.containerWork}>
                          <Typography
                            variant="body1"
                            className={classes.colorGrey}
                          >
                            {t("Oeuvres")}
                          </Typography>
                          <Typography variant="body2">{t("72")}</Typography>
                        </Grid>
                        <Grid item style={{ paddingRight: "70px" }}>
                          <Typography
                            variant="body1"
                            className={classes.colorGrey}
                          >
                            {t("Followers")}
                          </Typography>
                          <Typography variant="body2">{t("20.5k")}</Typography>
                        </Grid>
                        <CustomButtonLight>{t("Follow")}</CustomButtonLight>
                      </Grid>
                    </Grid>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
  
          <Grid item xs={1}>
            <Button onClick={handlePrevButton}>
              <Image
                src="/carousel/arrowCarouselRight.svg"
                width={7}
                height={13}
                alt=""
              />
            </Button>
          </Grid>
        </Grid>
      </>
    );
  };

  export default CarouselHomeArt;