import React from 'react';
export default class HeroBlueFaq extends React.Component {
  render() {
    return (
      <div className="yllw-faq-hero--blue">
        <div className="slds-container--center slds-container--medium">
          <div className="slds-grid slds-wrap sdls-grid--align-center">
            <div className="slds-size--1-of-1">
              <a className="yllw-faq-hero__heading" href="#">Getting Started</a>
            </div>
            <div className="slds-size--1-of-1">
              <a className="yllw-faq-hero__text" href="#">
                READ THIS TO GET YOUR ACCOUNT UP AND RUNNING
              </a>
            </div>
            <div className="slds-size--1-of-3 slds-text-align--center">
              <button className="yllw-faq-hero__button" href="#">
                STEP 1: CONTRIBUTION FORMS
              </button>
            </div>
            <div className="slds-size--1-of-3 slds-text-align--center">
              <button className="yllw-faq-hero__button" href="#">STEP 2: THE DASHBOARD</button>
            </div>
            <div className="slds-size--1-of-3 slds-text-align--center">
              <button className="yllw-faq-hero__button" href="#">STEP 3: DONOR DATA</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
