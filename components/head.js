import React from 'react';
import NextHead from 'next/head';
// eslint-disable-next-line import/no-extraneous-dependencies
import { string } from 'prop-types';

const defaultDescription = '';
const defaultOGURL = '';
const defaultOGImage = '';

const Head = props => (
  <NextHead>
    <meta charSet="UTF-8" />
    { /* eslint-disable-next-line react/destructuring-assignment */ }
    <title>{ props.title || '' }</title>
    { /* eslint-disable-next-line react/destructuring-assignment */ }
    <meta content={props.description || defaultDescription} name="description" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" sizes="192x192" href="/static/touch-icon.png" />
    <link rel="apple-touch-icon" href="/static/touch-icon.png" />
    <link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" />
    <link rel="icon" href="/static/favicon.ico" />
    { /* eslint-disable-next-line react/destructuring-assignment */ }
    <meta property="og:url" content={props.url || defaultOGURL} />
    { /* eslint-disable-next-line react/destructuring-assignment */ }
    <meta property="og:title" content={props.title || ''} />
    { /* eslint-disable-next-line react/destructuring-assignment */ }
    <meta property="og:description" content={props.description || defaultDescription} />
    { /* eslint-disable-next-line react/destructuring-assignment */ }
    <meta name="twitter:site" content={props.url || defaultOGURL} />
    <meta name="twitter:card" content="summary_large_image" />
    { /* eslint-disable-next-line react/destructuring-assignment */ }
    <meta name="twitter:image" content={props.ogImage || defaultOGImage} />
    { /* eslint-disable-next-line react/destructuring-assignment */ }
    <meta property="og:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
  </NextHead>
);

Head.defaultProps = {
  title: '', 
  description: '',
  url: '',
  ogImage: '',
};

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string,
};

export default Head;
