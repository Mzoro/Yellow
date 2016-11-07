import React from 'react';
import ExpressHeroUnit from '../../components/hero-units/ExpressHeroUnit';
import ExpressHeroUnitTopImage from '../../components/hero-units/ExpressHeroUnitTopImage';
import ExpressHeroUnitWithIcons from '../../components/hero-units/ExpressHeroUnitWithIcons';
import ExpressHeroUnitSideGif from '../../components/hero-units/ExpressHeroUnitSideGif';
import ExpressHeroUnitWithPicture from '../../components/hero-units/ExpressHeroUnitWithPicture';
import ExpressHeroUnitThreeColumns from '../../components/hero-units/ExpressHeroUnitThreeColumns';
import CallToAction from '../../components/hero-units/CallToAction';
export default class Express extends React.Component {
  render() {
    return (
      <div className="container">
        <ExpressHeroUnit />
        <ExpressHeroUnitTopImage />
        <ExpressHeroUnitWithIcons />
        <ExpressHeroUnitSideGif />
        <ExpressHeroUnitWithPicture />
        <ExpressHeroUnitThreeColumns />
        <div className="slds-grid">
          <div className="slds-size--1-of-2">
            <CallToAction
              className = "yllw-call-to-action"
              classNameBigText = "yllw-call-to-action__text"
              bigText = "Want to use Express Lane?"
              buttonText = "Contact us here"
            />
          </div>
          <div className="slds-size--1-of-2">
            <CallToAction
              className = "yllw-call-to-action"
              classNameBigText = "yllw-call-to-action__text"
              bigText = "Donors"
              buttonText = "Sign up for Express Account"
            />
          </div>
        </div>
      </div>
    );
  }
}
