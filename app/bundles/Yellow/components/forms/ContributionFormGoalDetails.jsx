import React from 'react';
export default class ContributionFormGoalDetails extends React.Component {
  render() {
    return (
      <div>
        <div className="slds-container--center slds-size--1-of-2">
          <div className="slds-grid slds-wrap">
            <div className="slds-col slds-size--1-of-4 ">
            </div>
            <div className="slds-col slds-size--3-of-4 ">
              <input className="yllw-contribution-form-essentials__radio" type="radio" name="options" />
              <span className="yllw-contribution-form-essentials__info">My goal is</span>
              <input className="yllw-contribution-form-essentials__input--small" type="text"/>
              <span className="yllw-contribution-form-essentials__info">people</span>
            </div>
          </div>
        </div>
        <div className="slds-container--center slds-size--1-of-2">
          <div className="slds-grid slds-wrap">
            <div className="slds-col slds-size--1-of-4 ">
            </div>
            <div className="slds-col slds-size--3-of-4 ">
              <input className="yllw-contribution-form-essentials__radio" type="radio" name="options" />
              <span className="yllw-contribution-form-essentials__info">My goal is</span>
              <span className="yllw-contribution-form-essentials__info--framed">$</span>
              <input className="yllw-contribution-form-essentials__input--small" type="text"/>
            </div>
          </div>
        </div>
        <div className="slds-container--center slds-size--1-of-2">
          <div className="slds-grid slds-wrap">
            <div className="slds-col slds-size--1-of-4 ">
              <span className="yllw-contribution-form-essentials__text">Raised since</span>
            </div>
            <div className="slds-col slds-size--3-of-4">
              <input className="yllw-contribution-form-essentials__input--medium" type="text"/>
              <a>
                <svg aria-hidden="true" className="yllw-contribution-form-essentials__icon-calendar">
                  <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#event"></use>
                </svg>
              </a>
              <br></br>
              <label className="yllw-contribution-form-essentials__label">(leave blank for all-time)</label>
            </div>
          </div>
        </div>
        <div className="slds-container--center slds-size--1-of-2">
          <div className="slds-grid slds-wrap">
            <div className="slds-col slds-size--1-of-4 ">
              <span className="yllw-contribution-form-essentials__text">Additional amounts</span>
            </div>
            <div className="slds-col slds-size--3-of-4">
              <input className="yllw-contribution-form-essentials__input--large" type="text"/><br></br>
              <label className="yllw-contribution-form-essentials__label">
                If you would like your goal to increase as your fundraising total does,
                enter a comma-separated list of additional goals. ie: 500,1000,2000.</label><br></br>
              <button className="yllw-contribution-form-essentials__button-submit--green">
                Save goal and continue
              </button>
              <br></br>
              <a className="yllw-contribution-form-essentials__link">Skip this step >></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
