import React from 'react';
import ContributionFormsEventsSteps from '../../components/info-containers/ContributionFormsEventsSteps';
import EventEssentialsDetails from '../../components/forms/EventEssentialsDetails';

export default class EventEssentials extends React.Component {
render() {
  const currentNumber = 1;
  const changingName = 'Tickets';
  return (
    <div className="container">
      <ContributionFormsEventsSteps currentNumber={currentNumber} changingName={changingName}>
				Remember to include the date and time of your event, as well as anything else you'd like
        prospective guests to know. We recommend including contact information.
			</ContributionFormsEventsSteps>
      <EventEssentialsDetails />
    </div>
  );
}
}
