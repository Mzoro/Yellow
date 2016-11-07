import React from 'react';

export default class TutorialInformation extends React.Component {
  render() {
    const picture1 = require('../../../../../assets/images/tutorial_part1.png');
    const picture2 = require('../../../../../assets/images/tutorial_part2.png');
    const picture3 = require('../../../../../assets/images/tutorial_part3.png');
    const picture4 = require('../../../../../assets/images/tutorial_part4.png');

    return (
      <div className="yllw-tutorial-information">
        <div className="slds-container--center slds-container--medium">
          <div className="slds-grid--vertical">
            <div className="slds-col">
              <div className="yllw-tutorial-information__heading">Using refcodes</div>
              <div className="yllw-tutorial-information__text">
                We recommend using reference codes (which we’ll refer to as refcodes) for every fundraising
                link you send out. Refcodes are specific links that collect useful data on your emails by
                tracking which link a donor used to give. For example, was it the first link in the email?
                Was it in version A or version B of your email? Refcodes will record that information for you,
                so you’ll have a better feel for what your donors are responding to.
              </div>
              <div className="yllw-tutorial-information__text">
                Using refcodes, you can easily measure which version of your fundraising email generates the most money
                in a test send. If you’re asking supporters to fundraise on your behalf, or planning an event with
                fundraising hosts, you can give them custom links with a refcode pre-loaded to track their donations.
                Or, if you’ve got multiple links in an email, you can find out which link most people are using to give.
              </div>
              <div className="yllw-tutorial-information__text">
                Most importantly, if you’re using Express Lane, refcodes are critical for determining which
                donation link amounts people are clicking. If you have questions about using refcodes with Express Lane,
                email us at <a href="#">info@actblue.com</a>.
              </div>
              <div className="yllw-tutorial-information__text">
                Here’s how to create a refcode:
                <ol className="yllw-tutorial-information__list--ordered">
                  <li>
                    In the Promote tab of your form, enter an appropriate word or phrase, with no spaces or punctuation marks, into the refcode section.
                  </li>
                  <li>
                    Copy the link and place it in the appropriate spot in your fundraising email or on your website.
                  </li>
                  Here’s what it will look like.
                  <img className="yllw-tutorial-information__image" src={picture1} />
                  The pink section is your refcode, orange is the amount, and green is the number of months (if you’re pre-setting for a recurring donation).
                  <li>
                    To see how many people have given using that link, go to the Statistics tab of your form. You’ll see all of the contributions broken down by refcode, as well as your total contributions.
                  </li>
                </ol>
              </div>
              <div className="yllw-tutorial-information__text--bold-uppercase">USING MULTIPLE REFCODES</div>
              <div className="yllw-tutorial-information__text">
                If you’re running a complicated and intensive testing program this feature is for you.
              </div>
              <div className="yllw-tutorial-information__text">
                Sometimes a single refcode isn't enough to collect all of your data, especially when you want
                to keep track of additional items such as link placement. That’s why we allow you to build a
                second refcode into your links, using the “refcode2=” parameter. Here's what it looks like:
                <img className="yllw-tutorial-information__image" src={picture2} />
                You’ll see a chart like the one below with a visualization of your contributions by refcode.
                <img className="yllw-tutorial-information__image" src={picture3} />
              </div>
              <div className="slds-grid slds-wrap slds-grid--align-center">
                <div className="slds-col--padded slds-size--1-of-3">
                  <a href="#" className="yllw-tutorial-information__link">[previous:]</a>
                </div>
                <div className="slds-col--padded slds-size--1-of-3">
                  <a href="#" className="yllw-tutorial-information__link">[return to index]</a>
                </div>
                <div className="slds-col--padded slds-size--1-of-3">
                  <a href="#" className="yllw-tutorial-information__link">[next:]</a>
                </div>
                <div className="slds-col--padded slds-size--1-of-3">
                  <hr />
                </div>
              </div>
            </div>
            <div className="slds-col">
              <div className="yllw-tutorial-information__heading">Recurring Contributions</div>
              <div className="yllw-tutorial-information__text--bold-uppercase">
                Why you need a recurring contribution program
              </div>
              <div className="yllw-tutorial-information__text">
                We strongly recommend that you start a recurring fundraising program. Here are a few reasons why:
                <ul className="yllw-tutorial-information__list--dotted">
                  <li>
                    Recurring contributions = more money. Period. That’s because donors can chip in a small amount each month, rather than making a large, upfront contribution.
                  </li>
                  <li>
                    Since you can see a projection of how much you’ll bring in each month, you’ll have a good sense of what the next cycle of fundraising will look like at your organization, allowing you to make better monthly budgeting decisions.
                  </li>
                  <li>
                    If you have a small staff, recurring contributions allow you to spend less time on fundraising each month, which means you can spend more time on campaigning and programming.
                  </li>
                </ul>
              </div>
              <div className="yllw-tutorial-information__text">
                Need more proof? The chart below shows an example of the difference between funds from a recurring ask and a one-time ask.
              </div>
              <div className="yllw-tutorial-information__text">
                The blue line represents a one-time ask and the pink line represents a recurring ask.
                After the initial send the one-time ask brought in $1,770 and the recurring ask brought
                in $1,635 — not much of a difference at first. But, five months later the one-time ask is
                up to $2,070 while the recurring one has brought in $5,900. This example illustrates how
                building a pool of recurring donors can pay-off in the long-term.
                <img className="yllw-tutorial-information__image" src={picture4} />
              </div>
              <div className="yllw-tutorial-information__text">
                And we make building a recurring contribution program easy. Here’s how:
                <ul className="yllw-tutorial-information__list--dotted">
                  <li>
                    We’ll take care of processing donations every month until your donors’ pledges run out. If they have questions, we’re ready to answer them.
                  </li>
                  <li>
                    Once your recurring program is in place we provide you with the tools to evaluate your program.
                  </li>
                  <li>
                    We offer a weekly recurring option that can be turned on eight weeks out from an election or leading up to your
                    organization's big day of action, allowing you to continue cultivating those strong connections with your
                    supporters throughout your final push. You can contact us to get more information about the weekly recurring
                    feature at <a href="#">info@actblue.com</a>.
                  </li>
                </ul>
              </div>
              <div className="slds-grid slds-wrap slds-grid--align-center">
                <div className="slds-col--padded slds-size--1-of-3">
                  <a href="#" className="yllw-tutorial-information__link">[previous:]</a>
                </div>
                <div className="slds-col--padded slds-size--1-of-3">
                  <a href="#" className="yllw-tutorial-information__link">[return to index]</a>
                </div>
                <div className="slds-col--padded slds-size--1-of-3">
                  <a href="#" className="yllw-tutorial-information__link">[next:]</a>
                </div>
                <div className="slds-col--padded slds-size--1-of-3">
                  <hr />
                </div>
              </div>
            </div>
            <div className="slds-col">
              <div className="yllw-tutorial-information__heading">Using HTML on your ActBlue Contribution Forms</div>
              <div className="yllw-tutorial-information__text">
                When adding text to your fundraising page, you can just type regular text (separate paragraphs with a blank line).
                But if you want to use bold, italics, bulleted lists, etc., this formatting guide will show you how. We only allow limited HTML on our forms, so keep it simple!
              </div>
              <div className="yllw-tutorial-information__text">
                To indicate that a set of words should be formatted in a specific way, use HTML tags, which are just simple commands enclosed in parenthens. In most cases, you'll
                need to enclose a set of words inside a pair of tags, which indicate the beginning and ending of the text to be formatted.
              </div>
              <div className="yllw-tutorial-information__text">
                The simplest way to explain it is by way of example, which we've provided below.
              </div>
              <div className="slds-grid--vertical">
                <div className="yllw-tutorial-information__row">
                  <div className="slds-grid slds-wrap">
                    <div className="slds-size--2-of-12">
                      <div className="yllw-tutorial-information__text--bold-uppercase">Feature</div>
                    </div>
                    <div className="slds-size--2-of-12">
                      <div className="yllw-tutorial-information__text--bold-uppercase">Tags</div>
                    </div>
                    <div className="slds-size--6-of-12">
                      <div className="yllw-tutorial-information__text--bold-uppercase">Example code</div>
                    </div>
                    <div className="slds-size--2-of-12">
                      <div className="yllw-tutorial-information__text--bold-uppercase">Result</div>
                    </div>
                  </div>
                </div>
                <div className="yllw-tutorial-information__row">
                  <div className="slds-grid slds-wrap">
                    <div className="slds-size--2-of-12">
                      <strong>BOLD</strong>
                    </div>
                    <div className="slds-size--2-of-12">
                      <em>&lt;strong&gt;&lt;/strong&gt;</em>
                    </div>
                    <div className="slds-size--6-of-12">
                      Losing is <em>&lt;strong&gt;</em>not<em>&lt;/strong&gt;</em> an option.
                    </div>
                    <div className="slds-size--2-of-12">
                      Losing is <strong>not</strong> an option.
                    </div>
                  </div>
                </div>
                <div className="yllw-tutorial-information__row">
                  <div className="slds-grid slds-wrap">
                    <div className="slds-size--2-of-12">
                      <em>Italics</em>
                    </div>
                    <div className="slds-size--2-of-12">
                      <em>&lt;em&gt;&lt;/em&gt;</em>
                    </div>
                    <div className="slds-size--6-of-12">
                      Today's <em>&lt;em&gt;</em>Boston Globe<em>&lt;/em&gt;</em> reported that...
                    </div>
                    <div className="slds-size--2-of-12">
                      Today's <em>Boston Globe</em> reported that...
                    </div>
                  </div>
                </div>
                <div className="yllw-tutorial-information__row">
                  <div className="slds-grid slds-wrap">
                    <div className="slds-size--2-of-12">
                      <a href="">Links</a>
                    </div>
                    <div className="slds-size--2-of-12">
                      <em>&lt;a href="URL"&gt;&lt;/a&gt;</em>
                    </div>
                    <div className="slds-size--6-of-12">
                      Please visit <em>&lt;a href="http://www.candidatewebsite.com"&gt;</em> my candidate's web site<em>&lt;/a&gt;</em> to learn more.
                    </div>
                    <div className="slds-size--2-of-12">
                      Please visit <a href="http://www.candidatewebsite.com"> my candidate's web site</a> to learn more.
                    </div>
                  </div>
                </div>
                <div className="yllw-tutorial-information__row">
                  <div className="slds-grid slds-wrap">
                    <div className="slds-size--2-of-12">
                      Line<br />Break
                    </div>
                    <div className="slds-size--2-of-12">
                      <em>&lt;br&gt;</em>
                    </div>
                    <div className="slds-size--6-of-12">
                      Short line <em>&lt;br&gt;</em> A longer line of text <em>&lt;br&gt;</em> Short again
                    </div>
                    <div className="slds-size--2-of-12">
                      Short line <br /> A longer line of text <br /> Short again
                    </div>
                  </div>
                </div>
                <div className="yllw-tutorial-information__row">
                  <div className="slds-grid slds-wrap">
                    <div className="slds-size--2-of-12">
                      Block Quotes
                    </div>
                    <div className="slds-size--2-of-12">
                      <em>&lt;blockquote&gt;&lt;/blockquote&gt;</em>
                    </div>
                    <div className="slds-size--6-of-12">
                      Great news from the campaign today: <em>&lt;blockquote&gt;</em> We'll be unveiling a major new initiative next week. <em>&lt;/blockquote&gt;</em> Looking forward to it!
                    </div>
                    <div className="slds-size--2-of-12">
                      Great news from the campaign today: <blockquote> We'll be unveiling a major new initiative next week. </blockquote> Looking forward to it!
                    </div>
                  </div>
                </div>
                <div className="yllw-tutorial-information__row">
                  <div className="slds-grid slds-wrap">
                    <div className="slds-size--2-of-12">
                      Numbered Lists
                    </div>
                    <div className="slds-size--2-of-12">
                      <em>&lt;ol&gt;&lt;/ol&gt;</em>
                    </div>
                    <div className="slds-size--6-of-12">
                      <em>&lt;ol&gt;<br />&lt;li&gt;</em>Number one<em>&lt;/li&gt;</em><br />
                      <em>&lt;li&gt;</em>Numero dos<em>&lt;/li&gt;</em><br />
                      <em>&lt;li&gt;san-ban&lt;/li&gt;</em><br />
                      <em>&lt;/ol&gt;</em>
                    </div>
                    <div className="slds-size--2-of-12">
                      <ol>
                        <li>Number one</li>
                        <li>Numero dos</li>
                        <li>san-ban</li>
                      </ol>
                    </div>
                  </div>
                </div>
                <div className="yllw-tutorial-information__row">
                  <div className="slds-grid slds-wrap">
                    <div className="slds-size--2-of-12">
                      Bulleted Lists
                    </div>
                    <div className="slds-size--2-of-12">
                      <em>&lt;ul&gt;&lt;/ul&gt;</em>
                    </div>
                    <div className="slds-size--6-of-12">
                      <em>&lt;ul&gt;</em><br />
                      <em>&lt;li&gt;</em>Number one<em>&lt;/li&gt;</em><br />
                      <em>&lt;li&gt;</em>Numero dos<em>&lt;/li&gt;</em><br />
                      <em>&lt;li&gt;</em>san-ban<em>&lt;/li&gt;</em><br />
                      <em>&lt;/ul&gt;</em>
                    </div>
                    <div className="slds-size--2-of-12">
                      <ul>
                        <li>Number one</li>
                        <li>Numero dos</li>
                        <li>san-ban</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slds-grid slds-wrap slds-grid--align-center">
                <div className="slds-col--padded slds-size--1-of-3">
                  <a href="#" className="yllw-tutorial-information__link">[previous:]</a>
                </div>
                <div className="slds-col--padded slds-size--1-of-3">
                  <a href="#" className="yllw-tutorial-information__link">[return to index]</a>
                </div>
                <div className="slds-col--padded slds-size--1-of-3">
                  <a href="#" className="yllw-tutorial-information__link">[next:]</a>
                </div>
                <div className="slds-col--padded slds-size--1-of-3">
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
