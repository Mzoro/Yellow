import React from 'react';

export default class NavTabs extends React.Component {
  render() {
    return (
      <div className="yllw-nav-tabs">
        <div className="slds-container--medium slds-container--center">
          <div className="slds-grid">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
