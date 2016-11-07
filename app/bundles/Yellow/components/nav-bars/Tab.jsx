import React from 'react';
import { Link } from 'react-router';

export default class Tab extends React.Component {
render() {
  const classNameCurrentLink = 'yllw-tab__link--current';
  const classNameLink = 'yllw-tab__link';
  const compareLinkWithCurrent = name => this.props.currentLink === name;
  return (
    <div className="slds-size--1-of-6">
    <span className={compareLinkWithCurrent(this.props.name) ? classNameCurrentLink : classNameLink}>
      {compareLinkWithCurrent(this.props.name) ? this.props.name : <Link to={this.props.address}>{this.props.name}</Link>}
    </span>
    </div>
  );
}
}
