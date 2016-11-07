import React from 'react';

export default class BestOfWeek extends React.Component {
  constructor() {
    super();
    this.state = { text1: '' };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({ text1: event.target.value });
  }

  render() {
    return (
      <div className="slds-container--small">
        <div className="slds-grid slds-wrap slds-grid--align-center">
          <div className="slds-size--11-of-12">
            <div className="yllw-best-of-week">
              <div className="slds-grid slds-wrap ">
                <div className="slds-size--1-of-4">
                  <img className="yllw-best-of-week__image" src={this.props.image} />
                </div>
                <div className="slds-size--2-of-4">
                  <div className="yllw-best-of-week__link">
                    <a href="#">{this.props.candidate}</a>
                  </div>
                  <div className="yllw-best-of-week__text--bold">{this.props.position}</div>
                </div>
                <div className="slds-size--1-of-4">
                  $<input className="yllw-best-of-week__input" type="text" onChange={this.handleClick}/>
                  <button className="yllw-best-of-week__button" disabled={this.state.text1.length === 0}>Contribute</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
