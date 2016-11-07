import React from 'react';

export default class HeaderFaq extends React.Component {
  render() {
    return (
      <div className="yllw-faq-header">
        <div className="slds-container--center slds-size--12-of-12">
          <div className="slds-grid">
            <div className="slds-size--7-of-12 slds-m-top--xx-small slds-m-left--small">
              <a className="yllw-faq-header__logo" href="#">Yellow</a>
            </div>
            <div className="slds-size--5-of-12">
              <div className="yllw-faq-header__links-bar">
                <div className="slds-grid">
                  <div className="slds-col--padded">
                    <a className="yllw-faq-header__link--white" href="#">Tutorial</a>
                  </div>
                  <div className="slds-col--padded">
                    <a className="yllw-faq-header__link--white" href="#">Getting started</a>
                  </div>
                  <div className="slds-col--padded">
                    <a className="yllw-faq-header__link--white" href="#">FAQ</a>
                  </div>
                  <div className="slds-col--padded">
                    <a className="yllw-faq-header__link--white" href="#">Contact</a>
                  </div>
                  <div className="slds-col--padded">
                    <a className="yllw-faq-header__link--white" href="#">Yellow.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
