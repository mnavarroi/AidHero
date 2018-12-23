import React, {Component} from 'react';
import './Navbar.css';
import Logo from '../../images/aidhero_logo.svg';
import Signup_modal from '../user/Signup_modal';
import Login_modal from '../user/Login_modal';
import {Link} from 'react-router-dom'

import ImgHome from "../../images/home.png";
import UIkit from 'uikit';
class NavBar extends Component{
    state = {
        modal1Visible: false,
        modal2Visible: false,
    }


    modalOpenLogin =(modal1Visible)=> {
        console.log("hola",modal1Visible)
        this.setState({ modal1Visible });
    }
    modalOpen =(modal2Visible)=> {
        console.log("hola",modal2Visible)
        this.setState({ modal2Visible });
    }

    render(){
        let {modal2Visible,modal1Visible} =this.state;
        console.log(modal1Visible)
        return(
            <div className='navbar'>
                <div >
                    <nav className="uk-navbar-container uk-navbar-transparent" uk-navbar="mode: click">
                        <img data-src={Logo} width="200" height="30" alt="AIDHERO" uk-img="true"/>
                        <div className="uk-navbar-right">
                            <ul className="uk-navbar-nav">
                                <li className="uk-active"><Link to={"/Projects"}><a>projects</a></Link></li>
                                <div className="uk-navbar-dropdown">
                                    <ul className="uk-nav uk-navbar-dropdown-nav">
                                        <li className="uk-active"><a href="#">Active</a></li>
                                        <li><a href="#">Item</a></li>
                                        <li><a href="#">Item</a></li>
                                    </ul>
                                </div>
                                <li>
                                    <a onClick={()=>this.modalOpenLogin(true)}>login</a>
                                </li>
                                <li  ><a onClick={()=>this.modalOpen(true)}>signup</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <Login_modal open={modal1Visible} close={this.modalOpenLogin} />
                <Signup_modal open={modal2Visible} close={this.modalOpen} />

    </div>
    );
    }
}

export default NavBar;