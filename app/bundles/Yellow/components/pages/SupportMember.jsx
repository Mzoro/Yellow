import React from 'react';
import MemberInfo from '../../components/texts/MemberInfo';
import MemberDonationForm from '../../components/forms/MemberDonationForm';
import OrderedList from '../../components/texts/OrderedList';
import BoxedText from '../../components/texts/BoxedText';

export default class SupportMember extends React.Component {
  render() {
    return (
      <div className="conrainer">
        <div className="slds-container--center slds-container--medium">
          <div className="slds-grid">
            <MemberInfo />
            <MemberDonationForm />
          </div>
        </div>
        <div className="slds-container--center slds-size--2-of-3">
          <OrderedList />
          <BoxedText />
        </div>
      </div>
    );
  }
}
