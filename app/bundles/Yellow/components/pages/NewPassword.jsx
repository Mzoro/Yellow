import React from 'react';
import WhiteTagline from '../../components/hero-units/WhiteTagline';
import NewPasswordForm from '../../components/forms/NewPasswordForm';

export default class NewPassword extends React.Component {
render() {
  const textNewPassword = 'change your password';
  return (
    <div className="container">
      <WhiteTagline text={textNewPassword} />
      <NewPasswordForm />
    </div>
  );
}
}
