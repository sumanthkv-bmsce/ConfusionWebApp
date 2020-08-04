import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom'
import Main from './components/MainComponent'

import './App.css';

class App extends Component {

  render() {
    return (
      <div>
          
          <BrowserRouter>
          <Main></Main>
          </BrowserRouter>
  
      </div>
    );

  }
  
}

export default App;
