import React,{Component} from 'react';
import {Breadcrumb,BreadcrumbItem,Button,FormGroup,Form,Label,Input,Col } from 'reactstrap'

import { Link } from 'react-router-dom'

class Contact extends Component {


    constructor(props) {
        super(props)

         this.state = {
             firstname: '',
             lastname: '',
             telnum: '',
             email: '',
             agree: '',
             contactType: 'Tel',
             message: ''
         }

         this.handleSubmit = this.handleSubmit.bind(this);
         this.handleInputChange = this.handleInputChange.bind(this)
    }


    handleInputChange(event){
        const target = event.target;
        if(target.name=='firstname') {
            this.setState({
                firstname: target.value 
            })
        }

        if(target.name=='lastname') {
            this.setState({
                lastname: target.value 
            })
        }

        if(target.name=='telnum') {
            this.setState({
                telnum: target.value 
            })
        }

        if(target.name=='email') {
            this.setState({
                email: target.value 
            })
        }

        if(target.name=='agree') {
            this.setState({
                agree: target.value 
            })
        }

        if(target.name=='contactType') {
            this.setState({
                contactType: target.value 
            })
        }

        if(target.name=='feedback') {
            this.setState({
                message: target.value 
            })
        }


    }

    handleSubmit(event) {
        console.log("Current state is "+ JSON.stringify(this.state))
        alert("Current state is "+ JSON.stringify(this.state))
        event.preventDefault()
    }

    render() {

        return(
            <div className="container">
                
                <div className="row">
                            <Breadcrumb>
                                <BreadcrumbItem>< Link to="/home">Home</ Link></BreadcrumbItem>
                                <BreadcrumbItem active> Contactus </BreadcrumbItem>
                            
                            </Breadcrumb>
        
    
                        <div className="col-12 col-md-5 m-1">
                            ContactUs
                        </div>
                        
                        
                        </div>
    
    
                <div className="row row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>

                </div>


                <div className="row">
                    <div className="col-12">
                        <h3>Send us your feedback</h3>
                    </div>

                    <div className="col-12 col-md-9">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="firstname" md={2}>First name</Label>
                                <Col md={10}>
                                    <Input type="text" id="firstname" name="firstname" placeholder="Enter firstname" onChange={this.handleInputChange} value={this.state.firstname}></Input>
                                </Col>

                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="lastname" md={2}>Last name</Label>
                                <Col md={10}>
                                    <Input type="text" id="lastname" name="lastname" placeholder="Enter lastname" onChange={this.handleInputChange} value={this.state.lastname}></Input>
                                </Col>

                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="telnum" md={2}>Contact No</Label>
                                <Col md={10}>
                                    <Input type="tel" id="telnum" name="telnum" placeholder="Enter contact num" onChange={this.handleInputChange} value={this.state.telnum}></Input>
                                </Col>

                            </FormGroup>


                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type="email" id="email" name="email" placeholder="Enter email" onChange={this.handleInputChange} value={this.state.email}></Input>
                                </Col>

                            </FormGroup>

                            <FormGroup row>
                                <Col md={{size:6,offset: 2}}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" name="agree" onChange={this.handleInputChange} value={this.state.agree}></Input>{' '}
                                            <strong>May we Contact you</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{size:3,offset: 1}}>
                                    <Input type="select" name="contactType" onChange={this.handleInputChange} value={this.state.contactType} >
                                        <option>
                                            Tel.
                                        </option>
                                        <option>
                                            Email
                                        </option>
                                    </Input>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="message" md={2}>Your feedback</Label>
                                <Col md={10}>
                                    <Input type="textarea" id="message" name="feedback" rows="12" onChange={this.handleInputChange} value={this.state.message}></Input>
                                </Col>

                            </FormGroup>

                            <FormGroup row>
                                <Col md={{size:10,offset:2}}>
                                <Button type="submit" color="primary">
                                    Send feedback
                                </Button>
                                </Col>
                            </FormGroup>


                        </Form>
                    </div>
                </div>
            </div>
        );
    }
    

    } 

    
export default Contact;