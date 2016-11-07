import React from 'react';
import WhiteTagline from '../../components/hero-units/WhiteTagline';
import LoginForm from '../../components/forms/LoginForm';

export default class Login extends React.Component {
render() {
  const textLogin = 'sign in to your account';
  return (
    <div className="container">
      <WhiteTagline text={textLogin}/>
      <LoginForm />
    </div>
  );
}
}
