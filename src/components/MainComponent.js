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
import { addComment ,fetchDishes} from '../redux/ActionCreators'
import { actions } from 'react-redux-form'

const mapStateToProps = state => {
    return {
      dishes: state.dishes,
      comments: state.comments,
      promotions: state.promotions,
      leaders: state.leaders 
    }
}

const mapDispatchToProps = (dispatch)=> ({
  addComment: (dishId,rating,author,comment) => dispatch(addComment(dishId,rating,author,comment)),
  fetchDishes: ()=> {dispatch(fetchDishes())},
  resetFeedBackForm: ()=> {dispatch(actions.reset('feedback'))}
})


class Main extends Component {

  constructor(props) {
    super(props);

  }


  componentDidMount() {
    this.props.fetchDishes();
  }



  render() {

    const HomePage = () => {
      return (
        <Home dish={this.props.dishes.dishes.filter((dish)=> dish.featured===true)[0] }
          dishesLoading = {this.props.dishes.isLoading}
          dishesErrMess = {this.props.dishes.errMess}
          promotion={this.props.promotions.filter((dish)=> dish.featured===true)[0] }
          leader={this.props.leaders.filter((dish)=> dish.featured===true)[0] }></Home>
      )
    }

    const DishWithID = ({match}) => {
      return (
        <DishDetail val={this.props.dishes.dishes.filter((dish)=> dish.id===parseInt(match.params.dishId))[0]}
          isLoading = {this.props.dishes.isLoading}
          errMess = {this.props.dishes.errMess} 
          comments = {this.props.comments.filter((comment)=> comment.dishId===parseInt(match.params.dishId))}
          addComment = {this.props.addComment}
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
            <Route exact path="/contactus" component={()=> <Contact resetFeedBackForm = {this.props.resetFeedBackForm}></Contact>}></Route>
            <Route path="/menu/:dishId" component={DishWithID}></Route>
            <Route path="/aboutus" component={AboutUs}></Route>
            <Redirect to="/home"></Redirect>

          </Switch>

          <Footer></Footer>
  
        </div>
    );

  }
  
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
