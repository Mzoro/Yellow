import React from 'react';
import ContributionFormsEventsSteps from '../../components/info-containers/ContributionFormsEventsSteps';
import ContributionFormCustomizationDetails
from '../../components/forms/ContributionFormCustomizationDetails';

export default class ContributionFormCustomization extends React.Component {
render() {
  const currentNumber = 3;
  const changingName = 'Goal';
  return (
    <div className="container">
      <ContributionFormsEventsSteps currentNumber={currentNumber} changingName={changingName}>
        Some advanced options to further customize your Contribution Form. Make sure to thank your donors in the Email Receipt Text box.
      </ContributionFormsEventsSteps>
      <ContributionFormCustomizationDetails />
    </div>
  );
}
}
