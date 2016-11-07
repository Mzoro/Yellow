import React from 'react';
import HeaderBlog from '../../components/headers/HeaderBlog';

const LayoutBlog = ({ children }) => (
  <div className="container">
    <HeaderBlog />
      {children}
  </div>
);

LayoutBlog.propTypes = {
  children: React.PropTypes.object,
};

export default LayoutBlog;
