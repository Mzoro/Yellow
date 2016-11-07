import React from 'react';
export default class MyRecurringContributions extends React.Component {
render() {
  return (
    <div className="container">
      <hr></hr>
      <div className="slds-container--center slds-container--medium">
        <div className="yllw-my-recurring-contributions">
          <div className="yllw-my-recurring-contributions__heading">Your Recurring Contributions</div>
          <div className="yllw-my-recurring-contributions__text">
            You haven't made any contributions with your ActBlue Express yet.
          </div>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}
}
