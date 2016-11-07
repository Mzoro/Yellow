import React from 'react';
import WhiteTagline from '../../components/hero-units/WhiteTagline';
import ContactUsTextInfo from '../../components/texts/ContactUsTextInfo';
import ContactUsEmailForm from '../../components/forms/ContactUsEmailForm';
import ContactUsAdressText from '../../components/texts/ContactUsAdressText';

export default class ContactUs extends React.Component {
render() {
  const textContactUs = 'Contact Us';
  return (
    <div className="container">
      <WhiteTagline text = {textContactUs}/>
      <ContactUsTextInfo />
      <ContactUsEmailForm />
      <ContactUsAdressText />
    </div>
  );
}
}
