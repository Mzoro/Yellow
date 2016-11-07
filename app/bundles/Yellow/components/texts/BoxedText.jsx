import React from 'react';
export default class BoxedText extends React.Component {
  render() {
    return (
      <div className="slds-container--center slds-size--1-of-2">
        <div className="yllw-boxed-text">
          Paid for by ActBlue (actblue.com) and not authorized by any candidate or candidate's committee.
          Contributions or gifts to ActBlue are not deductible as charitable contributions for Federal income tax purposes.
        </div>
      </div>
    );
  }
}
