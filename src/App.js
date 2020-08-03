import React from 'react';
import { Navbar,NavbarBrand } from 'reactstrap';
import logo from './logo.svg';
import Menu from './components/MenuComponent'
import './App.css';

function App() {
  return (
    <div>
        <Navbar dark color="primary">

          <div className="container">
              <NavbarBrand href="/">Ristrante confusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu></Menu>

    </div>
  );
}

export default App;
