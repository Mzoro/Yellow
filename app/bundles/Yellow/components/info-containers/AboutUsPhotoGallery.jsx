import React from 'react';
export default class AboutUsPhotoGallery extends React.Component {
  render() {
    const nate = require('../../../../../assets/images/nate.jpeg');
    const nichole = require('../../../../../assets/images/nichole.jpeg');
    const matt = require('../../../../../assets/images/matt.jpeg');
    const decklin = require('../../../../../assets/images/decklin.jpeg');
    const longPic = require('../../../../../assets/images/long_pic.jpg');

    return (
      <div className="yllw-photo-galery">
        <div className="slds-container--center slds-size--1-of-1">
          <div className="yllw-photo-galery__heading--small">Yellow</div>
        </div>
        <div className="slds-container--center slds-size--11-of-12">
          <div className="slds-grid slds-wrap slds-text-align--center">
            <div className="slds-col slds-size--3-of-12">
              <img className="image yllw-photo-galery__photo" src={nate} />
              <div className="yllw-photo-galery__text--blue">Julia Rosen</div>
              <div className="yllw-photo-galery__text--upcase">Outreach Assosiate</div>
            </div>
            <div className="slds-col slds-size--3-of-12">
              <img className="image yllw-photo-galery__photo" src={nichole} />
              <div className="yllw-photo-galery__text--blue">Chaya Rusk</div>
              <div className="yllw-photo-galery__text--upcase">Customer Relations Assosiate</div>
            </div>
            <div className="slds-col slds-size--3-of-12">
              <img className="image yllw-photo-galery__photo" src={matt} />
              <div className="yllw-photo-galery__text--blue">Ben Sharton</div>
              <div className="yllw-photo-galery__text--upcase">Marketing Manager</div>
            </div>
            <div className="slds-col slds-size--3-of-12">
              <img className="image yllw-photo-galery__photo" src={decklin} />
              <div className="yllw-photo-galery__text--blue">Alyssa Twomey</div>
              <div className="yllw-photo-galery__text--upcase">Senior Political Account Manager </div>
            </div>
          </div>
        </div>
        <img className="image yllw-photo-galery__picture" src={longPic} />
      </div>
    );
  }
}
