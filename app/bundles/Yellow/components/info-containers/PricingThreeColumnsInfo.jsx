import React from 'react';
export default class PricingThreeColumnsInfo extends React.Component {
  render() {
    return (
      <div className="yllw-pricing-three-columns-info">
        <div className="slds-container--medium slds-container--center">
          <div className="slds-grid slds-wrap">
            <div className="slds-size--1-of-1">
              <div className="yllw-pricing-three-columns-info__heading">
                We Handle the Details
              </div>
            </div>
            <div className="slds-col--padded slds-size--1-of-3">
              <div className="yllw-pricing-three-columns-info__container">
                <svg className="yllw-pricing-three-columns-info__image">
                  <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#lock"></use>
                </svg>
              </div>
              <div className="yllw-pricing-three-columns-info__text--bold-uppercase">
                Responsive customer service
              </div>
              <div className="yllw-pricing-three-columns-info__text">
                We respond to every phone call and email we get — from you and your donors.
              </div>
            </div>
            <div className="slds-col--padded slds-size--1-of-3">
              <div className="yllw-pricing-three-columns-info__container">
                <svg className="yllw-pricing-three-columns-info__image">
                  <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#warning"></use>
                </svg>
              </div>
              <div className="yllw-pricing-three-columns-info__text--bold-uppercase">
                No Contracts or Bills
              </div>
              <div className="yllw-pricing-three-columns-info__text">
                You’ll receive your check minus the processing fee. You’re never under contract. You don’t pay when you’re not raising.
              </div>
            </div>
            <div className="slds-col--padded slds-size--1-of-3">
              <div className="yllw-pricing-three-columns-info__container">
                <svg className="yllw-pricing-three-columns-info__image">
                  <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#cases"></use>
                </svg>
              </div>
              <div className="yllw-pricing-three-columns-info__text--bold-uppercase">
                Security
              </div>
              <div className="yllw-pricing-three-columns-info__text">
                We take security very seriously. ActBlue is an outside auditor certified Level 1 PCI provider. We give your donors peace of mind.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
