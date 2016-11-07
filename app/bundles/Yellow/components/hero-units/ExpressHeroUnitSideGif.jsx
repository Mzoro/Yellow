import React from 'react';
export default class ExpressHeroUnitSideGif extends React.Component {
  render() {
    const yllowLogo = require('../../../../../assets/images/yllwlogo.png');
    return (
      <div className="yllw-express-hero-unit-side-gif">
        <div className="slds-container--center slds-container--medium">
          <div className="slds-grid slds-wrap">
            <div className="slds-size--1-of-1">
              <img className="yllw-express-hero-unit-side-gif__logo-image" src = {yllowLogo}/>
            </div>
            <div className="slds-size--1-of-2">
              <div className="yllw-express-hero-unit-side-gif__text--uppercased">Super User-Friendly</div>
              <hr></hr>
              <div className="yllw-express-hero-unit-side-gif__heading--large">Easy as 1... <br></br> Yep, just one step.</div>
              <div className="yllw-express-hero-unit-side-gif__heading--small">Raise up to 200% more money and make mobile donations a snap.</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
