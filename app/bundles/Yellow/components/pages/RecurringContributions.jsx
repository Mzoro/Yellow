import React from 'react';
import WhiteTagline from '../../components/hero-units/WhiteTagline';
import ContributionLockupInfo from '../../components/info-containers/ContributionLockupInfo';
import ContributionLockupForm from '../../components/forms/ContributionLockupForm';

export default class RecurringContributions extends React.Component {
render() {
  const textRecurringContributions = "DON'T RECOGNIZE AN ACTBLUE CHARGE?";
  return (
    <div className="yllw-hero-unit--recurring_contribution">
      <WhiteTagline text={textRecurringContributions} />
      <div className="slds-container--center slds-container--medium slds-p-bottom--xx-large">
        <ContributionLockupInfo />
        <ContributionLockupForm />
      </div>
    </div>
  );
}
}
