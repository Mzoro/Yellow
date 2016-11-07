import React from 'react';
import HeroUnitLight from '../../components/hero-units/HeroUnitLight';
import NavBarUnderHeroUnit from '../../components/nav-bars/NavBarUnderHeroUnit';
import JobsArticleWorkWithUs from '../../components/texts/JobsArticleWorkWithUs';
import JobsArticleAvailablePositions from '../../components/texts/JobsArticleAvailablePositions';
import CallToAction from '../../components/hero-units/CallToAction';

export default class AboutUs extends React.Component {
  render() {
    const classNameHero = 'yllw-hero-unit-light--jobs';
    const headingHero = 'Jobs';
    const infoHero = 'join the team';
    const navBarLinks = ['about working with us', 'available positions'];
    return (
      <div className="container">
        <HeroUnitLight className = {classNameHero} heading = {headingHero} info = {infoHero} />
        <NavBarUnderHeroUnit navBarLinks = {navBarLinks} />
        <JobsArticleWorkWithUs />
        <JobsArticleAvailablePositions />
        <CallToAction
          className = "yllw-call-to-action"
          classNameBigText = "yllw-call-to-action__text"
          bigText = "Get to know more about us"
          buttonText = "Meet Yellow"
        />
      </div>
    );
  }
}
