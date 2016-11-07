import React from 'react';
export default class HeroUnitLight extends React.Component {
  render() {
    return (
      <div className="yllw-hero-unit-light">
        <div className={this.props.className}>
          <div className="slds-grid slds-wrap slds-grid--align-center">
            <div className="slds-size--1-of-1">
              <div className="yllw-hero-unit-light__text--white-centered-uppercased">{this.props.info}</div>
            </div>
            <div className="slds-size--1-of-12">
              <hr />
            </div>
            <div className="slds-size--1-of-1">
              <div className="yllw-hero-unit-light__heading--white-centered">{this.props.heading}</div>
            </div>
            <div className="slds-size--3-of-12 slds-text-align--center">
              {this.props.button}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
