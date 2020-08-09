import React, { Component } from 'react';
import Menu from './MenuComponent'
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import Home from './HomeComponent'
import Contact from './ContactComponent'
import About from './AboutComponent'
import {Switch,Route,Redirect,withRouter} from 'react-router-dom'
import { connect } from 'react-redux'



const mapStateToProps = state => {
    return {
      dishes: state.dishes,
      comments: state.comments,
      promotions: state.promotions,
      leaders: state.leaders 
    }
}

class Main extends Component {

  constructor(props) {
    super(props);

  }



  render() {

    const HomePage = () => {
      return (
        <Home dish={this.props.dishes.filter((dish)=> dish.featured===true)[0] }
          promotion={this.props.promotions.filter((dish)=> dish.featured===true)[0] }
          leader={this.props.leaders.filter((dish)=> dish.featured===true)[0] }></Home>
      )
    }

    const DishWithID = ({match}) => {
      return (
        <DishDetail val={this.props.dishes.filter((dish)=> dish.id===parseInt(match.params.dishId))[0]} 
          comments = {this.props.comments.filter((comment)=> comment.dishId===parseInt(match.params.dishId))}

        ></DishDetail>
        
      )

    }

    const AboutUs = ()=> {
      return (
        <About leaders = {this.props.leaders}></About>
      )
    }





    return (
      <div>
          <Header></Header>
          

          <Switch>
            <Route path="/home" component={HomePage}></Route>
            <Route exact path="/menu" component={()=> <Menu dishes={this.props.dishes}/>}></Route>
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

export default withRouter(connect(mapStateToProps)(Main));
