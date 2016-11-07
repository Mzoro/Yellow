import React from 'react';
export default class NewsFeed extends React.Component {
  render() {
    const FeedImage = require('../../../../../assets/images/feed_image.png');
    return (
      <div className="slds-size--2-of-3">
        <div className="yllw-news-feed">
          <div className="slds-container--center slds-size--2-of-3">
            <div className="slds-grid--vertical">
              <div className="slds-col">
                <a href="#" className="yllw-news-feed__link-header">ActBlue Charities is HERE</a>
                <div className="slds-grid">
                  <div className="slds-col">
                    <span className="yllw-news-feed__icon-container">
                      <svg aria-hidden="true" className="yllw-news-feed__icon">
                        <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#user"></use>
                      </svg>
                    </span>
                  <span className="yllw-news-feed__post-info">posted by</span>
                    <a href="#">ERIN HILL</a>
                  </div>
                  <div className="slds-col">
                    <span className="yllw-news-feed__icon-container">
                      <svg aria-hidden="true" className="yllw-news-feed__icon">
                        <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#dayview"></use>
                      </svg>
                    </span>
                    <span className="yllw-news-feed__post-info">on</span>
                    <a href="#">FEBRUARY 17, 2016</a>
                  </div>
                  <div className="slds-col">
                    <span className="yllw-news-feed__icon-container">
                      <svg aria-hidden="true" className="yllw-news-feed__icon">
                        <use xlinkHref="/assets/icons/action-sprite/svg/symbols.svg#filter"></use>
                      </svg>
                    </span>
                  <span className="yllw-news-feed__post-info">Filed under</span>
                    <a href="#">Features</a>
                  </div>
                </div>
              </div>
              <div className="slds-col">
                <div className="yllw-news-feed__text">
                  *drumroll please* We’re excited to announce that charitable organizations can
                  now fundraise using the same great platform that ActBlue has built over the last 11 years!
                  Organizations with a 501(c)3 designation are now able to get
                  set up with our tools in just minutes.
                   Contributions will be run through ActBlue Charities,
                   the newest arm of the ActBlue family, but everything else stays the same.
                    Charities both big and small, national and local, will be able to take advantage of
                    our entire set of industry-leading fundraising tools,
                    including the existing (and growing) 2.4M-strong Express user universe — that’s
                    people who have saved their donor and credit
                    card information and can give in an instant.
                    By bringing our innovative tools to a whole new set of organizations,
                    we’re hoping to add to revenue models for
                    charitable organizations by working with them to build a new stream
                    of small-dollar donors.
                    If you’re interested, you can start the setup process here.
                </div>
                <img className="yllw-news-feed__image" src={FeedImage} />
                <div className="yllw-news-feed__text">
                  So, why did we spend years (yes, years) working to make it possible f
                  or charities to use our fundraising tools?ActBlue’s mission has
                  always been to help connect grassroots donors with the causes and campaigns that they support, so they can effect change in the world.
                  Through technology, we help break down barriers, and make it easier for Americans to chip in what they can afford to fuel change in this country.
                   Just think of what can be accomplished if we can help thousands of
                   charitable organizations build their grassroots fundraising base, much like we’ve done with political giving.We’ve seen firsthand how powerful grassroots,
                    people-powered movements can be, and we want to help charities create those kinds of movements and bring in more donations,
                     so they can expand their capacity to do good works. And as a nonprofit, ActBlue is committed to offering those tools for free,
                     so organizations at every level have access to the best technology possible.There are certainly already a lot of platforms charities can use to fundraise online.
                    Here’s what makes ActBlue a better choice:ActBlue isn’t just
                     a way to take in money. We’re a platform built specifically to support grassroots fundraising and the organizations doing that work.
                     From our tools to our Express universe to our trainings, we draw from the experiences of thousands of groups fundraising with us.
                     How does that happen? Well, the huge volume of contributions we handle
                     enables us to constantly improve our contribution forms with tiny optimizations that benefit the entire platform at once and immediately bring in more dollars.
                     Donors are at the core of what we do, and we’re constantly
                     looking for ways to make it easier and faster for them to give.
                     The design of buttons, small layout changes, and user experience alterations can make big differences when it comes to conversion rates.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
