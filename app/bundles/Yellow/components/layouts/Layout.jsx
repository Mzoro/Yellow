
import React from 'react';
import Header from '../../components/headers/Header';
import Footer from '../../components/footers/Footer';

const Layout = ({ children }) => (
  <div className="container">
    <Header />
      {children}
    <Footer />
  </div>
);

Layout.propTypes = {
  children: React.PropTypes.object,
};

export default Layout;
