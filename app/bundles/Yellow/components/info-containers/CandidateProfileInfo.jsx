import React from 'react';
export default class CandidateProfileInfo extends React.Component {
  render() {
    return (
      <div className="slds-container--center slds-size--1-of-2">
        <div className="yllw-candidate-profile-info">
          <div className="slds-grid slds-wrap">
            <div className="slds-size--1-of-1">
              <div className="yllw-candidate-profile-info__heading">Bernie Sanders</div>
              <div className="yllw-candidate-profile-info__text">
                Election: Bernie Sanders - President, 2016
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
