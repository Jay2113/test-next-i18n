import { Button, withStyles } from "@material-ui/core";

export const colors = {
    buttonColorEnabled: "#23262F",
    buttonColorDisabled: "#23262F",
    btnColorLight: "#FFFFFF",
    shadowNav: " rgba(157, 163, 182, 0.5)"
  };


export const CustomButton = withStyles({
    root: {
      height: "40px",
      width: "79px",
      borderRadius: 0,
      padding: "9px 15px",
      margin: '0 1rem',
      backgroundColor: colors.buttonColorEnabled,
      "&:hover": {
        backgroundColor: colors.buttonColorEnabled,
      },
      "&$focused": {
        backgroundColor: colors.buttonColorEnabled,
      },
    },
  })(Button);

  export const CustomButtonLight = withStyles({
    root: {
      height: "40px",
      width: "79px",
      borderRadius: 0,
      padding: "9px 15px",
      margin: '0 1rem',
      border: '1px solid ' + colors.shadowNav,
      backgroundColor: colors.btnColorLight,
      "&:hover": {
        backgroundColor: colors.btnColorLight,
      },
      "&$focused": {
        backgroundColor: colors.btnColorLight,
      },
    },
  })(Button);