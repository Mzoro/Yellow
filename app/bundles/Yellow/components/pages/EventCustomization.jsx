import React from 'react';
import ContributionFormsEventsSteps from '../../components/info-containers/ContributionFormsEventsSteps';
import EventCustomizationDetails from '../../components/forms/EventCustomizationDetails';

export default class EventCustomization extends React.Component {
render() {
  const currentNumber = 3;
  const changingName = 'Tickets';
  return (
    <div className="container">
      <ContributionFormsEventsSteps currentNumber={currentNumber} changingName={changingName}>
				The Email Receipt is a great place to include specific information that you'd
				like only guests who have already paid to attend the event to have, such as
				location and contact information. Also, remember to thank donors for purchasing a ticket!
			</ContributionFormsEventsSteps>
      <EventCustomizationDetails />
    </div>
  );
}
}
