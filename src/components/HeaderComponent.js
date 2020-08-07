import React,{Component} from 'react'
import { Navbar,NavbarBrand,Jumbotron,NavItem,Nav,NavbarToggler,Collapse,Modal,Button,ModalHeader,ModalBody,Form,FormGroup,Input,Label,Col } from 'reactstrap';
import {NavLink} from 'react-router-dom'

class Header extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isNavOpen: false,
            isModalOpen: false
        }

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })

    }

    handleSubmit(event){
        event.preventDefault()
        this.toggleModal();
        alert("Username "+ this.username.value+' password'+this.password.value+' Remember me '+this.remember.checked )
        
    }



    render() {
        return (
            <>
                <Navbar dark expand="md">
  
                    <div className="container">

                        <NavbarToggler onClick={this.toggleNav}></NavbarToggler>

                        <NavbarBrand className="mr-auto" href="/">
                            <img src="/assets/images/logo.png" height="30" width="41" alt="Ristorante Confusion"></img>    
                        </NavbarBrand>
                        <Collapse isOpen = {this.state.isNavOpen} navbar> 
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home"><span className="fa fa-home fa-lg"> Home </span> </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink className="nav-link" to="/aboutus"><span className="fa fa-info fa-lg"> AboutUs </span> </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink className="nav-link" to="/menu"><span className="fa fa-list fa-lg"> Menu </span> </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink className="nav-link" to="/contactus"><span className="fa fa-address-card fa-lg"> ContactUs </span> </NavLink>
                            </NavItem>

                            
                        </Nav>

                        <Nav className="ml-auto" navbar>

                            <NavItem>
                                <Button onClick={this.toggleModal}>
                                    <span className="fa fa-sign-in fa-lg">Signin</span>
                                </Button>
                            </NavItem>

                        </Nav>

                        </Collapse>
                        
                    </div>

                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">

                            <div className="col-12 col-sm-6">
                                <h1>Ristrante Confusion</h1>
                                <p>We take inspiration from the Worlds best cuisines and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses...!!!
                                </p>
                            </div>

                        </div>
                    </div>
                </Jumbotron>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="username" md={2}>Username: </Label>
                                <Col md={10}>
                                    <Input type="text" id="username" name="username" innerRef = {(input)=> this.username = input}></Input>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="password" md={2}>Password: </Label>
                                <Col md={10}>
                                    <Input type="password" id="password" name="password" innerRef = {(input)=> this.password = input}></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup check>
                                

                                <Col md={{size:6,offset:2}}>
                                <Label check>
                                    <Input type="checkbox" name="remember" value='remember' innerRef = {(input)=> this.remember = input}></Input>
                                    Remember me
                                </Label>
                                </Col>

                            </FormGroup><Button type="submit" value="submit" className="bg-primary">Login</Button>

                            
                            
                            
                        </Form>
                    </ModalBody>
                </Modal>

            </>

        )
    }


}


export default Header;