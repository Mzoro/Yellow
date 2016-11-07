import React from 'react';
export default class ExpressHeroUnitWithIcons extends React.Component {
  render() {
    return (
      <div className="yllw-express-hero-unit-with-icons">
        <div className="slds-container slds-text-align--center">
          <div className="slds-grid slds-wrap slds-grid--align-center">
            <svg className="yllw-express-hero-unit-icons slds-size--1-of-1">
              <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#upload"></use>
            </svg>
            <div className="yllw-express-hero-unit-with-icons__heading--large slds-size--1-of-1">Higher conversion rates await...</div>
            <div className="yllw-express-hero-unit__text--grey slds-size--6-of-12">With an ActBlue Express account, all donors need to do is choose an amount to give. No credit cards or employer addresses to enter.</div>
          </div>
          <div className="slds-grid slds-wrap slds-grid--align-center">
            <svg className="yllw-express-hero-unit-icons slds-size--1-of-12">
              <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#phone_portrait"></use>
            </svg>
            <svg className="yllw-express-hero-unit-icons slds-size--1-of-12">
              <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#tablet_portrait"></use>
            </svg>
            <svg className="yllw-express-hero-unit-icons slds-size--1-of-12">
              <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#desktop"></use>
            </svg>
          </div>
        </div>
      </div>
    );
  }
}
