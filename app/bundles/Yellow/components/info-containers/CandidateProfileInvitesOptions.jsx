import React from 'react';
export default class CandidateProfileInvitesOptions extends React.Component {
  render() {
    const BernieSanders = require('../../../../../assets/images/BernieSanders.png');

    return (
      <div className="slds-container--center slds-size--1-of-2">
        <div className="yllw-candidate-profile-invites-options">
          <div className="slds-grid slds-wrap">
            <div className="slds-size--1-of-1">
              <img
                className="image yllw-candidate-profile-invites-options__image"
                src={BernieSanders}
              />
            </div>
            <div className="slds-size--1-of-1">
              <div className="yllw-candidate-profile-invites-options__text--bold">
                Already a supporter?
              </div>
              <div className="yllw-candidate-profile-invites-options__text">
                Invite others to join you
              </div>
            </div>
            <div className="slds-size--1-of-1">
              <button className="yllw-candidate-profile-invites-options__button--orange">
                Create a page
              </button>
            </div>
            <div className="slds-size--1-of-1">
              <button className="yllw-candidate-profile-invites-options__button--orange">
                Plan an event
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
