import React from 'react';
export default class TextColomnWithImage extends React.Component {
  render() {
    const ImageText = require('../../../../../assets/images/dark-short.png');
    return (
      <div className="slds-size--4-of-12">
        <div className="yllw-text-colomn-with-image">
          <div className="yllw-text-colomn-with-image__heading">Contribute Now to I Support Yellow</div>
          <img className="yllw-text-colomn-with-image__picture slds-size--6-of-12 slds-m-left--small slds-float--right" src={ImageText}></img>
          <div className="yllw-text-colomn-with-image__text">
            Mega-donors are using Republican super PACs to swing races across the country in their favor, including
             smaller elections where big dollars make the biggest difference -- and where the most
              far-right policies, like restrictions on women's health care,
              get their start.<br><br><br>
            Big-dollar Republican donors are determined to remake our country in their
            ultra-conservative image, so they’re starting from the ground up, in order to make the biggest impact.</br></br>
            The GOP swept the midterm elections in 2014 with this strategy,
            and if Democrats don’t get started organizing now, Republicans are sure to do the same this year.</br>
            ActBlue's grassroots fundraising platform
            can make a huge difference on the state and local levels.
             We're working with 1,831 local and state candidates and committees this election cycle,
              many of whom wouldn't be able to fundraise online without our help.
          </div>
        </div>
      </div>
    );
  }
}
