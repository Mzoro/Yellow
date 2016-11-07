import React from 'react';
import HeaderFaq from '../../components/headers/HeaderFaq';
import FooterFaq from '../../components/footers/FooterFaq';

const LayoutFaq = ({ children }) => (
  <div className="container">
    <HeaderFaq />
        {children}
    <FooterFaq />
  </div>
);

LayoutFaq.propTypes = {
  children: React.PropTypes.object,
};

export default LayoutFaq;
