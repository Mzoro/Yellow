import React from 'react';
export default class CallToAction extends React.Component {
  render() {
    return (
    <div className={this.props.className}>
      <div className="slds-container--center slds-container--medium">
        <div className="slds-grid slds-wrap slds-grid--align-center">
          {this.props.hr}
          <div className="slds-size--1-of-1">
            <div className={this.props.classNameBigText}>{this.props.bigText}</div>
          </div>
          <div className="slds-size--1-of-1">
            <div className="yllw-call-to-action__text--medium">
              {this.props.mediumText}
            </div>
          </div>
          <div className="slds-size--1-of-1 slds-text-align--center">
            <button className="yllw-call-to-action__button">{this.props.buttonText}</button>
          </div>
        </div>
      </div>
    </div>
    );
  }
}
