import React from 'react';
import { Link } from 'react-router';
export default class Footer extends React.Component {

  render() {
    return (
      <div className="yllw-footer">
        <div className="slds-grid slds-grid--align-center">
          <div className="slds-col slds-size--9-of-12">
            <Link to="/homepage" className="yllw-footer__logo">Yellow</Link>
          </div>
          <div className="slds-col">
            <svg className="yllw-footer__icons-social">
              <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#announcement"></use>
            </svg>
            <svg className="yllw-footer__icons-social ">
              <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#warning"></use>
            </svg>
          </div>
        </div>

        <hr/>

        <div className="slds-grid slds-wrap slds-grid--align-center">
          <div className="slds-medium-size--2-of-3 slds-large-size--6-of-12">
            <div className="slds-grid slds-grid--align-spread">
              <div className="slds-col">
                <div className="slds-grid--vertical">
                  <div className="yllw-footer__text slds-col">THE ORGANIZATION</div>
                  <div className="slds-col">
                    <Link to="/about_us">About Us</Link>
                  </div>
                  <div className="slds-col">
                    <Link to="/contact_us">Contact Us</Link>
                  </div>
                  <div className="slds-col">
                    <Link to="/jobs">Jobs</Link>
                  </div>
                  <div className="slds-col">
                    <Link to="/blog">Blog</Link>
                  </div>
                </div>
                </div>
                <div className="slds-col">
                  <div className="slds-grid--vertical">
                    <div className="yllw-footer__text slds-col">TOOLS</div>
                    <div className="slds-col">
                      <Link to="/express">Express</Link>
                    </div>
                    <div className="slds-col">
                      <Link to="/pricing">Pricing</Link>
                    </div>
                    <div className="slds-col">
                      <Link to="/directory">Directory</Link>
                    </div>
                    <div className="slds-col">
                      <Link to="/contribution_forms">Contribution Forms</Link>
                    </div>
                  </div>
                </div>
                <div className="slds-col">
                  <div className="slds-grid--vertical">
                    <div className="yllw-footer__text slds-col">SUPPORT</div>
                    <div className="slds-col">
                      <Link to="/tutorial">Tutorial</Link>
                    </div>
                    <div className="slds-col">
                      <Link to="/faq">FAQ</Link>
                    </div>
                    <div className="slds-col">
                      <Link to="/recurring_contributions">Recurring Contributions</Link>
                    </div>
                    <div className="slds-col">
                      <Link to="/faq">Help</Link>
                    </div>
                  </div>
                </div>
            </div>
            <div className="slds-col">
              <Link to="/support_us"><button className="yllw-footer__button">Donate to Yellow</button></Link>
            </div>
          </div>
          <div className="slds-medium-size--1-of-2 slds-large-size--3-of-12 slds-m-left--medium">
            <div className="yllw-footer__bordered-text ">
              Paid for by and not authorized by any
              candidate or candidate's committee.
              Contributions or gifts to ActBlue are not
              deductible as charitable contributions
              for Federal income tax purposes.
            </div>
            <div className="yllw-footer__text">
               ActBlue Charities is not responsible for any political content on this page.
            </div>
          </div>
        </div>
        <div className="yllw-footer-copyright">
          <div className="slds-grid slds-grid--align-center">
            <div className="slds-size--8-of-12">
              <div className="yllw-footer-copyright__text">© 2016-... Yellow. All rights reserved.</div>
            </div>
            <div className="slds-size--1-of-12">
              <Link to="/privacy">Privacy</Link>
            </div>
            <div className="slds-size--1-of-12">
              <Link to="/terms_of_use">Terms of Use</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
