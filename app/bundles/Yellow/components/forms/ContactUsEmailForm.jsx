import React from 'react';
export default class ContactUsEmailForm extends React.Component {
  render() {
    return (
      <div className="yllw-contact-us-email-form">
        <div className="slds-container--center slds-container--medium">
          <div className="slds-grid slds-wrap">
            <div className="slds-size--1-of-1">
              <div className="yllw-contact-us-email-form__heading">Send us an Email</div>
            </div>
            <div className="slds-container--center slds-size--9-of-12">
              <div className="slds-size--1-of-1">
                <div className="yllw-contact-us-email-form__text">Subject</div>
              </div>
              <div className="slds-size--1-of-1">
                <div className="yllw-contact-us-email-form__element-control">
                  <select id="type" className="yllw-contact-us-email-form__dropdown slds-select slds-size--10-of-12">
                    <option>Option One</option>
                    <option>Option Two</option>
                    <option>Option Three</option>
                  </select>
                </div>
              </div>
              <div className="yllw-contact-us-email-form__text"><a>Please click here to reset your password!</a></div>
              <div className="slds-grid slds-wrap">
                <div className="slds-size--4-of-12">
                  <div className="yllw-contact-us-email-form__text">First name*</div>
                </div>
                <div className="slds-size--8-of-12">
                  <div className="yllw-contact-us-email-form__text">Last name*</div>
                </div>
                <div className="slds-size--4-of-12 ">
                  <div className="yllw-contact-us-email-form__element-control ">
                    <input id="legal_organization_name"className="yllw-contact-us-email-form__input slds-size--10-of-12" type="text"/>
                  </div>
                </div>
                <div className="slds-size--8-of-12 ">
                  <div className="yllw-contact-us-email-form__element-control ">
                    <input id="legal_organization_name"className="yllw-contact-us-email-form__input slds-size--6-of-12" type="text"/>
                  </div>
                </div>
              </div>
              <div className="slds-size--1-of-1">
                <div className="yllw-contact-us-email-form__text">Your Email*</div>
              </div>
              <div className="slds-size--10-of-12 ">
                <div className="yllw-contact-us-email-form__element-control ">
                  <input id="legal_organization_name"className="yllw-contact-us-email-form__input slds-size--1-of-1" type="text"/>
                </div>
              </div>
              <div className="slds-size--1-of-1">
                <div className="yllw-contact-us-email-form__text">Message</div>
              </div>
              <div className="slds-size--1-of-1">
                <div className="yllw-contact-us-email-form__element-control">
                  <textarea id="questions" className="yllw-contact-us-email-form__textarea" ></textarea>
                </div>
              </div>
              <button className="yllw-contact-us-email-form__button">Send</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
