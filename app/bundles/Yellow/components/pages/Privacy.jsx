import React from 'react';
import WhiteTagline from '../../components/hero-units/WhiteTagline';
import PrivacyFinePrint from '../../components/texts/PrivacyFinePrint';
export default class Privacy extends React.Component {
  render() {
    const textWhiteTagline = 'Privacy Policy';
    return (
      <div className="container">
        <hr />
        <div className="slds-container--center slds-container--small">
          <div className="slds-grid--vertical">
            <WhiteTagline text = {textWhiteTagline}/>
            <PrivacyFinePrint />
          </div>
        </div>
        <hr />
      </div>
    );
  }
}
