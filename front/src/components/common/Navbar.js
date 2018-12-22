import React, {Component} from 'react';
import './Navbar.css';
import Logo from '../../images/aidhero_logo.svg'

class NavBar extends Component{
    render(){
        return(
            <div className='navbar'>
                <div >
                    <nav className="uk-navbar-container uk-navbar-transparent" uk-navbar="mode: click">
                        <img data-src={Logo} width="200" height="30" alt="AIDHERO" uk-img="true"/>
                        <div className="uk-navbar-right">
                            <ul className="uk-navbar-nav">
                                <li className="uk-active"><a href="#">Projects</a></li>
                                <div className="uk-navbar-dropdown">
                                    <ul className="uk-nav uk-navbar-dropdown-nav">
                                        <li className="uk-active"><a href="#">Active</a></li>
                                        <li><a href="#">Item</a></li>
                                        <li><a href="#">Item</a></li>
                                    </ul>
                                </div>
                                <li>
                                    <a href="#">Login</a>
                                </li>
                                <li><a href="#">Signup</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
    </div>
    );
    }
}

export default NavBar;