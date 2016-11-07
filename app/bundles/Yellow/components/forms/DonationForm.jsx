import React from 'react';
export default class DonationForm extends React.Component {
  render() {
    return (
      <div className="slds-size--8-of-12">
        <div className="yllw-donation-form">
          <div className="slds-grid slds-grid--align-center slds-wrap">
            <div className="slds-size--1-of-1">
              <div className="yllw-donation-form__heading">Your Contribution</div>
            </div>
            <div className="slds-size--1-of-1">
              <div className="slds-grid slds-grid--align-space">
                <button className="yllw-donation-form__button-count">$10</button>
                <button className="yllw-donation-form__button-count">$25</button>
                <button className="yllw-donation-form__button-count">$50</button>
                <button className="yllw-donation-form__button-count">$100</button>
              </div>
              <input className="yllw-donation-form__input" type="text" placeholder="$"/>
              <div className="yllw-donation-form__text">It happen without the support of small-dollar donors</div>
              <input className="yllw-donation-form__checkbox" name="checkbox" type="checkbox"/>
              <div className="yllw-donation-form__lable-checkbox">Make this a monthly recurring contribution</div>
              <div className="yllw-donation-form__heading">Payment Information(Modify)</div>
              <div className="slds-grid">
                <div className="slds-size--1-of-3"><p className="yllw-donation-form__text-label">Select Card</p></div>
                <div className="slds-size--1-of-1">
                  <select id="selectSample1" className="yllw-donation-form__select slds-size--11-of-12">
                    <option>Option One</option>
                    <option>Option Two</option>
                    <option>Option Three</option>
                  </select>
                  <div className="yllw-donation-form__text-info">Egor Fedunov</div>
                  <div className="yllw-donation-form__text-info">Greeny St 1</div>
                  <div className="yllw-donation-form__text-info">New York, NY 32445</div>
                  <div className="yllw-donation-form__text-info"><a>Wrong name or address?</a></div>
                </div>
              </div>
              <div className="slds-text-align--center slds-m-vertical--xx-large">By clicking this button, I certify that i meet eligibility requirements set forth below.
              </div>
              <div className="slds-size--1-of-1 slds-text-align--center">
                <button className="yllw-donation-form__button">Donate</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
