import MailOutlineIcon from '@material-ui/icons/MailOutline';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth, signInWithGoogle } from '../firebase';
import StyledButton from './StyledButton';
import StyledInputField from './StyledInputField';

const SignIn = () => {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const signInWithEmailAndPasswordHandler = (event: any, email: any, password: any) => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password).catch(error => {
      setError('Incorrect email or password.');
    });
  };

  return (
    <div className="mt-8">
      <h1 className="text-3xl mb-2 text-center font-bold">Sign In</h1>
      <div className="border-2 border-black mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8">
        <StyledInputField
          id="email"
          label="Email"
          value={email}
          onChange={(event: any) => setEmail(event.target.value)}
          error={error}
          helperText={error}
          endAdornment={<MailOutlineIcon/>}
          type={'email'}
        />
        <StyledInputField
          id="password"
          label="Password"
          value={password}
          onChange={(event: any) => setPassword(event.target.value)}
          error={error}
          helperText={error}
          endAdornment={<VpnKeyIcon/>}
          type={'password'}
        />

        <div className="w-full flex flex-col">
          <StyledButton
            type={'primary'}
            onClick={(event: any) => {
              signInWithEmailAndPasswordHandler(event, email, password);
            }}
            label={'Sign in'}
          />
        </div>

        <p className="text-center my-3">or</p>

        <div className="w-full flex flex-col">
          <StyledButton
            type={'google'}
            onClick={() => {
              signInWithGoogle();
            }}
          />
        </div>

        <p className="text-center my-3">
          Don't have an account?{' '}
          <Link to="signUp"
                className="text-blue-500 hover:text-blue-600">
            Sign up here
          </Link>{' '}
          <br/>{' '}
          <Link to="passwordReset"
                className="text-blue-500 hover:text-blue-600">
            Forgot Password?
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;