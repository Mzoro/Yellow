import React from 'react';
export default class ContributeCandidate extends React.Component {
  render() {
    const candidateImage = require('../../../../../assets/images/bernie.png');
    return (
      <div className="yllw-contribute-candidate">
        <div className="slds-container--center slds-container--medium">
          <div className="slds-grid slds-wrap">
            <div className="slds-size--1-of-1 slds-text-align--center">
            <img src={candidateImage} className="yllw-contribute-candidate__image"></img>
            </div>
            <div className="slds-size--5-of-12 slds-p-right--medium">
              <p className="yllw-contribute-candidate__heading--medium">Stand with Bernie</p>
              <div className="yllw-contribute-candidate__text--small">We are at a moment of truth.
                We need to face up to the reality of where we are as a nation, and we need a mass movement of people to fight for change. I believe America is ready for a new path to the future.<br></br>
                Make a contribution to our presidential campaign today. I can't wait to see what we will accomplish together.<br></br>
                  - Bernie Sanders
              </div>
            </div>
            <div className="yllw-contribute-candidate-form slds-size--7-of-12">
              <p className="yllw-contribute-candidate-form__heading">Express Donate</p>
              <div className="yllw-contribute-candidate-form__text">Hi Username!<br></br>
                We have your donor information on file. Just complete your payment information and donate with one more click.
              </div>
              <div className="slds-container--center slds-size--10-of-12">
                <div className="slds-grid slds-wrap">
                  <div className="slds-size--6-of-12 slds-text-align--center ">
                    <button className="slds-size--9-of-12 yllw-contribute-candidate-form__button">Donate $15</button>
                    <button className="slds-size--9-of-12 yllw-contribute-candidate-form__button">Donate $50</button>
                    <button className="slds-size--9-of-12 yllw-contribute-candidate-form__button">Donate $250</button>
                    <button className="slds-size--9-of-12 yllw-contribute-candidate-form__button">Donate $1,000</button>
                  </div>
                  <div className="slds-size--6-of-12 slds-text-align--center">
                    <button className="slds-size--9-of-12 yllw-contribute-candidate-form__button">Donate $27</button>
                    <button className="slds-size--9-of-12 yllw-contribute-candidate-form__button">Donate $100</button>
                    <button className="slds-size--9-of-12 yllw-contribute-candidate-form__button">Donate $500</button>
                    <button className="slds-size--9-of-12 yllw-contribute-candidate-form__button">Other Amount</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
