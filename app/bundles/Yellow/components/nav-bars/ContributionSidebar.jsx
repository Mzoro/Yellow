import React from 'react';
export default class ContributionSidebar extends React.Component {
  render() {
    return (
      <div className="yllw-contribution-sidebar slds-size--3-of-12">
        <ul>
          <li><a className="yllw-contribution-links--brand" href="">Top Contribution Forms</a></li>
          <li><a className="yllw-contribution-links" href="">Forms with Recent Contributions</a></li>
          <li><a className="yllw-contribution-links" href="">Newest Contribution <br></br>Forms</a></li>
          <li><a className="yllw-contribution-links" href="">Complete List of <br></br>Contribution Forms</a></li>
        </ul>
      </div>
    );
  }
}
