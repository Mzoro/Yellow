import React from 'react';
import ContributionFormsEventsSteps from '../../components/info-containers/ContributionFormsEventsSteps';
import ContributionFormGoalDetails from '../../components/forms/ContributionFormGoalDetails';

export default class ContributionFormGoal extends React.Component {
render() {
  const currentNumber = 2;
  const changingName = 'Goal';
  return (
    <div className="container">
      <ContributionFormsEventsSteps currentNumber={currentNumber} changingName={changingName}>
				Donors give more when they can watch real-time progress towards a communal goal.
				Setting a goal here will automatically place a goal thermometer on your contribution form.
				As donations come in, your thermometer will automatically chart real-time progress.
				You can edit, cancel, or update the goal at any time.
			</ContributionFormsEventsSteps>
      <ContributionFormGoalDetails />
    </div>
  );
}
}
