import React from 'react';
export default class AboutUsTextArticle extends React.Component {
  render() {
    return (
      <div>
        <div className="yllw-text-article">
          <div className="slds-container--center slds-size--1-of-2">
            <div className="yllw-text-article__heading">
              Innovative tools + the power of millions
            </div>
            <div className="slds-container--center slds-size--10-of-12">
              <div className="yllw-text-article__heading--small">
                ActBlue is a non-profit, building fundraising technology for the left.
                Our mission is to democratize power and help small-dollar donors make
                their voices heard in a real way.
              </div>
            </div>
            <div className="slds-container--center slds-size--11-of-12">
              <div className="yllw-text-article__text">
                We develop top-of-the-line fundraising software and offer simple,
                intuitive tools to help campaigns and organizations connect
                with new and existing grassroots donors. As a result, non-profits
                thrive and Democratic campaigns get more donations through ActBlue
                than any other platform. Together, we build powerful movements.
                How do we make that happen? Well, first we test and retest our
                Contribution Forms to maximize conversion rates. We make it as
                easy as possible to give, no matter where the donor is, or on
                what device they’re using. And we make it free for campaigns and
                organizations — no tricks or add-ons. And with a top-notch tech
                team, our tools are always dependable, and we’re always working
                to upgrade them.
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <div className="yllw-text-article">
          <div className="slds-container--center slds-size--1-of-3">
            <div className="yllw-text-article__heading">Meet the Team
            </div>
            <div className="yllw-text-article__heading--small">
              Political nerds, software engineers, writers, lawyers,
              number crunchers, compliance experts, big thinkers, customer
              service stars, research whizzes. It takes all types to make
              ActBlue go.
            </div>
          </div>
        </div>
        <br></br>
      </div>
    );
  }
}
