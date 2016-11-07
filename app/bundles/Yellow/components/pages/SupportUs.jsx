import React from 'react';
import TextColomnWithImage from '../../components/texts/TextColomnWithImage';
import DonationForm from '../../components/forms/DonationForm';
import OrderedList from '../../components/texts/OrderedList';
import BoxedText from '../../components/texts/BoxedText';

export default class SupportUs extends React.Component {
  render() {
    return (
      <div className="slds-container--center slds-container--medium">
        <div className="slds-grid slds-wrap">
          <TextColomnWithImage />
          <DonationForm />
        </div>
        <div className="slds-container--center slds-size--2-of-3">
          <OrderedList />
          <BoxedText />
        </div>
      </div>
    );
  }
}
