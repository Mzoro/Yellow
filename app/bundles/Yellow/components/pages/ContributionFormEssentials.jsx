import React from 'react';
import ContributionFormsEventsSteps from '../../components/info-containers/ContributionFormsEventsSteps';
import ContributionFormEssentialsDetails
from '../../components/forms/ContributionFormEssentialsDetails';

export default class ContributionFormCustomization extends React.Component {
render() {
  const currentNumber = 1;
  const changingName = 'Goal';
  return (
    <div className="container">
      <ContributionFormsEventsSteps currentNumber={currentNumber} changingName={changingName}>
        Remember to include the date and time of your event, as well as anything else you d like prospective guests to know. We recommend including contact information.
      </ContributionFormsEventsSteps>
      <ContributionFormEssentialsDetails />
    </div>
  );
}
}
