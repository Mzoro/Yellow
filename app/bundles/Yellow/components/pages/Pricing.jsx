import React from 'react';
import HeroUnitLight from '../../components/hero-units/HeroUnitLight';
import NavBarUnderHeroUnit from '../../components/nav-bars/NavBarUnderHeroUnit';
import PricingTwoColumnsText from '../../components/texts/PricingTwoColumnsText';
import CallToAction from '../../components/hero-units/CallToAction';
import PricingHeroUnitGrey from '../../components/hero-units/PricingHeroUnitGrey';
import PricingHeroUnitSide from '../../components/hero-units/PricingHeroUnitSide';
import PricingThreeColumnsInfo from '../../components/info-containers/PricingThreeColumnsInfo';
import PricingGettingMoneyInfo from '../../components/info-containers/PricingGettingMoneyInfo';
import PricingListsOfStates from '../../components/info-containers/PricingListsOfStates';

export default class Pricing extends React.Component {
  render() {
    const classNameHero = 'yllw-hero-unit-light--pricing';
    const headingHero = 'Pricing';
    const infoHero = 'no surprises';
    const buttonHero = (<button className="yllw-hero-unit-light__button">Get Started</button>);
    const navBarLinks = ['get started', 'features', 'we handle the details', 'getting your money', 'who can use yellow?'];
    return (
      <div className="container">
        <HeroUnitLight className = {classNameHero} heading = {headingHero} info = {infoHero} button = {buttonHero} />
        <NavBarUnderHeroUnit navBarLinks={navBarLinks} />
        <PricingTwoColumnsText />
        <CallToAction
          className = "yllw-call-to-action--white"
          classNameBigText = "yllw-call-to-action__text--black"
          hr = {<div className="slds-size--1-of-6"><hr /></div>}
          bigText = "Begin fundraising with Yellow"
          buttonText = "Get Started"
        />
        <PricingHeroUnitGrey />
        <PricingHeroUnitSide />
        <PricingThreeColumnsInfo />
        <CallToAction
          className = "yllw-call-to-action--white"
          classNameBigText = "yllw-call-to-action__text--black"
          hr = {<div className="slds-size--1-of-6"><hr /></div>}
          bigText = "Begin fundraising with Yellow"
          buttonText = "Get Started"
        />
        <PricingGettingMoneyInfo />
        <CallToAction
          className = "yllw-call-to-action--grey"
          classNameBigText = "yllw-call-to-action__text--black"
          hr = {<div className="slds-size--1-of-6"><hr /></div>}
          bigText = "Begin fundraising with Yellow"
          buttonText = "Get Started"
        />
        <PricingListsOfStates />
        <CallToAction
          className = "yllw-call-to-action"
          classNameBigText = "yllw-call-to-action__text"
          bigText = "Higher conversion rates await"
          buttonText = "Get Started"
        />
      </div>
    );
  }
}
