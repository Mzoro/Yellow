import React from 'react';
export default class SearchSidebar extends React.Component {
  render() {
    return (
      <div className="slds-size--1-of-3">
        <div className="yllw-search-sidebar">
          <div className="slds-grid--vertical slds-wrap slds-size--1-of-2">
            <div className="slds-col">
              <div className="slds-grid">
                <div className="slds-col">
                  <label className="yllw-search-sidebar__lable" >Search</label>
                  <input id="search-form" className="yllw-search-sidebar__search-input" type="text" placeholder="Search this webs" />
                </div>
                <div className="slds-col">
                  <button className="yllw-search-sidebar__search-button slds-m-top--x-large">Search</button>
                </div>
              </div>
            </div>
            <div className="slds-col">
              <div className="yllw-search-sidebar__form-element">
                <label className="yllw-search-sidebar__lable">Archives</label>
                <div className="yllw-search-sidebar__dropdown-control">
                  <div className="yllw-search-sidebar__dropdown-container">
                    <select id="month-list" className="yllw-search-sidebar__dropdown-list">
                      <option>Select month</option>
                      <option>February, 2016</option>
                      <option>January, 2016</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="slds-col">
              <div className="slds-grid--vertical">
                <div className="slds-col">
                  <label className="yllw-search-sidebar__lable">Categories</label>
                </div>
                <div className="slds-col">
                  <a href="#">About Yellow</a>
                </div>
                <div className="slds-col">
                  <a href="#">Analysis</a>
                </div>
                <div className="slds-col">
                  <a href="#">Candidate Videos</a>
                </div>
                <div className="slds-col">
                  <a href="#">Case Studies</a>
                </div>
                <div className="slds-col">
                  <a href="#">Features</a>
                </div>
                <div className="slds-col">
                  <a href="#">General</a>
                </div>
                <div className="slds-col">
                  <a href="#">In the News</a>
                </div>
                <div className="slds-col">
                  <a href="#">Monthly Recap</a>
                </div>
                <div className="slds-col">
                  <a href="#">Testing</a>
                </div>
                <div className="slds-col">
                  <a href="#">Tips & Tricks</a>
                </div>
                <div className="slds-col">
                  <a href="#">Uncategorized</a>
                </div>
                <div className="slds-col">
                  <a href="#">Web/Tech</a>
                </div>
              </div>
            </div>
            <div className="slds-col">
              <div className="slds-size--2-of-3">
                <div className="yllw-search-sidebar__text">
                  ActBlue Charities is not responsible for any political content on this page.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
