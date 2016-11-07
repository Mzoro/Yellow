import React from 'react';
import WhiteTagline from '../../components/hero-units/WhiteTagline';
import TermsOfUseFinePrint from '../../components/texts/TermsOfUseFinePrint';
export default class TermsOfUse extends React.Component {
  render() {
    const textTermsOfUse = 'The Fine Print';
    return (
      <div className="container">
        <hr />
        <div className="slds-container--center slds-container--small">
          <div className="slds-grid--vertical">
            <WhiteTagline text = {textTermsOfUse}/>
            <TermsOfUseFinePrint />
          </div>
        </div>
        <hr />
      </div>
    );
  }
}
