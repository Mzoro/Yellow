import React from 'react';
export default class HomepageHeroUnitFeedback extends React.Component {
  render() {
    return (
      <div className="yllw-hero-unit--feedback">
        <div className="slds-container--center slds-container--medium">
          <div className="slds-grid slds-wrap slds-grid--align-left">
            <div className="slds-col--padded slds-size--1-of-1">
              <div className="yllw-hero-unit__quote">
                <div className="yllw-hero-unit__heading--large">
                ActBlue has changed the way people think about political fundraising,
                building a piece of infrastructure for the progressive movement that makes
                candidates beholden to small-dollar donors. We can always count
                on ActBlue to be innovating, keeping us on the cutting edge
                and raising the most money possible.
                </div>
              </div>
            </div>
            <div className="slds-size--1-of-1 slds-m-left--large">
              <span className="yllw-hero-unit__icon-container">
                 <svg aria-hidden="true" className="yllw-hero-unit__icon--large">
                  <use xlinkHref="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
                </svg>
              </span>
              <span className="yllw-hero-unit__text--white-around-indent">
                Brandon English, Deputy Executive Director for
                Digital Communications and Fundraising, DCCC
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
