import React from 'react';
export default class AccountSettings extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="yllw-account-settings-form">
          <hr/>
          <div className="slds-container--center slds-size--7-of-12">
            <div className="slds-grid slds-wrap">
              <div className="yllw-account-settings-form__heading slds-size--1-of-1">
                Account configuration </div>
              <div className="yllw-account-settings-form__text slds-size--1-of-1">
                Edit your Express Donor Profile</div>
              <div className="slds-size--3-of-12 ">
                <p className="yllw-account-settings-form__label">Email</p>
              </div>
              <div className="slds-size--9-of-12 ">
                <div className="slds-size--4-of-12">
                  <input id="campaign_finance_id" className="yllw-account-settings-form__input"/>
                </div>
                <span className="yllw-account-settings-form__help-description">
                  Must be valid; see our<a href=""> privacy policy</a>
                </span>
              </div>
              <div className="slds-size--3-of-12 ">
                <p className="yllw-account-settings-form__label">Site Activity Emails</p>
              </div>
              <div className="slds-size--9-of-12 ">
                <select id="type" className="yllw-account-settings-form__select slds-size--2-of-12">
                  <option>Nightly</option>
                  <option>Option Two</option>
                  <option>Option Three</option>
                </select>
              </div>
              <div className="slds-size--3-of-12 "></div>
              <div className="slds-size--9-of-12 ">
              <span className="yllw-account-settings-form__help-description">
                Set this to receieve email reports about your contribution forms
              </span>
              </div>
              <div className="slds-size--3-of-12 ">
                <p className="yllw-account-settings-form__label">New Password</p>
              </div>
              <div className="slds-size--9-of-12 ">
                <div className="slds-size--4-of-12">
                  <input id="campaign_finance_id" className="yllw-account-settings-form__input"/>
                </div>
                <span className="yllw-account-settings-form__help-description">
                  Must be at least seven characters and contain at least one number and one letter.
                </span>
              </div>
              <div className="slds-size--3-of-12 ">
                <p className="yllw-account-settings-form__label">Confirm New Password</p>
              </div>
              <div className="slds-size--9-of-12 ">
                <div className="slds-size--4-of-12">
                  <input id="campaign_finance_id" className="yllw-account-settings-form__input"/>
                </div>
                <button className="yllw-account-settings-form__button">Update Account</button>
              </div>
            </div>
          </div>
          <hr/>
        </div>
      </div>
    );
  }
}
