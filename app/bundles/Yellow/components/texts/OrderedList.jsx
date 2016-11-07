import React from 'react';
export default class OrderedList extends React.Component {
  render() {
    return (
      <div className="yllw-ordered-list">
        <hr/>
        <span className="yllw-ordered-list__heading"> Contribution Rules</span>
        <ol className="yllw-ordered-list__items">
          <li className="yllw-ordered-list__item">
            This contribution is made from my own funds, and funds are not being provided to me by another person or entity for the purpose of making this contribution.
          </li>
          <li className="yllw-ordered-list__item">
            I am at least eighteen years old.
          </li>
          <li className="yllw-ordered-list__item">
            I am a U.S. citizen or lawfully admitted permanent resident (i.e., green card holder).
          </li>
        </ol>
      </div>
    );
  }
}
