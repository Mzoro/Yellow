import React from 'react';
export default class DonorProfileForm extends React.Component {
  render() {
    return (
      <div className="yllw-donor-profile-form">
        <div className="slds-container--center slds-size--6-of-12">
          <div className="slds-grid slds-wrap">
            <div className="yllw-donor-profile-form__heading slds-size--1-of-1">ActBlue Express Donor Profile</div>
            <div className="yllw-donor-profile-form__text--bold slds-size--1-of-1">Contact Information</div>
            <div className="slds-size--2-of-12">
              <div className="yllw-donor-profile-form__text-name">Name</div>
            </div>
            <div className="slds-size--3-of-12 ">
              <input id="display_name" className="yllw-donor-profile-form__input" type="text" placeholder="First"/>
            </div>
            <div className="slds-size--3-of-12 ">
              <input id="display_name" className="yllw-donor-profile-form__input" type="text" placeholder="Last"/>
            </div>
            <div className="slds-size--4-of-12 "></div>
            <div className="slds-size--2-of-12">
              <div className="yllw-donor-profile-form__text-name">Street address</div>
            </div>
            <div className="slds-size--6-of-12 ">
              <input id="display_name" className="yllw-donor-profile-form__input slds-size--12-of-12" type="text"/>
            </div>
            <div className="slds-size--4-of-12 "></div>
            <div className="slds-size--2-of-12">
              <div className="yllw-donor-profile-form__text-name">City</div>
            </div>
            <div className="slds-size--6-of-12 ">
              <input id="display_name" className="yllw-donor-profile-form__input slds-size--12-of-12" type="text"/>
            </div>
            <div className="slds-size--4-of-12 "></div>
            <div className="slds-size--2-of-12">
              <div className="yllw-donor-profile-form__text-name">State</div>
            </div>
            <select id="select-01" className="yllw-donor-profile-form__select slds-size--2-of-12 ">
              <option>Option One</option>
              <option>Option Two</option>
              <option>Option Three</option>
            </select>
            <div className="slds-size--8-of-12 "></div>
            <div className="slds-size--2-of-12">
              <div className="yllw-donor-profile-form__text-name">Zip</div>
            </div>
            <div className="slds-size--2-of-12 ">
              <input id="display_name" className="yllw-donor-profile-form__input slds-size--12-of-12" type="text"/>
            </div>
            <div className="slds-size--8-of-12 "></div>
            <div className="slds-size--2-of-12">
              <div className="yllw-donor-profile-form__text-name">Country</div>
            </div>
            <select id="select-01" className="yllw-donor-profile-form__select slds-size--6-of-12">
              <option>Unated States</option>
              <option>Option Two</option>
              <option>Option Three</option>
            </select>
            <div className="slds-size--4-of-12 "></div>
            <div className="slds-size--2-of-12">
              <div className="yllw-donor-profile-form__text-name">Phone</div>
            </div>
            <div className="slds-size--6-of-12 ">
              <input id="display_name" className="yllw-donor-profile-form__input slds-size--12-of-12" type="text"/>
            </div>
            <div className="slds-size--4-of-12 "></div>
            <div className="slds-size--2-of-12">
              <div className="yllw-donor-profile-form__text-name">Email</div>
            </div>
            <div className="slds-size--6-of-12 ">
              <input id="display_name" className="yllw-donor-profile-form__input slds-size--12-of-12" type="text"/>
            </div>
            <div className="slds-size--4-of-12 "></div>
            <div className="yllw-donor-profile-form__text--bold slds-size--1-of-1">Employment Information</div>
            <div className="yllw-donor-profile-form__text">Campaign finance law requires us to collect this information when you contribute.<br></br>
            Most contributions only require occupation and employer, but candidates in a few states require <br></br>your employer's address as well. We collect it here so we don't have to hassle you later.</div>
            <div className="yllw-donor-profile-form__text--bold">If you are retired, self-employed, or not employed, please use your home address.</div>
            <div className="slds-size--2-of-12"></div>
            <div className="slds-size--7-of-12 ">
              <input type="checkbox" name="options" id="checkbox-01" />
                <span className="yllw-donor-profile-form__checkbox">Check here if you are retired or not currently employed.</span>
            </div>
            <div className="slds-size--3-of-12 "></div>
            <div className="yllw-donor-profile-form__text--bold slds-size--1-of-1">Credit Card Information</div>
            <div className="slds-size--2-of-12">
              <div className="yllw-donor-profile-form__text-name">Card Number</div>
            </div>
            <div className="slds-size--6-of-12 ">
              <input id="display_name" className="yllw-donor-profile-form__input slds-size--12-of-12" type="text"/>
            </div>
            <div className="slds-size--4-of-12 "></div>
            <div className="slds-size--2-of-12">
              <div className="yllw-donor-profile-form__text-name">Exp. date</div>
            </div>
            <div className="slds-size--2-of-12 ">
              <select id="select-01" className="yllw-donor-profile-form__select ">
                <option>03 - Mar</option>
                <option>Option Two</option>
                <option>Option Three</option>
              </select>
            </div>
            <div className="slds-size--2-of-12 ">
              <select id="select-01" className="yllw-donor-profile-form__select ">
                <option>2016</option>
                <option>Option Two</option>
                <option>Option Three</option>
              </select>
            </div>
            <div className="slds-size--6-of-12 "></div>
            <div className="slds-size--2-of-12">
              <div className="yllw-donor-profile-form__text-name">Card Number</div>
            </div>
            <div className="slds-size--6-of-12 ">
              <input id="display_name" className="yllw-donor-profile-form__input slds-size--12-of-12" placeholder="ex. JutBlue Visa"type="text"/>
            </div>
            <div className="slds-size--4-of-12 "></div>
            <div className="slds-size--2-of-12"></div>
            <button className="yllw-donor-profile-form__button-little ">Save</button>
            <div className="yllw-donor-profile-form__text--bold slds-size--1-of-1 ">We Need Your Help!</div>
            <div className="yllw-donor-profile-form__text">ActBlue is a nonprofit Political Action Committee, not a business, for a reason. Our only priority is the success of Democratic candidates and organizations.<br></br>

            We depend on your support to continue our work, to help more campaigns, and to improve our services. Please leave us a tip.<br></br>

            Choose the percentage you would like to tip ActBlue when you give using your Express account. We depend on your support.</div>
            <input className="slds-size--1-of-12" type="radio" name="options" />
            <span className="yllw-donor-profile-form__checkbox-radio slds-size--10-of-12">10%</span>
            <input className="slds-size--1-of-12" type="radio" name="options" />
            <span className="yllw-donor-profile-form__checkbox-radio slds-size--10-of-12">20%</span>
            <input className="slds-size--1-of-12" type="radio" name="options" />
            <span className="yllw-donor-profile-form__checkbox-radio slds-size--10-of-12">No Thanks</span>
            <div className="slds-size--3-of-12 "></div>
            <button className="yllw-donor-profile-form__button-big">Submit</button>
          </div>
        </div>
      </div>
    );
  }
}
