import React from 'react';
import HeaderLogo from '../../components/headers/HeaderLogo';
const LayoutSupportUs = ({ children }) => (
  <div className="container">
    <HeaderLogo />
      {children}
  </div>
);

LayoutSupportUs.propTypes = {
  children: React.PropTypes.object,
};

export default LayoutSupportUs;
