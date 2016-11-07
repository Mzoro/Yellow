import React from 'react';
import FaqTutorialHero from '../../components/hero-units/FaqTutorialHero';
import TutorialNavList from '../../components/nav-bars/TutorialNavList';
import TutorialInformation from '../../components/texts/TutorialInformation';

export default class Tutorial extends React.Component {
  render() {
    return (
    <div className="container">
      <FaqTutorialHero className="yllw-faq-tutorial-hero--blue"/>
      <TutorialNavList />
      <TutorialInformation />
    </div>
    );
  }
}
