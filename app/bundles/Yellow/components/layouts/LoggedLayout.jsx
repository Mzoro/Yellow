import React from 'react';
import LoggedHeader from '../../components/headers/LoggedHeader';

const Layout = ({ children }) => (
  <div className="container">
    <LoggedHeader />
      {children}
  </div>
);

Layout.propTypes = {
  children: React.PropTypes.object,
};

export default Layout;
