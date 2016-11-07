import React from 'react';

export default class HeroOrangeFaq extends React.Component {
  render() {
    return (
      <div className="yllw-faq-hero--orange">
        <div className="slds-container--center slds-container--medium">
          <div className="slds-grid slds-wrap sdls-grid--align-center">
            <div className="slds-size--1-of-1">
              <a className="yllw-faq-hero__heading" href="#">FAQ</a>
            </div>
            <div className="slds-size--1-of-1">
              <a className="yllw-faq-hero__text" href="#">ANSWERS FOR DONORS AND CAMPAIGNS</a>
            </div>
            <div className="slds-size--1-of-2 slds-text-align--center">
              <button className="yllw-faq-hero__button" href="#">DONORS</button>
            </div>
            <div className="slds-size--1-of-2 slds-text-align--center">
              <button className="yllw-faq-hero__button" href="#">CAMPAIGNS</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
