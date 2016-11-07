import React from 'react';
export default class HomepageHeroUnit extends React.Component {
render() {
  return (
    <div className="yllw-hero-unit">
      <div className="slds-container--center slds-container--medium">
        <div className="slds-grid slds-wrap">
          <div className="slds-col--padded slds-size--1-of-1">
            <div className="yllw-hero-unit__heading--white">
              Flexible free fundraising tools to harness the power of the grassroots
            </div>
          </div>
          <div className="slds-size--1-of-4 slds-text-align--center slds-m-left--small">
            <button className="yllw-hero-unit__button">Get started</button>
            <div className="yllw-hero-unit__text--white">No commitment needed</div>
          </div>
        </div>
      </div>
    </div>
  );
}
}
