import React from 'react';

export default class SignUpForm extends React.Component {
  render() {
    return (
      <div className="yllw-sign-up-form">
        <div className="slds-container--center slds-container--medium">
          <div className="slds-grid slds-wrap">
            <div className="slds-size--1-of-1">
              <div className="yllw-sign-up-form__heading--large">Add a new committee or organization to the directory</div>
              <div className="yllw-sign-up-form__text--small">If you have questions, or have trouble completing this form, please <a className="yllw-sign-up-form__link">contact us.</a></div>
            </div>
            <div className="slds-size--3-of-12">
              <div className="yllw-sign-up-form__text">Display Name*</div>
            </div>
            <div className="slds-size--9-of-12 slds-m-vertical--x-small">
              <input id="display_name" className="yllw-sign-up-form__input" type="text"/>
              <label className="yllw-sign-up-form__label">How you would like the name of your committee or organization to appear on the site.</label>
            </div>
            <div className="slds-size--1-of-1">
              <div className="slds-size--1-of-2  slds-m-vertical--medium slds-text-align--center"><a className="yllw-sign-up-form__link" href=""> Click here to add a photo or a website URL</a></div>
            </div>
            <div className="slds-size--3-of-12">
                <div className="yllw-sign-up-form__text">Type*</div>
            </div>
            <div className="slds-size--9-of-12 slds-m-vertical--x-small">
              <select id="type" className="yllw-sign-up-form__select">
                <option>Option One</option>
                <option>Option Two</option>
                <option>Option Three</option>
              </select>
            </div>
            <div className="slds-size--3-of-12">
              <div className="yllw-sign-up-form__text">Campaign Finance ID</div>
            </div>
            <div className="slds-size--9-of-12 slds-m-vertical--x-small">
              <div className="yllw-sign-up-form__element-control">
                <input id="campaign_finance_id" className="yllw-sign-up-form__input" type="text"/>
              </div>
              <label className="yllw-sign-up-form__label slds-m-bottom--medium">Not sure what this is? <a className="yllw-sign-up-form__link" href=""> Look here.</a></label>
            </div>
            <div className="slds-size--3-of-12">
              <div className="yllw-sign-up-form__text">Legal Organization Name*</div>
            </div>
            <div className="slds-size--9-of-12 slds-m-vertical--x-small">
              <div className="yllw-sign-up-form__element-control ">
                <input id="legal_organization_name"className="yllw-sign-up-form__input" type="text"/>
              </div>
            </div>
            <div className="slds-size--1-of-1">
              <div className="yllw-sign-up-form__text-label">Mailing Address</div>
            </div>
            <div className="slds-size--3-of-12">
              <div className="yllw-sign-up-form__text">Address*</div>
            </div>
            <div className="slds-size--9-of-12 slds-m-vertical--x-small">
              <div className="yllw-sign-up-form__element-control ">
                <input id="address" className="yllw-sign-up-form__input" type="text"/>
              </div>
            </div>
            <div className="slds-size--3-of-12">
              <div className="yllw-sign-up-form__text">Address line 2</div>
            </div>
            <div className="slds-size--9-of-12 slds-m-vertical--x-small">
              <div className="yllw-sign-up-form__element-control ">
                <input id="address_line_2" className="yllw-sign-up-form__input" type="text"/>
              </div>
            </div>
            <div className="slds-size--3-of-12">
              <div className="yllw-sign-up-form__text">City*</div>
            </div>
            <div className="slds-size--9-of-12 slds-m-vertical--x-small">
              <div className="yllw-sign-up-form__element-control ">
                <input id="city" className="yllw-sign-up-form__input" type="text"/>
              </div>
            </div>
            <div className="slds-size--3-of-12">
              <div className="yllw-sign-up-form__text">State*</div>
            </div>
            <div className="slds-size--9-of-12 slds-m-vertical--x-small">
              <select id="state" className="yllw-sign-up-form__select">
                <option>Option One</option>
                <option>Option Two</option>
                <option>Option Three</option>
              </select>
            </div>
            <div className="slds-size--3-of-12">
              <div className="yllw-sign-up-form__text">Zip*</div>
            </div>
            <div className="slds-size--9-of-12 slds-m-vertical--x-small">
              <div className="yllw-sign-up-form__element-control ">
                <input id="zip" className="yllw-sign-up-form__input" type="text"/>
              </div>
            </div>
            <div className="slds-size--1-of-1">
              <div className="yllw-sign-up-form__text-label">Contact Information</div>
            </div>
            <div className="slds-size--3-of-12">
              <div className="yllw-sign-up-form__text">Contact Name and Title*</div>
            </div>
            <div className="slds-size--9-of-12 slds-m-vertical--x-small">
              <div className="yllw-sign-up-form__element-control ">
                <input id="contact_name_and_title" className="yllw-sign-up-form__input" type="text"/>
              </div>
              <label className="yllw-sign-up-form__label">This should be the person you'd like us to contact if we have any questions. Please include the contact's title or position.</label>
            </div>
            <div className="slds-size--3-of-12">
              <div className="yllw-sign-up-form__text">Contact Phone*</div>
            </div>
            <div className="slds-size--9-of-12 slds-m-vertical--x-small">
              <div className="yllw-sign-up-form__element-control ">
                <input id="contact_phone" className="yllw-sign-up-form__input" type="text"/>
              </div>
            </div>
            <div className="slds-size--3-of-12">
              <div className="yllw-sign-up-form__text">Contact Email*</div>
            </div>
            <div className="slds-size--9-of-12 slds-m-vertical--x-small">
              <div className="yllw-sign-up-form__element-control ">
                <input id="contact_email" className="yllw-sign-up-form__input" type="text"/>
              </div>
            </div>
            <div className="slds-size--3-of-12">
              <div className="yllw-sign-up-form__text">Confirm Contact Email*</div>
            </div>
            <div className="slds-size--9-of-12 slds-m-vertical--x-small">
              <div className="yllw-sign-up-form__element-control ">
                <input id="confirm_contact_email" className="yllw-sign-up-form__input" type="text"/>
              </div>
            </div>
            <div className="slds-size--1-of-1">
              <div className="yllw-sign-up-form__text-label ">Contribution Report Administrators</div>
            </div>
            <div className="slds-size--1-of-1">
              <div className="yllw-sign-up-form__label slds-size--7-of-12 slds-text-align--center slds-m-left--x-large">Please list below all those users that will need access to your contribution reports.</div>
            </div>
            <div className="slds-size--3-of-12">
              <div className="yllw-sign-up-form__text">Email address</div>
            </div>
            <div className="slds-size--9-of-12 slds-m-vertical--x-small">
              <div className="yllw-sign-up-form__element-control ">
                <input id="email_address" className="yllw-sign-up-form__input" type="text"/>
                <button className="yllw-sign-up-form__button-destructive">Remove</button>
                <div className="slds-m-vertical--medium"> <a className="yllw-sign-up-form__link" href="">+ add additional report administrator</a></div>
              </div>
            </div>
            <div className="slds-size--1-of-1">
              <div className="yllw-sign-up-form__text-label">Etc.</div>
            </div>
            <div className="slds-size--3-of-12">
              <div className="yllw-sign-up-form__text">Questions?</div>
            </div>
            <div className="slds-size--9-of-12 slds-m-vertical--x-small">
              <div className="yllw-sign-up-form__element-control">
                <textarea id="questions" className="yllw-sign-up-form__textarea" ></textarea>
              </div>
              <label className="yllw-sign-up-form__label">Comments? Anything else we should know?</label>
            </div>
            <div className="slds-size--3-of-12">
              <div className="yllw-sign-up-form__text"></div>
            </div>
            <div className="slds-size--9-of-12 slds-m-vertical--x-small">
              <button className="yllw-sign-up-form__button">Save</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
