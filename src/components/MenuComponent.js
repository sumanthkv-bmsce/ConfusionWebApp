import React from 'react';
import { Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle,Breadcrumb,BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom'
import { Loading } from './loadingComponent'

function RenderMenuItem({dish}) {

    return (
        
        <Card>
                  <Link to={`/menu/${dish.id}`}>      
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
                       
                    <CardImgOverlay body className="ml-5">
                        <CardTitle heading>{dish.name}</CardTitle>
                    </CardImgOverlay>
                    </Link>
        </Card>

    );

}

const Menu = (props) => {


    const menu = props.dishes.dishes.map((dish)=> {
        return (
            <div key={dish.id} className="col-12 col-md-6 mt-1">
                <RenderMenuItem dish={dish}></RenderMenuItem>
            </div>
        )
    });

    if(props.dishes.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading></Loading>
                </div>
            </div>
        )
    }
    else if(props.dishes.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.dishes.errMess}</h4>
                </div>
            </div>
        )
    }
    else 
        return (
            
            <div className="container">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>

                    </Breadcrumb>
                    
                    <div className="col-12">
                        {menu}
                    </div>
                </div>
                
            </div>

        );


}

        


export default Menu