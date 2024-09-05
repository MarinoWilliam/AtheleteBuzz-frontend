import React, { Dispatch, SetStateAction, useState } from 'react';
import './signUpForm.css'
interface SignUpFormProps {
  onSubmit: (nickname: string, email: string, password: string, confirmPassword: string) => void;
  onChangeSource: Dispatch<SetStateAction<string>>;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ onSubmit, onChangeSource }) => {
  const [nickname, setNickname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(nickname, email, password, confirmPassword);
  };

  return (
    <form className="signupFormContainer" onSubmit={handleSubmit}>
      <h2 className='popUpSignUpLogo'>Athlete Buzz</h2>
      <div className="formSignUpGroup">
        <input
          type="text"
          id="nickname"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder="Nickname"
          required
          className='formSignUpInput'
        />
      </div>
      <div className="formSignUpGroup">
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className='formSignUpInput'
        />
      </div>
      <div className="formSignUpGroup">
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          className='formSignUpInput'
        />
      </div>
      <div className="formSignUpGroup">
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
          required
          className='formSignUpInput'
        />
      </div>
      <button type="submit" className="submitSignUpButton">Sign Up</button>
      <span className='suggestLogIn'>
        already have an account? |
        <span className="suggestLogInButton" onClick={() => onChangeSource('log in')}>Log In</span>
      </span>
    </form>
  );
};

export default SignUpForm;
