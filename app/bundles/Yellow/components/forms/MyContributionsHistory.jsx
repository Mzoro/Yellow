import React from 'react';
export default class MyContributionsHistory extends React.Component {
  render() {
    return (
      <div className="container">
        <hr></hr>
        <div className="slds-container--center slds-container--medium">
          <div className="yllw-my-contributions-history">
            <div className="yllw-my-contributions-history__form-horizontal">
              <span className="yllw-my-contributions-history__heading">Your Contributions for </span>
              <div className="yllw-my-contributions-history__element-control">
                <div className="yllw-my-contributions-history__select-container">
                  <select className="yllw-my-contributions-history__select">
                    <option>2015-01-01-2016-12-31</option>
                    <option>2014-01-01-2015-12-31</option>
                    <option>2013-01-01-2014-12-31</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="yllw-my-contributions-history__text">
              You haven't made any contributions with your ActBlue Express yet.
            </div>
          </div>
        </div>
        <hr></hr>
      </div>
    );
  }
}
