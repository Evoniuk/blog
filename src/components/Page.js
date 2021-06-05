import React from 'react';
import Header from './Header'
import Content from './Content'

export default class Page extends React.Component {
  constructor() {
    super();

    this.state = {
      currentPage: 'home',
      currentPost: null,
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(requestedPage, currentPost) {
    this.setState({
      currentPage: requestedPage,
      currentPost: currentPost,
    });
  }

  render() {
    return (
      <main>
        <Header handleClick={this.handleClick}/>
        <Content handleClick={this.handleClick} state={this.state}/>
      </main>
    );
  }
}
