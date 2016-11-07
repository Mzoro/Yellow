import React from 'react';
export default class JobsArticleWorkWithUs extends React.Component {
  render() {
    const fullscreen = require('../../../../../assets/images/jobs_fullscreen.jpg');

    return (
      <div className="yllw-jobs-article-work-with-us">
        <div className="slds-container--center slds-size--2-of-3">
          <div className="slds-grid--vertical">
            <div className="yllw-jobs-article-work-with-us__heading">Come work with us!</div>
            <div className="yllw-jobs-article-work-with-us__heading--medium">
              We’re a motivated team of software developers, political nerds, digital enthusiasts,
              customer service champions, and lawyers. Together, we’re working to build state-of-the-art
              fundraising infrastructure for Democratic campaigns, progressive organizations, and causes of all sizes.
            </div>
            <div className="yllw-jobs-article-work-with-us__text">
              We set the bar high for ourselves. ActBlue, a non-profit, is the largest
              source of funds for Democrats. Every day we handle tens of thousands of contributions
              from small-dollar donors. That’s our mission in action. And it wouldn’t be possible
              without a collaborative work environment that values professional growth and innovation.
            </div>
            <div className="yllw-jobs-article-work-with-us__text">
              Each department uses modern best practices with a dash of elbow grease and teamwork
              to get the job done. Our tech team uses Rails, PostgreSQL, Redis, and Node.js combined with
              excellent test coverage and efficient code to develop the software that powers ActBlue.
            </div>
            <div className="yllw-jobs-article-work-with-us__text">
              Interested in helping power a grassroots movement? Check out our openings below.
            </div>
            <div className="yllw-jobs-article-work-with-us__text">
              We offer a supportive workplace filled with dedicated, razor-sharp, and creative people and all of the following benefits:
            </div>
            <div className="yllw-jobs-article-work-with-us__text--bold-uppercase">Competitive Compensation</div>
            <div className="yllw-jobs-article-work-with-us__text--grey">
              Including a 401(k) with generous matching.
            </div>
            <div className="yllw-jobs-article-work-with-us__text--bold-uppercase">Top-Notch Medical Coverage</div>
            <div className="yllw-jobs-article-work-with-us__text--grey">
              Fully-paid, trans-inclusive health, dental, and vision insurance for you and your dependents.
            </div>
            <div className="yllw-jobs-article-work-with-us__text--bold-uppercase">Flexible Work Schedule</div>
            <div className="yllw-jobs-article-work-with-us__text--grey">
              We know everyone runs on different schedules, so we do our best to accommodate the working hours that suit you.
            </div>
            <div className="yllw-jobs-article-work-with-us__text--bold-uppercase">Professional Growth</div>
            <div className="yllw-jobs-article-work-with-us__text--grey">
              Everyone gets a professional development budget to attend conferences, seminars, or trainings, enroll in courses, and/or join a professional organization.
            </div>
            <div className="yllw-jobs-article-work-with-us__text--bold-uppercase">Generous Paid Time Off</div>
            <div className="yllw-jobs-article-work-with-us__text--grey">
              We believe in work-life balance and encourage you to use your time off. We don’t track individual vacation days.
            </div>
            <div className="yllw-jobs-article-work-with-us__text--bold-uppercase">Paid Parental Leave</div>
            <div className="yllw-jobs-article-work-with-us__text--grey">
              3 Months of fully paid time off and one month of part time, fully paid flex time. All genders qualify equally, and the policy includes adoptions.
            </div>
            <div className="yllw-jobs-article-work-with-us__text--bold-uppercase">Commuting Options</div>
            <div className="yllw-jobs-article-work-with-us__text--grey">
              Your choice of a monthly MBTA pass, business parking pass, commuter rail discount, or bicycle reimbursement. We also provide secure bike parking and tools for repairs on the go.
            </div>
            <div className="yllw-jobs-article-work-with-us__text">
              We’ve seen that a fun and relaxed environment has a direct and positive impact on our collective creativity and productivity. Plus, we really enjoy spending time together!
            </div>
            <div className="yllw-jobs-article-work-with-us__text">
              ActBlue believes that a diverse, inclusive staff and movement is a fundamental strength. Towards that end, we’re committed
              to hiring people of all races, ethnicities, religions, ages, sex, genders, sexual orientations, or gender identities. Women, people
              of color, LGBTQ individuals, and members of other minority or marginalized groups are strongly encouraged to apply.
            </div>
          </div>
        </div>
        <img src={fullscreen} />
      </div>
    );
  }
}
