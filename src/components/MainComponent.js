import React, { Component } from 'react';
import Menu from './MenuComponent'
import {DISHES} from '../shared/dishes';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent'
import Footer from './FooterComponent'

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
          <Header></Header>
          <Menu dishes = {DISHES} 
            onClick={(dishId)=> this.onDishSelect(dishId)}></Menu>
          <div class="row">
          <DishDetail val={this.state.dishes.filter((dish)=> dish.id===this.state.selectedDish)[0]}></DishDetail>
          </div>

          <Footer></Footer>
  
      </div>
    );

  }
  
}

export default Main;
