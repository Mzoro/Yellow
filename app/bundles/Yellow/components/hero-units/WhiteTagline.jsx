import React from 'react';
export default class WhiteTagline extends React.Component {
  render() {
    return (
      <div className="container slds-text-align--center">
        <div className="yllw-white-tagline-on-blue-screen">
          <span className="yllw-white-tagline-on-blue-screen__tagline">{this.props.text}</span>
        </div>
      </div>
    );
  }
}
