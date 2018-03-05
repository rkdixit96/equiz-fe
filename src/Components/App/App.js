import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header text="Quizzy" />
        Hello
      </div>
    );
  }
}

export default App;
