import React from 'react';
export default class HomepageFullscreenIconsInfo extends React.Component {
  render() {
    return (
      <div className="yllw-fullscreen-icons-info">
        <div className="slds-container--center slds-container--medium">
          <div className="slds-grid slds-grid--align-center slds-wrap">
            <div className="slds-size--1-of-1 slds-m-top--medium ">
              <div className="yllw-fullscreen-icons-info__text">GET TO KNOW US</div>
            </div>
            <div className="slds-shrink">
              <hr className="yllw-hero-unit__line" />
            </div>
            <div className="slds-size--1-of-1">
              <div className="yllw-fullscreen-icons-info__heading--large">Why we’re better</div>
              <div className="yllw-fullscreen-icons-info__heading--medium">Free customizable
                Contribution Forms and flexible fundraising tools, wherever you are</div>
            </div>
            <div className="slds-media slds-media--center slds-col--padded slds-size--1-of-2">
               <svg className="yllw-fullscreen-icons-info__container" aria-hidden="true">
                <use xlinkHref="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
              </svg>
              <div className="yllw-fullscreen-icons-info__icon-description">Unlimited branded
                Contribution Forms</div>
            </div>
            <div className="slds-media slds-media--center slds-col--padded slds-size--1-of-2">
               <svg className="yllw-fullscreen-icons-info__container" aria-hidden="true">
                <use xlinkHref="/assets/icons/standard-sprite/svg/symbols.svg#solution"></use>
              </svg>
              <div className="yllw-fullscreen-icons-info__icon-description">Data and easy-to-use
                analytics tools at your fingertips</div>
            </div>
            <div className="slds-media slds-media--center slds-col--padded slds-size--1-of-2">
               <svg className="yllw-fullscreen-icons-info__container" aria-hidden="true">
                <use xlinkHref="/assets/icons/standard-sprite/svg/symbols.svg#case"></use>
              </svg>
              <div className="yllw-fullscreen-icons-info__icon-description">Mobile-optimized
                Forms that keep your conversion rates sky-high</div>
            </div>
            <div className="slds-media slds-media--center slds-col--padded slds-size--1-of-2">
               <svg className="yllw-fullscreen-icons-info__container" aria-hidden="true">
                <use xlinkHref="/assets/icons/standard-sprite/svg/symbols.svg#log_a_call"></use>
              </svg>
              <div className="yllw-fullscreen-icons-info__icon-description">A customer service
                team that handles all of your donor questions, saving you time and money</div>
            </div>
            <div className="slds-shrink">
              <button className="yllw-fullscreen-icons-info__button">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
