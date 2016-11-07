import React from 'react';
import FeaturesHeroUnit from '../../components/hero-units/FeaturesHeroUnit';
import FeaturesIconsBar from '../../components/nav-bars/FeaturesIconsBar';
import FeaturesIconsWithDescription from '../../components/info-containers/FeaturesIconsWithDescription';
import CallToAction from '../../components/hero-units/CallToAction';

export default class Features extends React.Component {
  render() {
    return (
      <div className="container">
        <FeaturesHeroUnit />
        <FeaturesIconsBar />
        <FeaturesIconsWithDescription />
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
