import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Body from '../Body/Body';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Quizzy" />
        <Body />

      </div>
    );
  }
}

export default App;
