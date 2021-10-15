import { Button, TextField } from "@material-ui/core";
import { createTheme, withStyles } from "@material-ui/core/styles";

export const colors = {
  mainBlack: "#23262F",
  mainWhite: "#FFFFFF",
  errorRed: "#ff1744",
  shadowNav: " rgba(157, 163, 182, 0.5)",
  grey400: '#9DA3B6',
  grey600: '#6C7591',
  softBlue : '#9BB8FF'
};

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.mainWhite,
    },
    secondary: {
      main: colors.mainBlack,
      light : colors.grey400,
    },
    divider: colors.shadowNav,
  },
  typography: {
    fontFamily: ["Space Grotesk"].join(","),
    fontSize: 12,

    button: {
      fontWeight: 700,
      fontSize: "14px",
      fontStyle: "normal",
      textTransform: "none",
    },
    subtitle1: {
      fontSize: "18px",
      lineHeight: "26px",
      fontStyle: "normal",
      fontWeight: 400,
    },

    body1: {
      fontSize: "14px",
      lineHeight: "22px",
      fontStyle: "normal",
      fontWeight: 500,
    },

    body2: {
      fontSize: "14px",
      lineHeight: "22px",
      fontStyle: "normal",
      fontWeight: 400,
    },

    caption: {
      fontSize: "12px",
      lineHeight: "20px",
      fontStyle: "normal",
      fontWeight: 500,
    },

    h1: {
      fontSize: "144px",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "152px",
      margin: "5px 0",
    },

    h2: {
      fontSize: "80px",
      lineHeight: "88px",
      fontStyle: "normal",
      fontWeight: 600,
    },

    h3: {
      fontSize: "64px",
      lineHeight: "72px",
      fontStyle: "normal",
      fontWeight: 600,
      margin: "5px 0",
    },
    h4: {
      fontSize: "48px",
      lineHeight: "56px",
      fontStyle: "normal",
      fontWeight: 500,
      margin: "5px 0",
    },
    h5: {
      fontSize: "32px",
      lineHeight: "40px",
      fontStyle: "normal",
      fontWeight: 400,
      margin: "5px 0",
    },
    h6: {
      fontSize: "24px",
      lineHeight: "32px",
      fontStyle: "normal",
      fontWeight: 400,
      margin: "5px 0",
    },
  },
  overrides: {
    MuiButton: {
      textPrimary: {
        color: colors.mainBlack,
      },
    },
    MuiTypography: {
      colorPrimary: {
        color: colors.mainBlack,
      },
    },
  }
});


