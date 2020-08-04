import React,{Component} from 'react'
import { Navbar,NavbarBrand,Jumbotron,NavItem,Nav,NavLink } from 'reactstrap';

class Header extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <Navbar dark>
  
                    <div className="container">
                        <NavbarBrand href="/">Ristrante confusion</NavbarBrand>
                        
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
            </>

        )
    }


}


export default Header;