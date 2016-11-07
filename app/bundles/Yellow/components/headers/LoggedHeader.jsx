import React from 'react';
export default class LoggedHeader extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="yllw-logged-header">
          <div className="slds-grid">
            <div className="slds-col--padded slds-size--1-of-1">
              <a href="#" className="yllw-logged-header__greeting">Hello sample@sample.com</a>
            </div>
            <div className="slds-col--padded">
              <select className="yllw-logged-header__select">
                <option>Your Account</option>
                <option>My ActBlue</option>
                <option>Contribution Summary</option>
                <option>Contribution List</option>
                <option>Express Donor Profile</option>
                <option>Account Settings</option>
                <option>Change Password</option>
                <option>Manage Email Alerts</option>
              </select>
            </div>
            <div className="slds-col--padded">
              <select className="yllw-logged-header__select">
                <option>Fundrise</option>
                <option>Manage Forms</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
