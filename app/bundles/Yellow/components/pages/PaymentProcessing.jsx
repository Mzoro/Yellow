import React from 'react';
import PaymentLoading from '../../components/info-containers/PaymentLoading';
import OrderedList from '../../components/texts/OrderedList';
export default class PaymentProcessing extends React.Component {
  render() {
    return (
      <div className="container">
        <PaymentLoading />
        <div className="slds-container--center slds-size--1-of-2">
          <OrderedList />
        </div>
      </div>
    );
  }
}
