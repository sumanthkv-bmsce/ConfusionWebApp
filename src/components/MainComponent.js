import React, { Component } from 'react';
import { Navbar,NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent'
import {DISHES} from '../shared/dishes';
import DishDetail from './DishdetailComponent';

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish: null
    }
  }

  onDishSelect(dishId) {
    this.setState({
        selectedDish: dishId
    })
    // console.log(this.state.selectedDish)
}


  render() {
    return (
      <div>
          <Navbar dark color="primary">
  
            <div className="container">
                <NavbarBrand href="/">Ristrante confusion</NavbarBrand>
            </div>
          </Navbar>
          <Menu dishes = {DISHES} 
            onClick={(dishId)=> this.onDishSelect(dishId)}></Menu>
          <div class="row">
          <DishDetail val={this.state.dishes.filter((dish)=> dish.id===this.state.selectedDish)[0]}></DishDetail>
          </div>
  
      </div>
    );

  }
  
}

export default Main;
