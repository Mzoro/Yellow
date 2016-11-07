import React from 'react';
export default class ExpressHeroUnitThreeColumns extends React.Component {
  render() {
    return (
      <div className="yllw-express-hero-unit-three-columns">
        <div className="slds-container--center slds-container--medium">
          <div className="slds-grid slds-wrap slds-grid--align-center">
            <div className="slds-size--1-of-1">
              <div className="yllw-express-hero-unit-three-columns__text--uppercased-centered">The only Tool You’ll need</div>
            </div>
            <div className="slds-size--1-of-1">
              <hr></hr>
              <div className="yllw-express-hero-unit-three-columns__heading--large-centered">The one-stop shop for donors</div>
            </div>
            <div className="slds-size--1-of-3">
              <svg aria-hidden="true">
                <use xlinkHref="/assets/icons/standard-sprite/svg/symbols.svg#call_history"></use>
              </svg>
              <div className="slds-size--1-of-1">
                <div className="yllw-express-hero-unit-three-columns__text--centered">Autofill contact information for easy mobile donations</div>
              </div>
            </div>
            <div className="slds-size--1-of-3">
              <svg aria-hidden="true">
                <use xlinkHref="/assets/icons/standard-sprite/svg/symbols.svg#drafts"></use>
              </svg>
              <div className="slds-size--1-of-1">
                <div className="yllw-express-hero-unit-three-columns__text--centered">Securely save & update credit card information</div>
              </div>
            </div>
            <div className="slds-size--1-of-3">
              <svg aria-hidden="true">
                <use xlinkHref="/assets/icons/standard-sprite/svg/symbols.svg#endorsement"></use>
              </svg>
              <div className="slds-size--1-of-1">
                <div className="yllw-express-hero-unit-three-columns__text--centered">Access your full donation history</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
