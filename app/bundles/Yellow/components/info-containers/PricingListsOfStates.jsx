import React from 'react';
import { Link } from 'react-router';
export default class PricingListsOfStates extends React.Component {
  render() {
    return (
      <div className="yllw-pricing-lists-of-states">
        <div className="slds-container--small slds-container--center">
          <div className="yllw-pricing-lists-of-states__heading">Who can use ActBlue?</div>
          <div className="yllw-pricing-lists-of-states__heading--medium">
            If you’re a candidate, PAC, or c4 non-profit organization, the first requirement is that you’re a Democrat or working for progressive causes.
          </div>
          <div className="yllw-pricing-lists-of-states__text">
            We can list all federal candidates, as well as PACs and c4 non-profit organizations.
            If you’re not sure if you qualify, <Link to="/contact_us">contact us here</Link>.
          </div>
          <div className="yllw-pricing-lists-of-states__text">
            We also list all states (except CT) and some local candidates. Billing for some local and state candidates works a little different. Check out the list below to see if you’ll need a merchant account.
          </div>
          <div className="yllw-pricing-lists-of-states__text">
            If you’re a 501(c)(3) organization, you’re interested in doing more and better grassroots fundraising,
            and your organization’s mission doesn’t contradict our values, you can be listed on our site.
          </div>
        </div>
        <div className="slds-container--medium slds-container--center">
          <div className="slds-grid slds-wrap slds-grid--align-space">
            <div className="slds-col--padded slds-size--1-of-3">
              <div className="yllw-pricing-lists-of-states__text--bold-uppercase">Merchant Accounts</div>
              <div className="yllw-pricing-lists-of-states__text--grey">
                For some local and state races, the laws require you to have your own merchant account.
                No problem! We have an easy system for getting you set up with an account, you can still use all
                of our tools seamlessly, and the fee is about the same.
              </div>
              <div className="yllw-pricing-lists-of-states__text--grey">
                Check the list below to see if you’ll need a merchant account.
              </div>
              <div className="yllw-pricing-lists-of-states__text--grey">
                This process takes about a week to complete, so make sure you contact us before you’re ready to start fundraising.
              </div>
              <div className="yllw-pricing-lists-of-states__text--grey">
                <a href="#">Click here to get started!</a>
              </div>
              <div className="slds-grid slds-wrap">
                <div className="slds-size--1-of-1">
                  <div className="yllw-pricing-lists-of-states__text--bold-uppercase">States requiring amerchant account</div>
                </div>
                <div className="slds-size--1-of-2">
                  <div className="yllw-pricing-lists-of-states__text--grey-small">Alabama</div>
                  <div className="yllw-pricing-lists-of-states__text--grey-small">Alaska</div>
                  <div className="yllw-pricing-lists-of-states__text--grey-small">Arizona *</div>
                  <div className="yllw-pricing-lists-of-states__text--grey-small">Arkansas</div>
                  <div className="yllw-pricing-lists-of-states__text--grey-small">Delaware</div>
                  <div className="yllw-pricing-lists-of-states__text--grey-small">Florida</div>
                  <div className="yllw-pricing-lists-of-states__text--grey-small">Georgia</div>
                  <div className="yllw-pricing-lists-of-states__text--grey-small">Idaho</div>
                  <div className="yllw-pricing-lists-of-states__text--grey-small">Kansas</div>
                  <div className="yllw-pricing-lists-of-states__text--grey-small">Kentucky</div>
                  <div className="yllw-pricing-lists-of-states__text--grey-small">Louisiana</div>
                  <div className="yllw-pricing-lists-of-states__text--grey-small">Maryland</div>
                  <div className="yllw-pricing-lists-of-states__text--grey-small">Michigan *</div>
                </div>
                <div className="slds-col--padded slds-size--1-of-2">
                  <div className="yllw-pricing-lists-of-states__text--grey-small">Minnesota</div>
                  <div className="yllw-pricing-lists-of-states__text--grey-small">Nevada</div>
                  <div className="yllw-pricing-lists-of-states__text--grey-small">New Hampshire *</div>
                  <div className="yllw-pricing-lists-of-states__text--grey-small">New Jersey</div>
                  <div className="yllw-pricing-lists-of-states__text--grey-small">New Mexico **</div>
                  <div className="yllw-pricing-lists-of-states__text--grey-small">North Carolina</div>
                  <div className="yllw-pricing-lists-of-states__text--grey-small">Ohio</div>
                  <div className="yllw-pricing-lists-of-states__text--grey-small">Oklahoma</div>
                  <div className="yllw-pricing-lists-of-states__text--grey-small">Pennsylvania</div>
                  <div className="yllw-pricing-lists-of-states__text--grey-small">Rhode Island</div>
                  <div className="yllw-pricing-lists-of-states__text--grey-small">Washington</div>
                  <div className="yllw-pricing-lists-of-states__text--grey-small">West Virginia</div>
                </div>
                <div className="slds-size--1-of-1">
                  <div className="yllw-pricing-lists-of-states__text--grey-small">
                    * only requires merchant accounts for candidate committees
                  </div>
                  <div className="yllw-pricing-lists-of-states__text--grey-small">
                    ** only requires merchant accounts for non-candidate committees
                  </div>
                  <div className="yllw-pricing-lists-of-states__text--grey-small">
                    All other states work on the normal 3.95% pricing system
                  </div>
                </div>
              </div>
            </div>
            <div className="slds-col--padded slds-size--2-of-3">
              <div className="slds-grid slds-wrap">
                <div className="slds-size--1-of-1">
                  <div className="yllw-pricing-lists-of-states__text--bold-uppercase">Active Local Jurisdictions</div>
                </div>
                <div className="slds-size--1-of-2">
                  <div className="yllw-pricing-lists-of-states__text--grey-bold">
                    Local jurisdictions that work on a 3.95% pricing system
                  </div>
                  <ul className="slds-list--dotted">
                    <li>California </li>
                    <li>Colorado </li>
                    <li>Hawaii </li>
                    <li>Illinois </li>
                    <li>Maine </li>
                    <li>Massachusetts </li>
                    <li>Missouri </li>
                    <li>Nebraska </li>
                    <li>New Mexico </li>
                    <li>Oregon </li>
                    <li>Texas </li>
                    <li>Virginia </li>
                    <li>Wisconsin </li>
                  </ul>
                </div>
                <div className="slds-size--1-of-2">
                  <div className="yllw-pricing-lists-of-states__text--grey-bold">
                    Local jurisdictions requiring a merchant account
                  </div>
                  <ul className="slds-list--dotted">
                    <li>Alabama </li>
                    <li>Alaska </li>
                    <li>Arizona </li>
                    <li>California </li>
                    <li>Colorado </li>
                    <li>Florida </li>
                    <li>Georgia </li>
                    <li>Indiana </li>
                    <li>Louisiana </li>
                    <li>Maine </li>
                    <li>Maryland </li>
                    <li>Michigan </li>
                    <li>Nevada </li>
                    <li>New Hampshire </li>
                    <li>New Jersey </li>
                    <li>New Mexico </li>
                    <li>New York </li>
                    <li>North Carolina </li>
                    <li>Ohio </li>
                    <li>Pennsylvania </li>
                    <li>Rhode Island </li>
                    <li>South Carolina </li>
                    <li>Tennessee </li>
                    <li>Texas </li>
                    <li>Utah </li>
                    <li>Washington </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
