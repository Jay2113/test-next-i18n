import { FC, useRef, useState } from "react";
import { useAuth } from "../../../contexts/auth/auth";
import router, { useRouter } from "next/router";
import {
  Button,
  IconButton,
  ListItem,
  ListItemText,
  makeStyles,
  Typography,
  useMediaQuery,
  Link as MaterialLink
} from "@material-ui/core";
import { CustomButton } from "../../button/button";
import Link from "next/link";
import Image from "next/image"

//import { TopBarUserAccountMenu } from './user-account-menu';
import { GetServerSideProps } from "next";

const useStyles = makeStyles((theme) => ({
  textBlack: {
    color: theme.palette.secondary.main,
    fontWeight: 500,
    fontStyle: "normal",
    padding: "3px 1rem 0 1rem",
    fontSize: "14px",
    cursor: "pointer",
    display: "inline-block",
  },

  textWhite: {
    color: theme.palette.primary.main,
    cursor: "pointer",
    whiteSpace: "nowrap"
  },
  icon: {
  padding: '0 1rem',
  marginTop: '8px'
  },
  contentUnlogged: {
    display: "flex",
    alignItems: "center",
  },
}));

export const TopBarUserMenu: FC = () => {
  const styles = useStyles();
  const { auth } = useAuth();
  const [isUserMenuOpen, setUserMenuOpen] = useState<boolean>(false);
  const menuAnchorRef = useRef<HTMLButtonElement>();

  if (auth.authenticated) {
    return (
      <>
        <Image src="/icons/search.svg" alt="" width={18} height={18}></Image>
        <Image src="/icons/wallet.svg" alt="" width={18} height={18}></Image>
        <Image src="/icons/user.png" alt=""  width={18} height={18}></Image>
        {/* <TopBarUserAccountMenu
          anchorEl={menuAnchorRef.current!}
          isOpen={isUserMenuOpen}
          onClose={() => setUserMenuOpen(false)}
        /> */}
      </>
    );
  }
  return null;
};

export const UnauthenticatedUserSection: FC = () => {
  const { auth } = useAuth();
  const styles = useStyles();
  const largeDevices = useMediaQuery("(min-width:600px)");
  if (auth.authenticated) {
    return null;
  }

  const handleLogin = () => {
    router.push("/login");
  };

  if (!largeDevices) {
    return (
      <div className={styles.contentUnlogged}>
        <a href="#" className={styles.icon}>
          <Image src="/icons/search.svg"  alt="" width={18} height={18} ></Image>
        </a>
        <a href="#">
          <Image src="/icons/menu.svg" alt="" width={18} height={18} ></Image>
        </a>
      </div>
    );
  }

  return (
    <div className={styles.contentUnlogged}>
      <MaterialLink href="#">
        <Image src="/icons/search.svg" alt="" width={18} height={18} ></Image>
      </MaterialLink>

      <CustomButton variant="outlined" onClick={handleLogin}>
        <Typography variant="button" className={styles.textWhite}>
          {"Sign in"}
        </Typography>
      </CustomButton>
    </div>
  );
};
