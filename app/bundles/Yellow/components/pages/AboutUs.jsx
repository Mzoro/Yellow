import React from 'react';
import HeroUnitLight from '../../components/hero-units/HeroUnitLight';
import NavBarUnderHeroUnit from '../../components/nav-bars/NavBarUnderHeroUnit';
import AboutUsTextArticle from '../../components/texts/AboutUsTextArticle';
import AboutUsPhotoGallery from '../../components/info-containers/AboutUsPhotoGallery';
import CallToAction from '../../components/hero-units/CallToAction';

export default class AboutUs extends React.Component {
  render() {
    const classNameHero = 'yllw-hero-unit-light--about-us';
    const headingHero = 'About Us';
    const infoHero = 'meet yellow';
    const navBarLinks = ['introduction', 'meet the team'];
    return (
      <div className="container">
        <HeroUnitLight className={classNameHero} heading={headingHero} info={infoHero} />
        <NavBarUnderHeroUnit navBarLinks={navBarLinks} />
        <AboutUsTextArticle />
        <AboutUsPhotoGallery />
        <CallToAction
          className = "yllw-call-to-action"
          classNameBigText = "yllw-call-to-action__text"
          bigText = "Interested in joining the team?"
          mediumText = "We’re always looking for smart, passionate self-starters"
          buttonText = "Come work with us!"
        />
      </div>
    );
  }
}
