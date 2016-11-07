import React from 'react';
export default class PrivacyFinePrint extends React.Component {
  render() {
    return (
      <div className="slds-col">
        <div className="yllw-privacy-fine-print__text">
          This privacy policy describes how we use your personal information.
           As used in this policy, the term “personal information” means information that
            can be directly associated with an individual, and includes names, addresses, telephone numbers, email addresses, etc.
        </div>
        <div className="yllw-privacy-fine-print__heading">
          E-mail addresses
        </div>
        <div className="yllw-privacy-fine-print__text">
          We require your e-mail address when you donate so that we can e-mail you a receipt.
          Also, you may choose to receive occasional e-mail updates
           as we develop ActBlue. You can instantly unsubscribe at any time by clicking.
            If you are having problems with this link,
            you can unsubscribe by e-mailing,
            but please allow a week for processing.
        </div>
        <div className="yllw-privacy-fine-print__heading">
          Information Collected by ActBlue
        </div>
        <div className="yllw-privacy-fine-print__text">
          When you contribute to candidates, causes and committees on ActBlue,
          we are required to collect your name, postal address, phone number, email address, occupation, employer, and employer's address, and to send this information
          along with your donation. We also record this information alongside your contribution amounts and recipients in our reports to the FEC or the respective state
           agency. Each candidate, committee, or organization receiving your donations may also include this information in their regulatory reports.
            ActBlue submits its campaign finance reports on a rolling basis, as required by state and/or federal law. FEC reports containing this information
             are publicly available from the. State reports are typically available through the state agency designated to
             oversee campaigns and elections. ActBlue does not publicly report your charitable or social welfare giving.
        </div>
        <div className="yllw-privacy-fine-print__heading">
          Credit Card Information
        </div>
        <div className="yllw-privacy-fine-print__text">
          We securely transmit your credit card information to Litle & Co.
          (our payment processor), and do not store this information unless you have specifically requested a recurring contribution. We also request your phone
          number and email address when you contribute so that we can
          reach you should further verification of your credit card information be required.
        </div>
        <div className="yllw-privacy-fine-print__heading">
          Reports to contribution form authors
        </div>
        <div className="yllw-privacy-fine-print__text">
          Authors of contribution forms receive reports about donations made through the web pages they create. These reports include the dates, amounts, and recipients of these contributions.
        </div>
      </div>
    );
  }
}
