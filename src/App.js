import React, { Component } from 'react';

import './public';
import Home from './components/home';
import ToDo from './components/todo';


class App extends Component {
  render() {
    return (
      <div>
        <Home></Home>
        <ToDo></ToDo>
        
      </div>
    );
  }
}
export default App;


