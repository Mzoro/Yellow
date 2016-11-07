import React from 'react';
import NavTabs from '../../components/nav-bars/NavTabs';
import Tab from '../../components/nav-bars/Tab';
import MyFundraisingStats from '../../components/info-containers/MyFundraisingStats';
import MyFundraisingControl from '../../components/info-containers/MyFundraisingControl';
export default class MyFundraising extends React.Component {
render() {
  return (
    <div className="container">
      <NavTabs>
       <Tab name = "My Contributions" currentLink = "My Fundraising" address = "/my_contributions" />
       <Tab name = "My Fundraising" currentLink = "My Fundraising" address = "/my_fundraising" />
      </NavTabs>
      <div className="slds-container--medium slds-container--center">
        <MyFundraisingStats />
        <MyFundraisingControl />
      </div>
    </div>
  );
}
}
