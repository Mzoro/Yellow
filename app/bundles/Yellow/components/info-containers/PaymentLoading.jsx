import React from 'react';
export default class PaymentLoading extends React.Component {
  render() {
    return (
      <div className="slds-container--center slds-container--small slds-size--1-of-2">
        <div className="yllw-payment-loading">
          <div className="slds-grid slds-grid--align-center slds-text-align--center ">
            <div className="slds-col ">
              <div className="yllw-payment-loading__text slds-col"> processing payment... </div>
              <div className="slds-container--center slds-size--1-of-3">
                <div className="yllw-payment-loading__spiner">
                  <img src="/assets/images/spinners/slds_spinner_brand.gif" alt="Loading..." />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
