import React from 'react';
export default class MemberDonationForm extends React.Component {
  render() {
    return (
      <div className="slds-size--7-of-12">
        <div className="yllw-member-donation-form">
          <div className="slds-grid slds-wrap">
            <div className="slds-size--1-of-1">
              <div className="yllw-member-donation-form__heading">Your Contribution</div>
            </div>
            <div className="slds-size--1-of-1">
              <div className="yllw-member-donation-form__text">
                <span className="yllw-member-donation-form__text--bold">NOTE: </span>
                Your contribution will divided evenly between
                <span className="yllw-member-donation-form__text--bold">Bernie Sanders</span>
                and <span className="yllw-member-donation-form__text--bold">Daily Kos</span>.
                <a href="#">Click here to allocate amounts differently</a>.
              </div>
            </div>
            <div className="slds-size--1-of-4">
              <button className="yllw-member-donation-form__button">$5</button>
            </div>
            <div className="slds-size--1-of-4">
              <button className="yllw-member-donation-form__button">$10</button>
            </div>
            <div className="slds-size--1-of-4">
              <button className="yllw-member-donation-form__button">$25</button>
            </div>
            <div className="slds-size--1-of-4">
              <button className="yllw-member-donation-form__button">$50</button>
            </div>
            <div className="slds-size--1-of-4">
              <button className="yllw-member-donation-form__button">$100</button>
            </div>
            <div className="slds-size--1-of-4">
              <a href="#" className="yllw-member-donation-form__button">
                $<input className="yllw-member-donation-form__input-inside" type="text"/>
              </a>
            </div>
            <div className="slds-size--1-of-1">
              <div className="yllw-member-donation-form__heading">Make it monthly</div>
            </div>
            <div className="slds-size--1-of-5">
              <a href="#" className="yllw-member-donation-form__button">
                <input type="radio" name="options" />
                <span >NO</span>
              </a>
            </div>
            <div className="slds-size--4-of-5">
              <a href="#" className="yllw-member-donation-form__button">
                <input type="radio" name="options" />
                <span >Yes, each month for <input className="yllw-member-donation-form__input-inside--small" type="text"/> months</span>
              </a>
            </div>
            <div className="slds-size--1-of-1">
              <div className="yllw-member-donation-form__heading">Payment information (Modify)</div>
            </div>
            <div className="slds-size--1-of-5">
              <div className="yllw-member-donation-form__text--bold">Select card</div>
            </div>
            <div className="slds-size--4-of-5">
              <select id="select-01" className="yllw-member-donation-form__select">
                <option>VISA: ****4549, exp 10/2016</option>
              </select>
              <div className="yllw-member-donation-form__text">Fedor sumkin</div>
              <div className="yllw-member-donation-form__text">Gmity st 1</div>
              <div className="yllw-member-donation-form__text">New York, NY 02140</div>
              <div className="yllw-member-donation-form__text">
                <a href="#">Wrong name and address? Click here to reset.</a>
              </div>
            </div>
            <div className="slds-size--1-of-1">
              <div className="yllw-member-donation-form__heading">Please leave us a tip</div>
              <div className="yllw-member-donation-form__text">
                This contribution is made from my own funds, and funds are not being provided to me by another person or entity for the purpose of making this contribution.
              </div>
              <div className="yllw-member-donation-form__text">
                I am making this contribution with my own personal credit card and not with a corporate or business credit card or a card issued to another person.
              </div>
            </div>
            <div className="slds-size--1-of-2">
              <a href="#" className="yllw-member-donation-form__button">
                <input type="radio" name="tip" />
                <span >10% tip</span>
              </a>
            </div>
            <div className="slds-size--1-of-2">
              <a href="#" className="yllw-member-donation-form__button">
                <input type="radio" name="tip" />
                <span >20% tip</span>
              </a>
            </div>
            <div className="slds-size--1-of-2">
              <a href="#" className="yllw-member-donation-form__button">
                <input type="radio" name="tip" />
                $<input className="yllw-member-donation-form__input-inside--small" type="text"/>
              </a>
            </div>
            <div className="slds-size--1-of-2">
              <a href="#" className="yllw-member-donation-form__button">
                <input type="radio" name="tip" />
                <span >Leave no tip</span>
              </a>
            </div>
            <div className="slds-size--1-of-1">
              <div className="slds-container--center slds-size--3-of-4">
                <div className="yllw-member-donation-form__text">
                  I am a U.S. citizen or lawfully admitted permanent resident (i.e., green card holder).
                </div>
              </div>
              <div className="slds-container--center slds-size--1-of-6">
                <button className="yllw-member-donation-form__donate-button">Donate</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
