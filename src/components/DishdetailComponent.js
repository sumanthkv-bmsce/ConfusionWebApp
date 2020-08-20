import React,{Component} from 'react';
import { Card,Col,Row,Label, CardImg,CardImgOverlay,Modal,ModalBody,ModalHeader,CardText,CardBody,CardTitle,ListGroup,ListGroupItem,Breadcrumb,BreadcrumbItem,Button } from 'reactstrap';
import '../App.css'
import {LocalForm,Control,Errors,Option} from 'react-redux-form'
import { Link } from 'react-router-dom'
import { Loading } from './loadingComponent'
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));


class DishDetail extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isModalOpen: false
        }

        this.RenderComments = this.RenderComments.bind(this)
        this.RenderDish = this.RenderDish.bind(this)
        this.toggleModal = this.toggleModal.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    RenderDish(dish) {
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

    handleSubmit(values) {
        var val = values
        this.props.addComment(this.props.val.id,val.rating,val.name,val.comment)
    }


    RenderComments(arrayComm) {

       
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

        if(this.props.isLoading) {
            return (
                <div className="container">
                    <div className="row">
                        <Loading></Loading>
                    </div>
                </div>
            )
        }
        else if(this.props.errMess) {
            return (
                <div className="container">
                    <div className="row">
                        <h4>{this.props.errMess}</h4>
                    </div>
                </div>
            )
        }
        else {
            const dish = this.props.val
            if(dish!=null) {
                
                const comments = this.RenderDish(dish)
                
                const mergedThing = this.RenderComments(this.props.comments)
                return (
                    <div className="container">
                        
                            <Breadcrumb>
                                <BreadcrumbItem>< Link to="/home">Home</ Link></BreadcrumbItem>
                                <BreadcrumbItem>< Link to="/menu"> Menu </ Link></BreadcrumbItem>
                                <BreadcrumbItem active> {dish.name} </BreadcrumbItem>
                            </Breadcrumb>
        
                        <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            {comments}
                        </div>
                        
                        <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                            {mergedThing}
                            <Button onClick={this.toggleModal}><i className="fa fa-edit fa-lg">Submit Comment</i></Button>

                        </div>

                        
                        </div>
                    
                        
                        
        
                    

                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                        <ModalBody>
                        <LocalForm onSubmit={(values)=>this.handleSubmit(values)}>

                            
                                
                                
                                <Row>
                                    <Label htmlFor="rating" md={2}>Rating</Label><br></br>
                                </Row>
                                <Row>
                                    <Col md={12}>
                                    <Control.select model='.rating' type="select"
                                        id="rating" name="rating" className="form-control"
                                        
                                        >
                                        <option value="1" selected>1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>

                                        
                                    </Control.select>
                                    
                                    
                                    </Col>
                                </Row>

                                <Row>
                                    <Label htmlFor="name" md={12}>Your Name</Label><br></br>
                                </Row>
                                <Row className="form-group">
                                    <Col md={12}>
                                    <Control.text model='.name' type="text" 
                                        id="name" className="form-control" name="author" 
                                        validators = {{
                                            required,minLength: minLength(3),maxLength: maxLength(15)
                                        }}
                                        >
                                        
                                        
                                    </Control.text>
                                    <Errors className="text-danger"
                                        show="touched" model=".name"
                                        messages= {{
                                            required: "Required ",
                                            minLength: "Must be greater than 2 characters ",
                                            maxLength: "Must be less than or equal to 15 characters"
                                        }}
                                    ></Errors>
                                    
                                    </Col>
                                </Row>
                                <Row>
                                    <Label htmlFor="comment" md={12}>Comment</Label><br></br>
                                </Row>
                                <Row className="form-group">
                                    <Col md={12}>
                                    <Control.textarea model='.comment' type="text" rows='6' className="form-control"
                                        id="name" name="message">
                                        
                                        
                                    </Control.textarea>
                                    
                                    </Col>
                                </Row>

                                <Row className="form-group">
                                    <Col md={{size:3}}>
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
                                    </Col>
                                </Row>
                                
                            


                            </LocalForm>





                        </ModalBody>
                    </Modal>
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




}

export default DishDetail;