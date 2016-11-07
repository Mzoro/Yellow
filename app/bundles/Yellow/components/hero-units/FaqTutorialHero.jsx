import React from 'react';
import { Link } from 'react-router';

export default class FaqTutorialHero extends React.Component {
  render() {
    return (
        <div className={this.props.className}>
          <div className="slds-container--center slds-container--medium">
            <div className="slds-grid slds-wrap sdls-grid--align-center">
                <div className="slds-size--1-of-1">
                  <Link to="/tutorial" className="yllw-faq-tutorial-hero__heading">Tutorial</Link>
                </div>
                <div className="slds-size--1-of-1">
                  <Link to="/tutorial" className="yllw-faq-tutorial-hero__text">HOW TO DO EVERYTHING ON YELLOW</Link>
                </div>
            </div>
          </div>
        </div>
      );
  }
}
