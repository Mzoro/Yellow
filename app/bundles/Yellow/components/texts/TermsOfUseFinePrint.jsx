import React from 'react';
import { Link } from 'react-router';
export default class TermsOfUseFinePrint extends React.Component {
  render() {
    return (
      <div className="slds-col">
        <div className="yllw-terms-of-use-fine-print__text">
          These terms of use apply to your use of the ActBlue.com
          website and all associated services (including, but not limited to, e-mail
            received from ActBlue, and content embedded on other websites).
             If you browse or donate through ActBlue.com, you accept these conditions.
        </div>
        <div className="yllw-terms-of-use-fine-print__heading">
          Privacy Policy
        </div>
        <div className="yllw-terms-of-use-fine-print__text">
          These terms of use include our <Link to="/privacy">privacy policy</Link>, which describes how we use your personal information.
        </div>
        <div className="yllw-terms-of-use-fine-print__heading">
          Accuracy
        </div>
        <div className="yllw-terms-of-use-fine-print__text">
          We work hard to make sure all information provided by ActBlue is as accurate as possible. However, this information is presented without warranty, either express or implied, as to its accuracy, timeliness or completeness,
          and is not intended to replace any official versions of that information, where applicable, such as information provided by a candidate or government office.
        </div>
        <div className="yllw-terms-of-use-fine-print__heading">
          Other Websites
        </div>
        <div className="yllw-terms-of-use-fine-print__text">
           We provide links to other web sites, but we can't control what those sites say or do.
           In particular, websites to which we link may request your personal and/or financial information.
            ActBlue is not responsible for other sites' content,
             information collection practices, or use of the information they collect.
              ActBlue's links to other web sites do not constitute an endorsement of those sites or their content, owners, or posters.
        </div>
        <div className="yllw-terms-of-use-fine-print__text">
          ActBlue encourages third parties and individuals to link to ActBlue.com and content posted herein. Such links do not constitute an endorsement by ActBlue of these third party web sites or their content, owners, or posters
        </div>
        <div className="yllw-terms-of-use-fine-print__heading">
          Campaign Finance Laws
        </div>
        <div className="yllw-terms-of-use-fine-print__text">
          Political contributions are governed by campaign finance laws. ActBlue makes its best efforts to ensure that all contributions made on
           the ActBlue site are in accordance with these laws. Nonetheless, you have final responsibility for ensuring your own compliance.
        </div>
        <div className="yllw-terms-of-use-fine-print__text">
          For example: ActBlue will not permit users to make donations larger than $2,500
          to any federal candidate. However, Actblue does not track users' contributions through other avenues (e.g. fundraisers, candidates' websites).
          Therefore you (and not ActBlue)
          are responsible for ensuring that your total contributions through these different avenues do not exceed your.
           If you are in a position to make these kinds of large contributions,
           please be careful and don't give these campaigns' accountants any more headaches than they already have
        </div>
      </div>
    );
  }
}
