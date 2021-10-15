import { FC, useState, useCallback } from "react";
import clsx from "clsx";
import {
  Toolbar,
  AppBar,
  IconButton,
  makeStyles,
  Typography,
  Grid ,
  Link as MaterialLink,
} from "@material-ui/core";
import Link from "next/link";
import { useMediaQuery } from "@material-ui/core";
import {
  TopBarUserMenu,
  UnauthenticatedUserSection,
} from "./top-bar-user-section";
import Image from "next/image";
import { useTranslation } from "react-i18next";
//import { TopBarMenuDrawer } from './menu-drawer';


interface TopBarCustomHomePageProps {
    color: string;
  }
  

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  text: {
    color: theme.palette.secondary.main,
    padding: "0 24px 0 24px",
  },
  appbar: {
    zIndex: 1,
  },
  icon: {
    color: "#523878",
  },
  logo: {
    marginTop: 0,
  },
  hide: {
    display: "none",
  },
  menuButton: {
    color: "black",
    marginRight: theme.spacing(2),
  },
  mainCell: {
    flexGrow: 1,
    width: "auto",
  },

  toolbar: {
    padding: "20px 80px 20px 80px",
  },

  dividerLogo : {
    paddingRight: '1rem',
    borderRight: '1px solid' + theme.palette.divider
  }
}));

export const TopBarCustomHomePage: FC<TopBarCustomHomePageProps> = ({color}) => {
  const bigScreen = useMediaQuery("(min-width:795px)");
  return bigScreen ? <DesktopTopBarCustom color={color} /> : <MobileTopBarCustom  color={color}/>;
};


const MobileTopBarCustom: FC<TopBarCustomHomePageProps> = ({color}) => {
  const styles = useStyles();
  const { t } = useTranslation();
  const [stateOpen, setOpen] = useState<boolean>(false);

  const openDrawer = useCallback(() => setOpen(true), []);
  const closeDrawer = useCallback(() => setOpen(false), []);

  return (
    <>
      <AppBar elevation={0} style={{backgroundColor: color}}>
        <Toolbar variant="dense">
          {/* <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={openDrawer}
              edge="start"
              className={styles.menuButton}
            >
              <MenuIcon />
            </IconButton> */}

          <Grid container justifyContent="flex-start" alignItems="center">
            <MaterialLink href="/">
              <Typography variant="button">{t("Art Consortium")}</Typography>
            </MaterialLink>
          </Grid>
          <Grid>
            <TopBarUserMenu />
            <UnauthenticatedUserSection />
          </Grid>
        </Toolbar>
      </AppBar>
      {/* <TopBarMenuDrawer isOpen={stateOpen} onClose={closeDrawer} /> */}
    </>
  );
};

const DesktopTopBarCustom: FC<TopBarCustomHomePageProps> = ({color}) => {
  const styles = useStyles();

  return (
    <AppBar elevation={0} style={{backgroundColor: color}} className={styles.appbar}>
      <Toolbar variant="dense" className={styles.toolbar}>
        <Grid
          container
          className={styles.mainCell}
          justifyContent="flex-start"
          alignItems="center"
        >
          <MaterialLink href="#" className={styles.dividerLogo}>
            <Image className={styles.logo} src="/logos/logo_ac.svg" alt="" width={27} height={32} />
          </MaterialLink>

          <Link href="/" passHref>
            <Typography variant="button" className={styles.text}>
              {"Oeuvres"}
            </Typography>
          </Link>
          <Link href="/" passHref>
            <Typography variant="button" className={styles.text}>
              {"Artistes"}
            </Typography>
          </Link>
          <Link href="/" passHref>
            <Typography variant="button" className={styles.text}>
              {"Galeries"}
            </Typography>
          </Link>
          <Link href="/" passHref>
            <Typography variant="button" className={styles.text}>
              {"Collectionneurs"}
            </Typography>
          </Link>
          {/* <Link href="#" passHref>
            <Typography variant="button" className={styles.text}>
              {"Le consortium"}
            </Typography>
          </Link> */}
        </Grid>
        <Grid>
          <TopBarUserMenu />
          <UnauthenticatedUserSection />
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
