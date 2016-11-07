import React from 'react';
import WhiteTagline from '../../components/hero-units/WhiteTagline';
import ChangePasswordForm from '../../components/forms/ChangePasswordForm';

export default class ChangePassword extends React.Component {
render() {
  const textChangePassword = 'change your password';
  return (
    <div className="container">
      <WhiteTagline text={textChangePassword}/>
      <ChangePasswordForm />
    </div>
  );
}
}
