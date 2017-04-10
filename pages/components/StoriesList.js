import React from 'react';
import Story from './Story';
export default class extends React.Component {
  render () {
    const {stories} = this.props;
    const storiesList = stories.map(function(story, index){
      return <Story data={story} key={index}></Story>;
    });
    return <ul>{storiesList}</ul>;
  }
}
