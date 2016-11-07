import React from 'react';
import HomepageHeroUnit from '../../components/hero-units/HomepageHeroUnit';
import HomepageHeroUnitSideImagePrimary
from '../../components/hero-units/HomepageHeroUnitSideImagePrimary';
import HomepageFullscreenIconsInfo from '../../components/info-containers/HomepageFullscreenIconsInfo';
import HomepageHeroUnitSideImageSecondary
from '../../components/hero-units/HomepageHeroUnitSideImageSecondary';
import HomepageOrganizations from '../../components/info-containers/HomepageOrganizations';
import HomepageHeroUnitFeedback from '../../components/hero-units/HomepageHeroUnitFeedback';
import CallToAction from '../../components/hero-units/CallToAction';

export default class Homepage extends React.Component {
render() {
  return (
    <div className="container">
      <HomepageHeroUnit />
      <HomepageHeroUnitSideImagePrimary />
      <HomepageFullscreenIconsInfo />
      <HomepageHeroUnitSideImageSecondary />
      <HomepageOrganizations />
      <HomepageHeroUnitFeedback />
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
