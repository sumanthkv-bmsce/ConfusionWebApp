import React, { Component } from 'react';
import { Navbar,NavbarBrand } from 'reactstrap';
import logo from './logo.svg';
import Menu from './components/MenuComponent'
import './App.css';
import {DISHES} from './shared/dishes';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES
    }
  }

  render() {
    return (
      <div>
          <Navbar dark color="primary">
  
            <div className="container">
                <NavbarBrand href="/">Ristrante confusion</NavbarBrand>
            </div>
          </Navbar>
          <Menu dishes = {DISHES}></Menu>
  
      </div>
    );

  }
  
}

export default App;
