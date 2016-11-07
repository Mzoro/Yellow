import React from 'react';
import { Link } from 'react-router';
export default class MyFundraisingControl extends React.Component {
  render() {
    return (
      <div className="yllw-my-fundraising-control">
        <div className="slds-grid slds-wrap">
          <div className="slds-size--1-of-1">
            <div className="yllw-my-fundraising-control__text--bold"> New to ActBlue?</div>
          </div>
          <div className="slds-size--3-of-5">
            <div className="yllw-my-fundraising-control__text"> Our <Link to="/tutorial" className="yllw-my-fundraising-control__link">Tutorial </Link>
              will help you build a contribution form. Also, check out our tips on <a href="#" className="yllw-my-fundraising-control__link">Writing a Fundraising Email</a>.
            </div>
          </div>
          <div className="slds-size--2-of-5">
            <div className="yllw-create-a-page">
              <div className="yllw-create-a-page__heading">Create a Page</div>
              <div className="yllw-create-a-page__text">
                To create a page, visit your candidate's page, or
                <Link to="/directory" className="yllw-create-a-page__link"> search our directory.</Link>
                <Link to="/directory"><button className="yllw-create-a-page__button">Search Directory</button></Link>
              </div>
            </div>
          </div>
          <div className="slds-size--3-of-5">
            <div className="slds-grid slds-wrap">
              <div className="slds-size--3-of-4">
                <div className="yllw-my-fundraising-control__text--bold">Active Fundraising Pages</div>
              </div>
              <div className="slds-size--1-of-4">
                <div className="yllw-my-fundraising-control__text">None</div>
              </div>
              <div className="slds-size--3-of-4">
                <div className="yllw-my-fundraising-control__text--bold">Deleted Fundraising Pages</div>
              </div>
              <div className="slds-size--1-of-4">
                <div className="yllw-my-fundraising-control__text">None</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
