import React, { Component } from 'react';
import Menu from './MenuComponent'
import {DISHES} from '../shared/dishes';
import {COMMENTS} from '../shared/comments';
import {LEADERS} from '../shared/leaders';
import {PROMOTIONS} from '../shared/promotions';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import Home from './HomeComponent'
import Contact from './ContactComponent'
import {Switch,Route,Redirect} from 'react-router-dom'

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
    }
  }

  // onDishSelect(dishId) {
  //   this.setState({
  //       selectedDish: dishId
  //   })
    // console.log(this.state.selectedDish)
// }


  render() {

    const HomePage = () => {
      return (
        <Home dish={this.state.dishes.filter((dish)=> dish.featured===true)[0] }
          promotion={this.state.promotions.filter((dish)=> dish.featured===true)[0] }
          leader={this.state.leaders.filter((dish)=> dish.featured===true)[0] }></Home>
      )
    }

    return (
      <div>
          <Header></Header>
          {/* <Menu dishes = {DISHES} 
            onClick={(dishId)=> this.onDishSelect(dishId)}></Menu>
          <div class="row"> */}
          {/* <DishDetail val={this.state.dishes.filter((dish)=> dish.id===this.state.selectedDish)[0]}></DishDetail> */}
          {/* </div> */}

          <Switch>
            <Route path="/home" component={HomePage}></Route>
            <Route exact path="/menu" component={()=> <Menu dishes={this.state.dishes}/>}></Route>
            <Route path="/contactus" component={Contact}></Route>
            <Redirect to="/home"></Redirect>

          </Switch>

          <Footer></Footer>
  
        </div>
    );

  }
  
}

export default Main;
