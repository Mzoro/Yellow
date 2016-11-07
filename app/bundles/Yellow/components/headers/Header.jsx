import React from 'react';
import { Link } from 'react-router';
export default class Header extends React.Component {
  render() {
    return (
      <div className="yllw-header">
        <div className="slds-grid slds-wrap">
          <div className="slds-medium-size--1-of-1 slds-large-size--1-of-6">
            <Link to="/homepage" className="yllw-header__logo">Yellow</Link>
          </div>
          <div className="slds-col--padded slds-medium-size--3-of-6 slds-large-size--6-of-12">
            <div className="yllw-header__links-bar">
              <div className="slds-grid slds-medium-size--1-of-1 slds-large-size--1-of-2">
                <div className="slds-col--padded ">
                  <Link to="/features" className="yllw-header__link">Features</Link>
                </div>
                <div className="slds-col--padded">
                  <Link className="yllw-header__link" to="/support_us">Support Us</Link>
                </div>
                <div className="slds-col--padded">
                  <Link className="yllw-header__link" to="/blog">Blog</Link>
                </div>
                <div className="slds-col--padded">
                  <Link className="yllw-header__link" to="/faq">Help</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="slds-col--padded slds-medium-size--1-of-6 slds-large-size--2-of-12">
            <div className="yllw-header__search-pane">
               <svg aria-hidden="true" className="yllw-header__search-icon">
                <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#search"></use>
              </svg>
              <input id="lookup" className="yllw-header__search-input" type="text" />
            </div>
          </div>
          <div className="slds-col--padded slds-medium-size--1-of-6 slds-large-size--1-of-12">
            <Link to="/sign_up"><button className="yllw-header__button">Sign Up</button></Link>
          </div>
          <div className="slds-col--padded slds-medium-size--1-of-6 slds-large-size--1-of-12">
            <Link to="/login"><button className="yllw-header__button">Log In</button></Link>
          </div>
        </div>
      </div>
    );
  }
  }
