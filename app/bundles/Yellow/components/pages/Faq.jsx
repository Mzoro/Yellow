import React from 'react';

import HeroBlueFaq from '../../components/hero-units/HeroBlueFaq';
import FaqTutorialHero from '../../components/hero-units/FaqTutorialHero';
import HeroOrangeFaq from '../../components/hero-units/HeroOrangeFaq';

export default class Faq extends React.Component {
render() {
  return (
  <div className="container">
    <FaqTutorialHero className="yllw-faq-tutorial-hero--green"/>
    <HeroBlueFaq />
    <HeroOrangeFaq />
  </div>
  );
}
}
