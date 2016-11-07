import React from 'react';
import { Link } from 'react-router';

export default class MyContributionsSocialList extends React.Component {
  render() {
    return (
      <div className="slds-size--1-of-4">
        <ul className="yllw-my-contributions-social-list">
          <li className="yllw-my-contributions-social-list__item">
            <button href="#">
              <svg aria-hidden="true" className="yllw-my-contributions-social-list__image">
                <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#announcement"></use>
              </svg>
            </button>
            <Link to="">Follow us on Twitter</Link>
          </li>
          <li className="yllw-my-contributions-social-list__item">
            <button href="#">
              <svg aria-hidden="true" className="yllw-my-contributions-social-list__image">
                <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#warning"></use>
              </svg>
            </button>
            <Link to="">Like us on Facebook</Link>
          </li>
          <li className="yllw-my-contributions-social-list__item">
            <button href="#">
              <Link to="/blog">
                <svg aria-hidden="true" className="yllw-my-contributions-social-list__image">
                  <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#chat"></use>
                </svg>
              </Link>
            </button>
            <Link to="/blog">Read the Yellow Blog</Link>
          </li>
          <li className="yllw-my-contributions-social-list__item">
            <button href="#">
              <svg aria-hidden="true" className="yllw-my-contributions-social-list__image">
                <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#bold"></use>
              </svg>
            </button>
            <Link to="">Get ActBlue Badges</Link>
          </li>
        </ul>
      </div>
    );
  }
}
