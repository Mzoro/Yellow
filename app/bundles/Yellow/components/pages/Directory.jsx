import React from 'react';
import HeaderDirectory from '../../components/headers/HeaderDirectory';
import DirectoryBody from '../../components/forms/DirectoryBody';
import ContributeInfo from '../../components/info-containers/ContributeInfo';
import PaginationDirectory from '../../components/nav-bars/PaginationDirectory';

export default class Directory extends React.Component {
  render() {
    const ContributeImageAndy = require('../../../../../assets/images/president.png');
    const ContributeImageBernie = require('../../../../../assets/images/BernieSanders.png');
    return (
      <div className="slds-container--center">
        <HeaderDirectory />
        <DirectoryBody />
        <div className="slds-container--center slds-size--7-of-12">
          <ContributeInfo ContributeImage={ContributeImageAndy}>
            Andy Caffrey
          </ContributeInfo>
          <ContributeInfo ContributeImage={ContributeImageBernie}>
            Bernie Sunders
          </ContributeInfo>
          <PaginationDirectory />
        </div>
      </div>
    );
  }
}
