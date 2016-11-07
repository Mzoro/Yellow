import React from 'react';
export default class ExpressHeroUnitTopImage extends React.Component {
  render() {
    const pictureExpress = require('../../../../../assets/images/pictureexpress.png');
    return (
      <div className="yllw-express-hero-unit-top-image">
        <div className="container slds-text-align--center">
          <div className="slds-grid slds-wrap slds-grid--align-center">
            <div className="slds-col slds-size--1-of-1">
              <img className="yllw-express-hero-unit-top-image__picture" src = {pictureExpress} />
            </div>
            <div className="slds-size--1-of-1">
              <div className="yllw-express-hero-unit-top-image__heading--white">Together we’re changing our country.</div>
            </div>
            <div className="slds-size--6-of-12">
              <div className="yllw-express-hero-unit-top-image__heading--white-small">The Express user community is shared across all candidates and organizations using ActBlue.
                 That means that the efforts of the most high-profile Senator, the scrappiest
                 school board candidate, and an organization working to save the environment all benefit each other.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
