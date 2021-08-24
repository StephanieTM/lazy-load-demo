import React from 'react';
import Article from '../components/article';
import Comments from '../components/comments';
import Gallery from '../components/gallery';
import Header from '../components/header';

export default () => (
  <>
    <h1>Blog</h1>

    <Header />
    <Gallery />
    <Article />
    <Comments />
  </>
);
