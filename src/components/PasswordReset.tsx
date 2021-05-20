import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import StyledButton from './StyledButton';
import StyledInputField from './StyledInputField';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [emailHasBeenSent, setEmailHasBeenSent] = useState(false);
  const [error, setError] = useState(null);

  const sendResetEmail = (event: any) => {
    event.preventDefault();
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        setEmailHasBeenSent(true);
        setTimeout(() => {setEmailHasBeenSent(false)}, 3000);
      })
      .catch(() => {
        setError(null);
      });
  };

  return (
    <div className="mt-8">
      <h1 className="text-xl text-center font-bold mb-3">
        Reset your Password
      </h1>
      <div className="border-2 border-black mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8">
          {emailHasBeenSent && (
            <div className="py-3 bg-green-400 w-full text-white text-center mb-3">
              An email has been sent to you!
            </div>
          )}
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

          <div className="w-full flex flex-col">
            <StyledButton
              type={"primary"}
              onClick={(event: any) => {
                sendResetEmail(event);
              }}
              label={"Send me a reset link"}
            />
          </div>

        <Link
          to="/"
          className="my-2 text-blue-700 hover:text-blue-800 text-center block"
        >
          &larr; back to sign in page
        </Link>
      </div>
    </div>
  );
};

export default PasswordReset;