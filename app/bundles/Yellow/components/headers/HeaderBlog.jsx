import React from 'react';
export default class HeaderBlog extends React.Component {
  render() {
    return (
      <div className="slds-container--center slds-size--10-of-12">
        <div className="yllw-blog-header">
          <div className="slds-grid">
            <div className="slds-size--6-of-12">
              <a className="yllw-blog-header__logo ">Yellow</a>
            </div>
            <div className="slds-size--5-of-12">
              <div className="yllw-blog-header__links-bar">
                <div className="slds-grid">
                  <div className="slds-col--padded ">
                    <a >Features</a>
                  </div>
                  <div className="slds-col--padded ">
                    <a href="#">Help</a>
                  </div>
                  <div className="slds-col--padded ">
                    <a >Contact</a>
                  </div>
                  <div className="slds-col--padded ">
                    <a >Yellow.com</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="slds-size--1-of-12">
              <div className="container slds-text-align--right">
                <svg aria-hidden="true" className="yllw-blog-header__icon-social slds-icon--small slds-icon-text-default">
                  <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#announcement"></use>
                </svg>
                <svg aria-hidden="true" className="yllw-blog-header__icon-social slds-icon--small slds-icon-text-default">
                  <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#warning"></use>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
