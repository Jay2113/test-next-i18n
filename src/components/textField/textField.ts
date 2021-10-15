import { InputBase, TextField, withStyles } from "@material-ui/core";

export const colors = {
    mainBlack: "#23262F",
    mainText : "#5E5E67",
    maingrey : '#5A6279',
    secondaryGrey: '#B5BAC8',
    shadowNav: " rgba(157, 163, 182, 0.5)"
  };

export const CustomTextField = withStyles({
    root: {
      "& label.Mui-focused": {
        color: colors.mainBlack,
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: colors.mainText,
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: colors.mainText,
        },
        "&:hover fieldset": {
          borderColor: colors.mainText,
        },
        "&.Mui-focused fieldset": {
          borderColor: colors.mainText,
        },
      },
    },
  })(TextField);


  export const CustomInputField = withStyles({
    root: {
        width: '280px',
        height :'48px',
        padding : '13px 12px 13px 16px',
        border: '1px solid' + colors.shadowNav,
      "& label.Mui-focused": {
        color: colors.mainBlack,
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: colors.mainText,
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: colors.mainText,
        },
        "&:hover fieldset": {
          borderColor: colors.mainText,
        },
        "&.Mui-focused fieldset": {
          borderColor: colors.mainText,
        },
      },
    },
  })(InputBase);