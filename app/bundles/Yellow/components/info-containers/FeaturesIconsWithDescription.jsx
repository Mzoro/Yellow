import React from 'react';
export default class FeaturesIconsWithDescription extends React.Component {
  render() {
    return (
      <div className="yllw-icons-with-description">
        <div className="slds-container--center slds-size--7-of-12 ">
          <div className="slds-grid slds-wrap">
            <div className="slds-col--padded slds-size--2-of-7">
             <div className="yllw-icons-with-description__container">
              <div className="slds-grid slds-grid--align-center">
                <svg className="yllw-icons-with-description__image">
                  <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#custom_apps"></use>
                </svg>
              </div>
             </div>
            </div>
            <div className="slds-col--padded slds-size--5-of-7">
              <div className="yllw-icons-with-description__heading">Quick Setup</div>
              <div className="yllw-icons-with-description__text">
                You only get so many big moments in digital fundraising. We can set up organizations and federal campaigns in minutes so you can start harnessing the power of the grassroots.
              </div>
            </div>
            <div className="slds-col--padded slds-size--2-of-7 ">
              <div className="yllw-icons-with-description__container">
                <div className="slds-grid slds-grid--align-center">
                  <svg className="yllw-icons-with-description__image">
                    <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#call"></use>
                  </svg>
                </div>
              </div>
            </div>
            <div className="slds-col--padded slds-size--5-of-7">
              <div className="yllw-icons-with-description__heading">Friendly Support</div>
              <div className="yllw-icons-with-description__text">
                We know it’s always crunch time when you're working on issues you're passionate about. We actually answer the phone when you call and respond to every email we receive. And we’ll provide the same level of support for your donors.
              </div>
            </div>
            <div className="slds-col--padded slds-size--2-of-7">
              <div className="yllw-icons-with-description__container">
                <div className="slds-grid slds-grid--align-center">
                  <svg className="yllw-icons-with-description__image">
                    <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#bucket"></use>
                  </svg>
                </div>
              </div>
            </div>
            <div className="slds-col--padded slds-size--5-of-7">
              <div className="yllw-icons-with-description__heading">Express Lane</div>
              <div className="yllw-icons-with-description__text">
                Donating has never been this easy. Express Lane is our single-click payment system that allows you to embed links in your fundraising emails.
                Increase your conversion rates by up to 200% by taking advantage of our 1 million+ Express user base
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
