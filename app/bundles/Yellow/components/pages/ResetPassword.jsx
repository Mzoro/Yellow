import React from 'react';
import WhiteTagline from '../../components/hero-units/WhiteTagline';
import ResetPasswordForm from '../../components/forms/ResetPasswordForm';

export default class ResetPassword extends React.Component {
render() {
  const textResetPassword = 'forgot my password';
  return (
    <div className="container">
      <WhiteTagline text={textResetPassword} />
      <ResetPasswordForm />
    </div>
  );
}
}
