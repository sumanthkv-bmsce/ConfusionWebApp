import React, { Component } from 'react';
import { Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle,ListGroup,ListGroupItem } from 'reactstrap';

class DishDetail extends Component {
 
    constructor(props) {
        super(props)
    }

    renderDish(dish) {

        const rr1 = 
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

        return rr1;
    }

    renderComments(arrayComm) {

       
        const commen = arrayComm.map((ele)=> {
           
            var monthNames=["Jan","Feb","Mar","Apr","Jun","Jul","Aug","Sept","Oct","Nov","Dec"]
            var mon = monthNames[(new Date(ele.date)).getMonth()-1]
            var dat = (new Date(ele.date)).getDate()+1
            var yer = (new Date(ele.date)).getFullYear()
            
            return (
                <ListGroup unstyled>
                    <ListGroupItem key={ele.id}>
                    {ele.comment}
                </ListGroupItem>

                <ListGroupItem key={ele.id}>
                   -- {ele.author} , {mon} {dat},{yer}
                </ListGroupItem>
                </ListGroup>
            )
        })

        return commen;
        
        
    }

    render() {
        
        const dish = this.props.val
        if(dish!=null) {
            
            const comments = this.renderDish(dish)
            
            const mergedThing = this.renderComments(dish["comments"])
            
            return (
                <div className="row">
    
                    <div className="col-12 col-md-5 m-1">
                        {comments}
                    </div>
                    
                    <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                        {mergedThing}
                    </div>
    
                </div>
            )
            
        }
        else {
            return (
                <div></div>
            )
        }
        

    }

}

export default DishDetail;