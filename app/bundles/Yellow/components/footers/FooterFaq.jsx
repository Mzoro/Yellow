import React from 'react';

export default class FooterFaq extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="yllw-faq-footer">
          <div className="slds-container--center slds-container--medium">
            <div className="slds-grid sdls-grid--align-center">
              <div className="slds-size--1-of-1 slds-m-top--medium">
                <div className="yllw-faq-footer__search-pane">
                     <svg aria-hidden="true" className="yllw-faq-footer__search-icon">
                      <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#search"></use>
                    </svg>
                    <input id="lookup" className="yllw-faq-footer__search-input"
                      type="text" placeholder="Search"
                      aria-autocomplete="list" role="combobox"
                      aria-expanded="true" aria-activedescendant=""
                    />
                </div>
                <div className="yllw-faq-footer__heading">YELLOW
                </div>
                <div className="yllw-faq-footer__text">
                  <p>111 Street Street</p>
                  <p>City, MA 11111-1111</p>
                  <p>111-111-1111</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
