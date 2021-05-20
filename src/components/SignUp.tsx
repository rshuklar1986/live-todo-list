import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth, generateUserDocument, signInWithGoogle } from '../firebase';
import StyledButton from './StyledButton';
import StyledInputField from './StyledInputField';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [error, setError] = useState<string | null>(null);

  const createUserWithEmailAndPasswordHandler = async (event: any, email: any, password: any) => {
    event.preventDefault();
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await generateUserDocument(user, { displayName });
    } catch (error) {
      setError('Error Signing up with email and password');
    }

    setEmail('');
    setPassword('');
    setDisplayName('');
  };

  return (
    <div className="mt-8">
      <h1 className="text-3xl mb-2 text-center font-bold">Sign Up</h1>
      <div className="border-2 border-black mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8">
        <StyledInputField
          id="displayName"
          label="Display Name"
          value={displayName}
          onChange={(event: any) => setDisplayName(event.target.value)}
          error={error}
          helperText={error}
          endAdornment={<PermIdentityIcon/>}
        />
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
            type={"primary"}
            onClick={(event: any) => {
              createUserWithEmailAndPasswordHandler(event, email, password);
            }}
            label={"Sign up"}
          />
        </div>

        <p className="text-center my-3">or</p>

        <div className="w-full flex flex-col">
          <StyledButton
            type={"google"}
            onClick={() => {
              signInWithGoogle();
            }}
          />
        </div>

        <p className="text-center my-3">
          Already have an account?{' '}
          <Link to="/"
                className="text-blue-500 hover:text-blue-600">
            Sign in here
          </Link>{' '}
        </p>
      </div>
    </div>
  );
};

export default SignUp;