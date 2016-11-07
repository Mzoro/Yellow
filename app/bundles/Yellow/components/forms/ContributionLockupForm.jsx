import React from 'react';
export default class ContributionLockupForm extends React.Component {
  render() {
    const YllwLogo = require('../../../../../assets/images/yllwlogo.png');
    return (
      <div className="yllw-contribution-lock-up-form">
        <div className="slds-container--center slds-container--small slds-p-bottom--large">
          <div className="slds-grid slds-wrap">
            <div className="yllw-contribution-lock-up-form__heading slds-size--1-of-1">FOR SECURITY PURPOSES, ALL FIELDS ARE REQUIRED.</div>
            <div className="yllw-contribution-lock-up-form__text slds-size--1-of-1">
              <span>If you don't have the info below handy, or you're unable to locate your contribution using this search form, feel free to email us (preferred method) or call our customer service team at 617-517-7600.</span>
            </div>
            <div className="slds-size--3-of-12 ">
              <p className="yllw-contribution-lock-up-form__text-requisites">Card Number*:</p>
            </div>
            <div className="slds-size--7-of-12">
              <input id="" className="yllw-contribution-lock-up-form__input" type="text" placeholder="Last 4 Digits(####)"/>
            </div>
            <img className="yllw-contribution-lock-up-form__image slds-size--2-of-12" src={YllwLogo}></img>
            <div className="slds-size--3-of-12">
              <p className="yllw-contribution-lock-up-form__text-requisites">Amount*:</p>
            </div>
            <div className="slds-size--9-of-12">
              <input id="" className="yllw-contribution-lock-up-form__input" type="text" placeholder="Amount (10:00)"/>
            </div>
            <div className="slds-size--3-of-12">
              <p className="yllw-contribution-lock-up-form__text-requisites">ZIP Code*:</p>
            </div>
            <div className="slds-size--9-of-12">
              <input id="" className="yllw-contribution-lock-up-form__input" type="text" placeholder="Zip"/>
            </div>
            <div className="slds-size--3-of-12">
              <p className="yllw-contribution-lock-up-form__text-requisites">Date*:</p>
            </div>
            <div className="slds-size--9-of-12">
              <input id="" className="yllw-contribution-lock-up-form__input" type="text" placeholder="Date (MM/DD/YYYY)"/>
            </div>
            <div className="slds-size--3-of-12">
              <p className="yllw-contribution-lock-up-form__text-requisites">Last Name*:</p>
            </div>
            <div className="slds-size--9-of-12">
              <input id="" className="yllw-contribution-lock-up-form__input" type="text" placeholder="Last Name"/>
              <label className="yllw-contribution-lock-up-form__label">The name of the person who made the contribution - if not you, maybe another member of your household?</label>
            </div>
            <div className="slds-size--12-of-12">
              <button className="yllw-contribution-lock-up-form__button">Look Up</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
