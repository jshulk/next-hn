import Link from 'next/link';
import React from 'react';
import StoriesList from './components/StoriesList.js';
import es6Promise from 'es6-promise';
import isoFetch from 'isomorphic-fetch';
es6Promise.polyfill();

export default class extends React.Component {
  static async getInitialProps ({req}) {
    const res = await fetch('http://hn.algolia.com/api/v1/search?page=1');
    const json = await res.json();
    return {stories: json.hits};
  }
  render () {
    console.log('number ofstories', this.props.stories.length);
    return (
      <div>
        <h1>Hello Next</h1>
        <StoriesList stories={this.props.stories} />
        <Link prefetch href="/about">
          <a>About</a>
        </Link>
        <style jsx>{`
          h1 {
            color: blue;
          }
        `}</style>
      </div>
    )
  }
}
