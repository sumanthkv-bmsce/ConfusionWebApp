import React,{ Component } from 'react';
import { Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle } from 'reactstrap';
import DishDetail from './DishdetailComponent';

class MenuComponent extends Component  {

    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        }

        this.onDishSelect = this.onDishSelect.bind(this)
        this.helpMe = this.helpMe.bind(this)
    }

    onDishSelect(dish) {
        this.setState({
            selectedDish: dish
        })
        // console.log(this.state.selectedDish)
    }

    helpMe() {
         return this.state.selectedDish;

    }

    renderDish(dish) {
        if(dish!=null) {
            return (
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>

                    <CardBody>
                    <CardTitle>
                        {dish.name}
                    </CardTitle>
                    <CardText>
                        {dish.description}
                    </CardText>
                    </CardBody>
                </Card>
            )
        }
        else {
            return (
                <div></div>
            )
        }
    }

    render() {

        const menu = this.props.dishes.map((dish)=> {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={()=> this.onDishSelect(dish)}>
                        
                        <CardImg width="100%" src={dish.image} alt={dish.name}/>
                       
                    <CardImgOverlay body className="ml-5">
                        <CardTitle heading>{dish.name}</CardTitle>
                    </CardImgOverlay>
                    </Card>
                </div>
            )
        });

        return (
            
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                    
                    {/* <h1>{this.helpMe()}</h1> */}
                    <DishDetail val={this.helpMe()}></DishDetail>
                </div>
            </div>

        );
    }
}

export default MenuComponent