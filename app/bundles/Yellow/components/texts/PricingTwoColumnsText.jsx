import React from 'react';
export default class PricingTwoColumnsText extends React.Component {
  render() {
    return (
      <div className="yllw-pricing-two-columns-text">
        <div className="container slds-container--center slds-size--3-of-4">
          <div className="slds-grid slds-wrap slds-grid--align-center">
            <div className="slds-size--1-of-1">
              <div className="yllw-pricing-two-columns-text__heading">Simple Pricing. No Surprises.</div>
              <div className="yllw-pricing-two-columns-text__heading--medium">5 minute setup. 3.95% transaction fee on each contribution.</div>
            </div>
            <div className="slds-size--1-of-2">
              <div className="yllw-pricing-two-columns-text--bold-uppercase"> We make it easy for you</div>
              <div className="yllw-pricing-two-columns-text">
                We make it easy for you to build your online fundraising program in no time,
                whether you’re running a national operation or launching your own campaign for
                city council. We charge a flat rate of 3.95% on each donation you receive to cover
                the processing cost.
              </div>
              <div className="yllw-pricing-two-columns-text">
                Other than that, everything’s on us. You’ll have access to all the ActBlue tools as well as customer service to help your team and your donors at no extra cost.
              </div>
              <div className="yllw-pricing-two-columns-text"> No contracts, no surprises, no hidden fees. You can do the math.</div>
            </div>
            <div className="slds-size--1-of-2">
              <div className="yllw-pricing-two-columns-text--bold-uppercase"> 2,530,000 Express users</div>
              <div className="yllw-pricing-two-columns-text--bold-uppercase">and counting…</div>
              <div className="yllw-pricing-two-columns-text">
                We’re the go-to place for progressive fundraising, and donors love to store their information
                with us because they can give to all their favorite candidates and organizations with just a
                single click. We call these donors Express users, and they’re exclusive to ActBlue.
              </div>
              <div className="yllw-pricing-two-columns-text">
                Because the Express donor universe is so large, your supporters are already a part of it. On average, 40% of your existing donors will already be Express users, and they’ll donate 72.9% more often.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
