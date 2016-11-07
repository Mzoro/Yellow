import React from 'react';
export default class PricingGettingMoneyInfo extends React.Component {
  render() {
    return (
      <div className="yllw-pricing-getting-money-info">
        <div className="slds-container--center slds-size--1-of-2">
          <div className="slds-grid--vertical">
            <div className="slds-col">
              <div className="yllw-pricing-getting-money-info__heading">Getting Your Money</div>
                <div className="slds-container--center slds-size--5-of-6">
                  <div className="yllw-pricing-getting-money-info__heading--medium">
                    We mail out checks every Monday containing funds you raised through Sunday night.
                    If you need to establish a different check schedule or need multiple checks a week,
                    just <a href="#">let us know</a>.
                  </div>
                </div>
            </div>
            <div className="slds-col">
              <div className="slds-grid slds-wrap">
                <div className="slds-col--padded slds-size--1-of-6">
                  <svg className="yllw-pricing-getting-money-info__image">
                    <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#puzzle"></use>
                  </svg>
                </div>
                <div className="slds-col--padded slds-size--5-of-6">
                  <div className="yllw-pricing-getting-money-info__text--bold-uppercase">Down to the wire?</div>
                  <div className="yllw-pricing-getting-money-info__text">
                    Nobody can get you your money faster. When an election or fundraising deadline is approaching,
                    you can’t risk your money being held up in banks. We move tens of millions of dollars each year.
                    The banks know us. We get the cash fastest and out to you ASAP.
                  </div>
                </div>
              </div>
            </div>
            <div className="slds-col">
              <div className="slds-grid slds-wrap">
                <div className="slds-col--padded slds-size--1-of-6">
                  <svg className="yllw-pricing-getting-money-info__image">
                    <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#people"></use>
                  </svg>
                </div>
                <div className="slds-col--padded slds-size--5-of-6">
                  <div className="yllw-pricing-getting-money-info__text--bold-uppercase">Exclusive users</div>
                  <div className="yllw-pricing-getting-money-info__text">
                    If you do plan on using ActBlue exclusively, you’ll qualify for extra perks.
                    <ul className="slds-list--dotted">
                      <li>
                        If you’re an organization or federal account raising over $5k each day, you can turn contributions into cash overnight with our wire transfers
                      </li>
                      <li>
                        Get insights into your data, including Express account matching
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
