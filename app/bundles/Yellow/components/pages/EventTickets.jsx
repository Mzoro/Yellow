import React from 'react';
import ContributionFormsEventsSteps from '../../components/info-containers/ContributionFormsEventsSteps';
import EventTicketsDetails from '../../components/forms/EventTicketsDetails';

export default class EventTickets extends React.Component {
render() {
  const currentNumber = 2;
  const changingName = 'Tickets';
  return (
    <div className="container">
      <ContributionFormsEventsSteps currentNumber={currentNumber} changingName={changingName}>
				Your event needs at least one type of ticket (i.e. donor level), and you can create
				as many ticket types as you need. You can add, edit, or disable tickets at any time.
				If you have a limit on the number of tickets that can be sold, check the limit box.
			</ContributionFormsEventsSteps>
      <EventTicketsDetails />
    </div>
  );
}
}
