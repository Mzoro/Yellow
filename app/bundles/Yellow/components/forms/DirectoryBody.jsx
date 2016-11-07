import React from 'react';
export default class DirectoryBody extends React.Component {
  render() {
    return (
      <div className="slds-container--center slds-size--7-of-12">
        <div className="yllw-directory-body">
          <div className="slds-grid slds-wrap">
            <div className="yllw-directory-body__text slds-size--1-of-1">Committees or organizations found.</div>
            <div className="yllw-directory-body__text--bolt slds-size--1-of-1">Groups and Funds</div>
            <ol className="slds-size--1-of-3">
              <li><a className="yllw-directory-body__link" href="">Ballot Initiatives</a></li>
              <li><a className="yllw-directory-body__link" href="">Draft Funds</a></li>
              <li><a className="yllw-directory-body__link" href="">Organizations</a></li>
            </ol>
            <ol className="slds-size--1-of-3">
              <li><a className="yllw-directory-body__link" href="">Candidate</a></li>
              <li><a className="yllw-directory-body__link" href="">Independent Expenditure Committees</a></li>
            </ol>
            <div className="yllw-directory-body__text--bolt slds-size--1-of-1">Candidates For</div>
            <div className="slds-size--2-of-12"><a className="yllw-directory-body__link" href="">Ballot Initiatives</a></div>
            <div className="slds-size--2-of-12"><a className="yllw-directory-body__link" href="">State Executive</a></div>
            <div className="slds-size--2-of-12"><a className="yllw-directory-body__link" href="">State Senate</a></div>
            <div className="slds-size--2-of-12"><a className="yllw-directory-body__link" href="">State House</a></div>
            <div className="slds-size--2-of-12"><a className="yllw-directory-body__link" href="">Governor</a></div>
            <div className="slds-size--2-of-12"><a className="yllw-directory-body__link" href=""></a></div>
            <div className="slds-size--2-of-12"><a className="yllw-directory-body__link" href="">U.S. House</a></div>
            <div className="slds-size--2-of-12"><a className="yllw-directory-body__link" href="">President</a></div>
            <div className="yllw-directory-body__text--bolt slds-size--1-of-1">State</div>
          </div>
          <div className="slds-grid slds-grid--align-space">
            <ol className="yllw-directory-body__ol slds-size--1-of-1">
              <li className="yllw-directory-body__list"><a className="yllw-directory-body__link" href="">AK</a></li>
              <li className="yllw-directory-body__list"><a className="yllw-directory-body__link" href="">AL</a></li>
              <li className="yllw-directory-body__list"><a className="yllw-directory-body__link" href="">AR</a></li>
              <li className="yllw-directory-body__list"><a className="yllw-directory-body__link" href="">AS</a></li>
              <li className="yllw-directory-body__list"><a className="yllw-directory-body__link" href="">AZ</a></li>
              <li className="yllw-directory-body__list"><a className="yllw-directory-body__link" href="">CA</a></li>
              <li className="yllw-directory-body__list"><a className="yllw-directory-body__link" href="">CO</a></li>
              <li className="yllw-directory-body__list"><a className="yllw-directory-body__link" href="">CT</a></li>
              <li className="yllw-directory-body__list"><a className="yllw-directory-body__link" href="">DC</a></li>
              <li className="yllw-directory-body__list"><a className="yllw-directory-body__link" href="">DE</a></li>
              <li className="yllw-directory-body__list"><a className="yllw-directory-body__link" href="">FL</a></li>
              <li className="yllw-directory-body__list"><a className="yllw-directory-body__link" href="">GA</a></li>
              <li className="yllw-directory-body__list"><a className="yllw-directory-body__link" href="">HI</a></li>
              <li className="yllw-directory-body__list"><a className="yllw-directory-body__link" href="">IA</a></li>
              <li className="yllw-directory-body__list"><a className="yllw-directory-body__link" href="">ID</a></li>
              <li className="yllw-directory-body__list"><a className="yllw-directory-body__link" href="">IL</a></li>
            </ol>
          </div>
          <div className="yllw-directory-body__text--bolt slds-size--1-of-1">By Year</div>
          <select id="select-01" className="yllw-directory-body__select slds-size--1-of-4">
            <option>Option One</option>
            <option>Option Two</option>
            <option>Option Three</option>
          </select>
        </div>
      </div>
    );
  }
}
