import React from 'react';
import WhiteTagline from '../../components/hero-units/WhiteTagline';
import NewsFeed from '../../components/texts/NewsFeed';
import SearchSidebar from '../../components/nav-bars/SearchSidebar';

export default class Blog extends React.Component {
render() {
  const textBlog = 'More data, more money.';
  return (
    <div className="container">
      <WhiteTagline text = {textBlog} />
      <div className="slds-grid">
        <NewsFeed />
        <SearchSidebar />
      </div>
    </div>
  );
}
}
