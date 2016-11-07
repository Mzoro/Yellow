import React from 'react';
export default class ContributeInfo extends React.Component {
  render() {
    return (
      <div className="yllw-contribute-info">
        <div className="slds-grid slds-wrap">
          <div className="slds-size--2-of-12"><p className="yllw-contribute-info__text"> President <br/> 2016 </p></div>
          <img className="slds-size--1-of-12 yllw-contribute-info__image" src={this.props.ContributeImage} />
          <div className="slds-size--2-of-12 slds-m-top--small"><a className="yllw-contribute-info__link" href="">{this.props.children}</a></div>
          <div className="slds-size--7-of-12 slds-m-vertical--small">
            <button className="yllw-contribute-info__button-green">Contribute</button><br></br><br></br>
            <button className="yllw-contribute-info__button-orange">Create Page</button>
          </div>
        </div>
      </div>
    );
  }
}
