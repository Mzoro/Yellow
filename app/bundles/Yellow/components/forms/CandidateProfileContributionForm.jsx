import React from 'react';
export default class CandidateProfileContributionForm extends React.Component {
  render() {
    return (
      <div className="slds-container--center slds-size--1-of-2">
        <div className="yllw-candidate-profile-contribution-form">
          <div className="slds-grid slds-wrap">
            <div className="slds-col slds-size--4-of-6 slds-align-middle">
              <span className="yllw-candidate-profile-contribution-form__text">$</span>
            </div>
            <div className="slds-col slds-size--1-of-6 slds-align-middle">
              <input className="yllw-candidate-profile-contribution-form__input" type="text"/>
            </div>
            <div className="slds-col slds-size--1-of-6 slds-align-middle">
              <button className="yllw-candidate-profile-contribution-form__button--green">
              Contribute</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
