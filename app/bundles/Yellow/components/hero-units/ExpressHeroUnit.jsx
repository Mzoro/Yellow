import React from 'react';
export default class ExpressHeroUnit extends React.Component {
  render() {
    const yllowLogo = require('../../../../../assets/images/yllwlogo.png');
    return (
      <div className="yllw-express-hero-unit">
        <div className="slds-container--medium slds-container--center slds-text-align--center">
          <div className="slds-grid slds-wrap slds-grid--align-center">
            <div className="slds-col slds-size--1-of-1">
              <img className="yllw-express-hero-unit__logo-image" src={yllowLogo} />
            </div>
            <div className="slds-size--1-of-1">
              <div className="yllw-express-hero-unit__heading--white">ActBlue Express helps campaigns and organizations harness the power of a nationwide grassroots movement.</div>
            </div>
            <div className="slds-size--3-of-12">
              <button className="yllw-express-hero-unit__button">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
