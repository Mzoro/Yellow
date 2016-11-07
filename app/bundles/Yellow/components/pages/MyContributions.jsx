import React from 'react';
import NavTabs from '../../components/nav-bars/NavTabs';
import Tab from '../../components/nav-bars/Tab';
import MyContributionsSocialList from '../../components/nav-bars/MyContributionsSocialList';
import MyContributionsInformation from '../../components/info-containers/MyContributionsInformation';
import BestOfWeek from '../../components/info-containers/BestOfWeek';

export default class MyContributions extends React.Component {
render() {
  const bernie = require('../../../../../assets/images/BernieSanders.png');
  const endCitizensUnited = require('../../../../../assets/images/EndCitizensUnited.png');
  const dfa = require('../../../../../assets/images/DFA.jpg');
  return (
    <div className="container">
      <NavTabs>
       <Tab name = "My Contributions" currentLink = "My Contributions" address = "/my_contributions" />
       <Tab name = "My Fundraising" currentLink = "My Contributions" address = "/my_fundraising" />
      </NavTabs>
      <div className="slds-container--medium slds-container--center">
        <div className="slds-grid slds-wrap">
          <MyContributionsSocialList />
          <MyContributionsInformation>
            <BestOfWeek image={bernie} candidate="Bernie Sanders" position="President" />
            <BestOfWeek image={dfa} candidate="Democracy for America (DFA)" />
            <BestOfWeek image={endCitizensUnited} candidate="End Citizens United" />
          </MyContributionsInformation>
        </div>
      </div>
    </div>
  );
}
}
