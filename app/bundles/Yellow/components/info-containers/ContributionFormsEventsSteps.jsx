import React from 'react';
export default class ContributionFormsEventsSteps extends React.Component {
  render() {
    const numberPassive = 'yllw-contribution-form-essentials__steps-number--passive';
    const numberActive = 'yllw-contribution-form-essentials__steps-number--active';
    const namePassive = 'yllw-contribution-form-essentials__steps-name--passive';
    const nameActive = 'yllw-contribution-form-essentials__steps-name--active';
    return (
      <div className="slds-container--center slds-size--1-of-2">
        <div className="slds-container--center slds-size--10-of-12">
          <span className={this.props.currentNumber === 1 ? numberActive : numberPassive}>1</span>
          <span className={this.props.currentNumber === 1 ? nameActive : namePassive}>Essentials</span>
          <span className={this.props.currentNumber === 2 ? numberActive : numberPassive}>2</span>
          <span className={this.props.currentNumber === 2 ? nameActive : namePassive}>{this.props.changingName}</span>
          <span className={this.props.currentNumber === 3 ? numberActive : numberPassive}>3</span>
          <span className={this.props.currentNumber === 3 ? nameActive : namePassive}>Customizations</span>
          <span className={this.props.currentNumber === 4 ? numberActive : numberPassive}>4</span>
          <span className={this.props.currentNumber === 4 ? nameActive : namePassive}>Promote!</span>
          <div className="yllw-contribution-form-essentials__steps-legend">
            <svg aria-hidden="true" className="yllw-contribution-form-essentials__steps-icon">
              <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#info"></use>
            </svg>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
