import React from 'react';

export default class MyContributionsInformation extends React.Component {
  render() {
    return (
      <div className="slds-size--3-of-4">
        <div className="yllw-my-contributions-information">
          <div className="slds-grid slds-wrap">
            <div className="slds-size--1-of-1">
              <div className="yllw-my-contributions-information__heading">Your Contributions</div>
            </div>
            <div className="slds-size--1-of-2">
              <div className="slds-grid slds-wrap">
                <div className="slds-size--1-of-2">
                  <svg aria-hidden="true" className="yllw-my-contributions-information__icon">
                    <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#people"></use>
                  </svg>
                  <span className="yllw-my-contributions-information__count">0</span>
                  <div className="yllw-my-contributions-information__text--bold">Contributions</div>
                </div>
                <div className="slds-size--1-of-2">
                  <svg aria-hidden="true" className="yllw-my-contributions-information__icon">
                    <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#crossfilter"></use>
                  </svg>
                  <span className="yllw-my-contributions-information__count">0</span>
                  <div className="yllw-my-contributions-information__text--bold">Contributed</div>
                </div>
                <div className="slds-size--1-of-4">
                  <svg height="75" width="75">
                    <circle cx="35" cy="35" r="30" fill="#32B3EA" />
                  </svg>
                </div>
                <div className="slds-size--3-of-4">
                  <div className="yllw-my-contributions-information__text--bold">Recurring Contribution</div>
                  <div className="yllw-my-contributions-information__text">
                    0% of your contributions are recurring contributions. Consider making a recurring to your favorite
                    Democratic organization or candidate.
                  </div>
                </div>
                <div className="slds-size--1-of-4">
                  <svg height="75" width="75">
                    <circle cx="35" cy="35" r="30" fill="#32B3EA" />
                  </svg>
                </div>
                <div className="slds-size--3-of-4">
                  <div className="yllw-my-contributions-information__text--bold">By recipient type</div>
                  <div className="yllw-my-contributions-information__text">
                    0% of your contributions went to campaings, and 100% to organizations.
                  </div>
                </div>
              </div>
            </div>
            <div className="slds-size--1-of-2">
              <div className="slds-grid--vertical">
                <div className="slds-col">
                  <button className="yllw-my-contributions-information__button">Contribution Summary</button>
                </div>
                <div className="slds-col">
                  <button className="yllw-my-contributions-information__button">Contribution History</button>
                </div>
                <div className="slds-col">
                  <button className="yllw-my-contributions-information__button">Recurring Contribution</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slds-container--small">
          <div className="yllw-my-contributions-information__heading">Hot candidates and committees</div>
          <div className="yllw-my-contributions-information__text">
            Click on this week's busiest recipients to contribute now, raise funds, or learn more.
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }
}
