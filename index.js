import React, { Component } from 'react';
import { render } from 'react-dom';
import User from './User';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }


  render() {
    return (
      <div>
        <User  />
       
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
