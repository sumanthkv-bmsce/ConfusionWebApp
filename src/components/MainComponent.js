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
import About from './AboutComponent'
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


  render() {

    const HomePage = () => {
      return (
        <Home dish={this.state.dishes.filter((dish)=> dish.featured===true)[0] }
          promotion={this.state.promotions.filter((dish)=> dish.featured===true)[0] }
          leader={this.state.leaders.filter((dish)=> dish.featured===true)[0] }></Home>
      )
    }

    const DishWithID = ({match}) => {
      return (
        <DishDetail val={this.state.dishes.filter((dish)=> dish.id===parseInt(match.params.dishId))[0]} 
          comments = {this.state.comments.filter((comment)=> comment.dishId===parseInt(match.params.dishId))}

        ></DishDetail>
        
      )

    }

    const AboutUs = ()=> {
      return (
        <About leaders = {this.state.leaders}></About>
      )
    }





    return (
      <div>
          <Header></Header>
          

          <Switch>
            <Route path="/home" component={HomePage}></Route>
            <Route exact path="/menu" component={()=> <Menu dishes={this.state.dishes}/>}></Route>
            <Route exact path="/contactus" component={Contact}></Route>
            <Route path="/menu/:dishId" component={DishWithID}></Route>
            <Route path="/aboutus" component={AboutUs}></Route>
            <Redirect to="/home"></Redirect>

          </Switch>

          <Footer></Footer>
  
        </div>
    );

  }
  
}

export default Main;
