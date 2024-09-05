import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './signPopUp.css';
import LoginForm from '../loginForm/loginForm';
import SignUpForm from '../signUpForm/signUpForm';

interface SignPopUpProps {
  open: boolean;
  source: string;
  onClose: () => void;
}

const SignPopUp: React.FC<SignPopUpProps> = ({ open, source, onClose }) => {
  const [mySource, setMySource] = useState<string>(source);
  
  useEffect(() => {
    setMySource(source);
  }, [source]);

  if (!open) return null;

  const handleLoginSubmit = (email: string, password: string) => {
    console.log('Logging in with:', { email, password });
    onClose();
  };

  const handleSignUpSubmit = (nickname: string, email: string, password: string, confirmPassword: string) => {
    console.log('Signing up with:', { nickname, email, password, confirmPassword });
    onClose();
  };

  return ReactDOM.createPortal(
    <>
      <div className="overLay" onClick={onClose}></div>
      <div className="SignPopUpContainer">
        <button className="closeButton" onClick={onClose}>&#10005;</button>
        {mySource === 'log in' ? (
          <LoginForm onSubmit={handleLoginSubmit} onChangeSource={setMySource} />
        ) : (
          <SignUpForm onSubmit={handleSignUpSubmit} onChangeSource={setMySource} />
        )}
      </div>
    </>,
    document.getElementById('portal') as HTMLElement
  );
};

export default SignPopUp;
