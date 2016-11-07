import React from 'react';
export default class NavBarUnderHeroUnit extends React.Component {
  render() {
    const navBarLinks = this.props.navBarLinks;
    return (
      <div className="yllw-nav-bar-under-hero-unit">
        <div className="slds-grid slds-grid--align-center">
          {navBarLinks.map(link => <a href="#" className="yllw-nav-bar-under-hero-unit__link slds-col--padded" key={link}>{link}</a>)}
        </div>
        <hr />
      </div>
    );
  }
}
