import React from 'react';

export default class ContributionLockupInfo extends React.Component {
  render() {
    return (
      <div className="yllw-contribution-lock-up-info">
        <div className="slds-grid slds-wrap slds-grid--align-center">
          <div className="slds-size--1-of-1">
            <svg className="yllw-contribution-lock-up-info__icon">
              <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#cases"></use>
            </svg>
          </div>
          <div className="slds-size--1-of-1">
            <div className="yllw-contribution-lock-up-info__heading--large">Contribution Lookup & Action Center</div>
          </div>
          <div className="slds-size--1-of-1">
            <div className="yllw-contribution-lock-up-info__heading--small">
              Do you have a charge on your credit card statement you don't recognize?
               Would you like to manage or cancel a recurring contribution?
                Would you like another emailed copy of your receipt?
                Fill out the information below to bring up your receipt and some action tools.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
