import React from 'react';
export default class HomepageOrganizations extends React.Component {
  render() {
    return (
      <div className="yllw-organizations">
        <div className="slds-container--center slds-container--medium slds-size--1-of-2">
          <div className="slds-grid slds-wrap slds-grid--align-center">
            <div className="slds-size--1-of-1">
              <div className="yllw-organizations__text">TRUSTED BY THE GRASSROOTS</div>
            </div>
            <div className="slds-shrink">
              <hr className="yllw-hero-unit__line" />
            </div>
            <div className="slds-size--1-of-1">
              <div className="yllw-organizations__heading">
                Powering Democratic candidates, committees, parties,
                organizations, and c4s around the country.</div>
            </div>
            <div className="slds-col--padded">
              <div className="yllw-organizations__icons-container">
                 <svg aria-hidden="true" className="yllw-organizations__icons">
                  <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#announcement"></use>
                </svg>
              </div>
            </div>
            <div className="slds-col--padded">
              <div className="yllw-organizations__icons-container">
                 <svg aria-hidden="true" className="yllw-organizations__icons">
                  <use xlinkHref="/assets/icons/action-sprite/svg/symbols.svg#description"></use>
                </svg>
              </div>
            </div>
            <div className="slds-col--padded">
              <div className="yllw-organizations__icons-container">
                 <svg aria-hidden="true" className="yllw-organizations__icons">
                  <use xlinkHref="/assets/icons/standard-sprite/svg/symbols.svg#log_a_call"></use>
                </svg>
              </div>
            </div>
            <div className="slds-col--padded">
              <div className="yllw-organizations__icons-container">
                 <svg aria-hidden="true" className="yllw-organizations__icons">
                  <use xlinkHref="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
