import React from 'react';
export default class ExpressHeroUnitWithPicture extends React.Component {
  render() {
    return (
      <div className="yllw-express-hero-unit-with-picture">
        <div className="slds-container--center slds-container--medium">
          <div className="slds-grid slds-wrap">
            <div className="slds-size--1-of-2">
            </div>
            <div className="slds-size--1-of-2">
              <div className="yllw-express-hero-unit-with-picture__text--uppercased">The best part?</div>
              <hr></hr>
              <div className="yllw-express-hero-unit-with-picture__heading--large">Express is growing <br></br> and growing.</div>
              <div className="yllw-express-hero-unit-with-picture__heading--small">
                40% of all unique ActBlue users have Express accounts, and those users are likely to give to more than one campaign or organization.
              </div>
              <div className="yllw-express-hero-unit-with-picture__text">Plus, the more you use us, the more Express users your campaign will have.</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
