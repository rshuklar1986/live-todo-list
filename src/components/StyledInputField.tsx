import { makeStyles } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';
import React from 'react';

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#10b981",
    },
    "& label.Mui-disabled": {
      color: "#546179",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#10b981",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#546179",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#10b981",
      },
      "&:hover fieldset": {
        borderColor: "#10b981",
      },
      "&.Mui-disabled fieldset": {
        borderColor: "#546179",
      },
      "&.Mui-disabled": {
        color: "#546179",
      },
    },
  },
})(TextField);

const StyledInputField = React.forwardRef((props: any, ref) => {
  const createStyles = makeStyles({
    root: {
      marginBottom: "1.5rem",
      width: "100%",
    },
    inputField: {
      width: "100%",
      border: "none",
      borderRadius: "4px",
      color: "#000000",
    },
    inputLabel: {
      color: "#C6CFDD",
    },
    bottomMargin: {
      marginBottom: "1.5rem",
    },
  });

  const classes = createStyles();

  return (
    <>
      <CssTextField
        {...props.params}
        className={classes.root}
        id={props.id}
        error={props.error}
        helperText={props.error ? props.helperText : ""}
        label={props.label}
        variant="outlined"
        value={props.value}
        onChange={props.onChange}
        InputProps={{
          className: classes.inputField,
          endAdornment: props.endAdornment,
          inputProps: {
            min: props.min,
            max: props.max,
            pattern: props.pattern,
            maxLength: props.maxlength,
          },
          startAdornment: props.startAdornment,
        }}
        InputLabelProps={{
          className: classes.inputLabel,
        }}
        multiline={props.multiline}
        rows={props.rows || 1}
        type={props.type}
        disabled={props.disabled}
      >
      </CssTextField>
    </>
  );
});

export default StyledInputField;
