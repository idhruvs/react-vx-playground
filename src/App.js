import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  ChartComponent from './components/ChartComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
       <ChartComponent></ChartComponent>
      </div>
    );
  }
}

export default App;
