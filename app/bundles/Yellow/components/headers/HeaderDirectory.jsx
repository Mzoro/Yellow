import React from 'react';

export default class HeaderDirectory extends React.Component {
  render() {
    return (
      <div className="yllw-directory-header">
        <div className="slds-container--center slds-size--7-of-12">
          <div className="slds-grid slds-wrap">
            <div className="slds-size--1-of-1">
              <div className="yllw-directory-header__heading">Directory</div>
            </div>
            <div className="slds-size--1-of-1">
              <input id="" className="yllw-directory-header__input" type="text"/>
              <svg aria-hidden="true" className="yllw-directory-header__search-icon">
                <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#search"></use>
              </svg>
            </div>
              <label className="yllw-directory-header__label">When searching for organizations, try putting the organization name in quotes.</label>
          </div>
        </div>
      </div>
    );
  }
}
