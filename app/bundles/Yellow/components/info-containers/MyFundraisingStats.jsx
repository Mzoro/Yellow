import React from 'react';
export default class MyFundraisingStats extends React.Component {
  render() {
    return (
      <div className="yllw-my-fundraising-stats">
        <div className="slds-grid">
          <div className="slds-size--2-of-12">
            <svg aria-hidden="true" className="yllw-my-fundraising-stats__icon">
              <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#people"></use>
            </svg>
            <span className="yllw-my-fundraising-stats__count">0</span>
            <div className="yllw-my-fundraising-stats__text">contributions</div>
          </div>
          <div className="slds-size--7-of-12">
            <svg aria-hidden="true" className="yllw-my-fundraising-stats__icon">
              <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#crossfilter"></use>
            </svg>
            <span className="yllw-my-fundraising-stats__count">0</span>
            <div className="yllw-my-fundraising-stats__text">raised</div>
          </div>
          <div className="slds-size--3-of-12">
            <a href="#" className="yllw-my-fundraising-stats__link">Your Fundraising Pages</a>
          </div>
        </div>
      </div>
    );
  }
}
