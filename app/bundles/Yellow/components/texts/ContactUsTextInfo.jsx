import React from 'react';
export default class ContactUsTextInfo extends React.Component {
  render() {
    return (
      <div className="yllw-contact-us-text-info">
        <div className="slds-container--center slds-container--medium">
          <div className="slds-grid slds-wrap">
            <div className="slds-size--1-of-1">
              <div className="yllw-contact-us-text-info__text">
                We'd love to hear from you! Please help improve this site by sending us your comments, questions, suggestions,
                 and complaints — and let us know if you'd like to help.
                 You can use the form below to reach us. We read every email and completed form you send. Promise.
                <br/>
                General questions — <a>Please check our Frequently Asked Questions (FAQ)</a> first.
                <br/>
                Looking for a candidate or organization? — ActBlue is an independent organization and is not affiliated
                 with any campaign or organization on our site.
                 Please contact the campaign or organization directly with any concerns about their website or e-mail list, inquiries about events, ticketing,
                 or merchandise, and questions about their stance on issues.
                <b/>
                Press inquiries — Please e-mail <a>press@actblue.com.</a>
                <br/>
                If you’re a developer looking to chat about security, you can find more information <a>here</a>.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
