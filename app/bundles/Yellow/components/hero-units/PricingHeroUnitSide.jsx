import React from 'react';
import { Link } from 'react-router';
export default class PricingHeroUnitSide extends React.Component {
  render() {
    return (
      <div className="yllw-pricing-hero-unit-side">
        <div className="slds-container--medium slds-container--center">
          <div className="slds-grid slds-size--1-of-3">
            <div className="slds-size--1-of-1">
              <div className="yllw-pricing-hero-unit-side__heading--white">
                And that’s just the beginning…
              </div>
              <div className="yllw-pricing-hero-unit-side__text--white">
                With all features included, you can build the program that fits your needs, no matter your budget.
              </div>
              <Link to="/features">
                <button className="yllw-pricing-hero-unit-side__button">Visit our full Features page</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
