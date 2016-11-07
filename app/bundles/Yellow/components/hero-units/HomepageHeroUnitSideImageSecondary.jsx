import React from 'react';
export default class HomepageHeroUnitSideImageSecondary extends React.Component {
  render() {
    return (
      <div className="yllw-hero-unit--side-image-secondary">
        <div className="slds-container--center slds-container--medium">
          <div className="slds-grid slds-wrap slds-size--1-of-3">
            <div className="slds-col--padded slds-size--1-of-1">
              <div className="yllw-hero-unit__text--white-uppercased">Giving you the edge</div>
              <hr className="yllw-hero-unit__line" />
              <div className="yllw-hero-unit__heading--white">Want to see our
              tools in action?</div>
              <div className="yllw-hero-unit__heading--white-small">We’ll help you set up a
                head-to-head A/B test with your current system. We’ve never
                lost a statistically significant A/B test.</div>
            </div>
            <div className="slds-col--padded slds-size--5-of-6 slds-m-top--large">
              <button className="yllw-hero-unit__button">Yellow Express Line</button>
              <div className="yllw-hero-unit__text--white">Free & no strings attached, as always</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
