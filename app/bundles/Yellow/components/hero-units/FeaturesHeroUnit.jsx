import React from 'react';
export default class FeaturesHeroUnit extends React.Component {
render() {
  return (
    <div className="yllw-hero-unit--features">
      <div className="slds-grid slds-wrap slds-grid--align-center">
        <div className="slds-size--1-of-1">
          <div className="yllw-hero-unit__text--white-centered-uppercased">Chock Full of ‘em</div>
        </div>
        <div className="slds-size--1-of-12">
          <hr></hr>
        </div>
        <div className="slds-size--1-of-1">
          <div className="yllw-hero-unit__heading--white-centered"><b>Features</b></div>
        </div>
        <div className="slds-size--1-of-1">
          <div className="yllw-hero-unit__text--white-centered">
            Everything included at no extra charge. It‘s that simple.
          </div>
        </div>
        <div className="slds-size--3-of-12 slds-text-align--center">
          <button className="yllw-hero-unit__button">Get Started</button>
        </div>
      </div>
    </div>
  );
}
}
