import React, { Dispatch, SetStateAction, useState } from 'react';

import { ReactComponent as GoogleIcon } from '../../assets/icons/google-icon.svg';

import './loginForm.css';

interface LoginFormProps {
  onSubmit: (email: string, password: string) => void;
  onChangeSource: Dispatch<SetStateAction<string>>;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, onChangeSource }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(email, password);
  };

  return (
    <div className="loginFormContainer" >
      <h2 className='popUpLogInLogo'>Welcome to Athlete Buzz !</h2>
      <div className='googleButton'>
        <GoogleIcon className='googleIcon' />
        <span className='googleText'>
          Log in With Google
        </span>
      </div>
      <span className='or'>or</span>
      <form className="manualLoginContainer" onSubmit={handleSubmit}>
        <div className="formLogInGroup">
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder=" email"
            required
            className='formLogInInput'
          />
        </div>
        <div className="formLogInGroup">
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder=" password"
            className='formLogInInput'
          />
        <span className='forgot'> forgot password?</span>
        </div>
        <button type="submit" className="submitLogInButton">Log In</button>
        <span className='suggestSignUp'>
          create an account |
          <span className="suggestSignUpButton" onClick={() => onChangeSource('sign up')}>Sign Up</span>
        </span>
      </form>
    </div>
  );
};

export default LoginForm;
