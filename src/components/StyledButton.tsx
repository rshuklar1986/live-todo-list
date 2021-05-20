import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import React from 'react';

const StyledButton = (props: any) => {
  const createStyles = makeStyles({
    button: {
      background:
        props.type === 'primary'
          ? '#34d399'
          : props.type === 'secondary'
          ? '#151823'
          : props.type === 'google'
            ? '#4285F4'
            : props.type === 'facebook'
              ? '#151823'
              : props.type === 'destructive'
                ? '#FF0303'
                : '',
      color: '#FFFFFF',
      border:
        props.type === 'primary'
          ? '2px solid #34d399'
          : props.type === 'secondary'
          ? '2px solid #00F46D'
          : props.type === 'google'
            ? '2px solid #4285F4'
            : props.type === 'facebook'
              ? '2px solid #151823'
              : props.type === 'destructive'
                ? '2px solid #FF0303'
                : '',
      boxShadow:
        props.type === 'primary'
          ? '0px 2px 8px rgba(0, 244, 109, 0.32)'
          : props.type === 'secondary'
          ? '0px 2px 8px rgba(0, 244, 109, 0.32)'
          : props.type === 'google'
            ? ''
            : props.type === 'facebook'
              ? ''
              : '',
      fontSize: '14px',
      fontWeight: 'bold',
      lineHeight: 1,
      textTransform: 'uppercase',
      paddingTop: '8px',
      paddingBottom: '8px',
      paddingLeft: '16px',
      paddingRight: '16px',
      outline: 'none !important',
      '&:hover': {
        background:
          props.type === 'primary'
            ? '#33F68A !important'
            : props.type === 'secondary'
            ? '#151823 !important'
            : props.type === 'google'
              ? '#5a95f5 !important'
              : props.type === 'facebook'
                ? '#1F2431 !important'
                : props.type === 'destructive'
                  ? '#FF3535 !important'
                  : '',

        color: '#FFFFFF',
        border:
          props.type === 'primary'
            ? '2px solid #33F68A !important'
            : props.type === 'secondary'
            ? '2px solid #33F68A !important'
            : props.type === 'google'
              ? '2px solid #5a95f5 !important'
              : props.type === 'facebook'
                ? '2px solid #4285F4 !important'
                : props.type === 'destructive'
                  ? '2px solid #FF3535 !important'
                  : '',
        boxShadow:
          props.type === 'primary'
            ? '0px 2px 8px rgba(0, 244, 109, 0.32)'
            : props.type === 'secondary'
            ? '0px 2px 8px rgba(0, 244, 109, 0.32)'
            : props.type === 'google'
              ? ''
              : props.type === 'facebook'
                ? ''
                : '',
      },
      '&:focus': {
        background:
          props.type === 'primary'
            ? '#10b981'
            : props.type === 'secondary'
            ? '#151823'
            : props.type === 'google'
              ? '#4285F4'
              : props.type === 'facebook'
                ? '#151823'
                : props.type === 'destructive'
                  ? '#FF0303'
                  : '',
        color:
          props.type === 'primary'
            ? '#151823'
            : props.type === 'secondary'
            ? '#00F46D'
            : props.type === 'google'
              ? '#151823'
              : props.type === 'facebook'
                ? '#00F46D'
                : props.type === 'destructive'
                  ? '#FFFFFF'
                  : '',
        boxShadow:
          props.type === 'primary'
            ? '0px 2px 8px rgba(0, 244, 109, 0.32)'
            : props.type === 'secondary'
            ? '0px 2px 8px rgba(0, 244, 109, 0.32)'
            : props.type === 'google'
              ? '0px 2px 8px #000000'
              : props.type === 'facebook'
                ? ''
                : '',
      },
    },
  });

  const classes = createStyles();

  return (
    <>
      <Button
        id={props.id}
        className={classes.button}
        disabled={props.disabled}
        onClick={props.onClick}
      >
        {props.type === 'google' ?
          <div className="flex flex-row justify-center items-center space-x-5">
            <img
              className="h-6 w-6"
              src={'assets/google.png'}
              alt=""/>
            <p>Sign in with Google</p>
            <></>
          </div>
          : props.label}
      </Button>
    </>
  );
};

export default StyledButton;
