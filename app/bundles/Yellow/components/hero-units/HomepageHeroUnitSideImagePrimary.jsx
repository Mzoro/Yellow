import React from 'react';
export default class HomepageHeroUnitSideImagePrimary extends React.Component {
  render() {
    return (
      <div className="yllw-hero-unit--side-image-primary">
        <div className="slds-container--center slds-container--medium">
          <div className="slds-grid slds-wrap">
            <div className="slds-col--padded slds-size--1-of-1">
              <div className="yllw-hero-unit__text--uppercased">Single-Click Donating</div>
              <hr className="yllw-hero-unit__line" />
              <div className="yllw-hero-unit__heading--large">Meet Express Lane</div>
              <button className="yllw-hero-unit__button--express-line">Yellow Express Line</button>
              <div className="yllw-hero-unit__heading--small">
                2,382,017 Democratic donors have saved their
                payment information with us via an ActBlue Express account.
              </div>
              <div className="yllw-hero-unit__text--grey">
                The best part? Express users can use their account to give to
                any candidate or organization on ActBlue. And with our Express Lane
                toolset, you can build single-click automatic payment
                links for your fundraising emails. That means happier
                 supporters and higher conversion rates.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
