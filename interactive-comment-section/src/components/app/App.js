import React, { Component } from 'react';
import CommentCard from '../comment-card/comment-card';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <main className='container'>
          <CommentCard />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
