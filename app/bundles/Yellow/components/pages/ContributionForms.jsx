import React from 'react';
import ContributionSidebar from '../../components/nav-bars/ContributionSidebar';
import ContributionTable from '../../components/tables/ContributionTable';
import PaginationDirectory from '../../components/nav-bars/PaginationDirectory';

export default class ContributionForms extends React.Component {
  render() {
    return (
      <div className="slds-container--center slds-container--medium">
        <div className="slds-grid slds-wrap">
          <ContributionSidebar />
          <ContributionTable />
        </div>
        <PaginationDirectory />
      </div>
    );
  }
}
