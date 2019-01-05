import React, {Component} from 'react';
import './Navbar.css';
import Logo from '../../images/aidhero_logo.svg';
import Signup_modal from '../user/Signup_modal';
import Login_modal from '../user/Login_modal';
import {Link} from 'react-router-dom'


class NavBar extends Component{
    state = {
        modal1Visible: false,
        modal2Visible: false,
        user: {},
        logged:false
    };

    componentWillMount () {
        const user = JSON.parse(localStorage.getItem('user'));
        const token = localStorage.getItem('token');
        if (token) {
            this.setState({user, logged:true})
        }else{
            this.setState({logged:false})
        }
    };

    modalOpenLogin =(modal1Visible)=> {
        this.setState({ modal1Visible });
    };
    modalOpen =(modal2Visible)=> {
        this.setState({ modal2Visible });
    };

    logout= () =>{
        localStorage.clear()
        this.setState({user:{}, logged:false})
    };
    entro=(user,logged)=>{

        this.setState({user,logged})
    };
    render(){
        let {modal2Visible,modal1Visible, user,logged} =this.state;
        return(
            <div className='navbar'>
                <nav className="uk-navbar-container uk-navbar-transparent" uk-navbar="mode: click">
                    <div className='uk-navbar-left'>
                        <Link to={"/"}> <img data-src={Logo} width="200" height="30" alt="AIDHERO" uk-img="true"/></Link>
                    </div>
                    <div className="uk-navbar-right">
                        {
                            logged ?
                                <ul className="uk-navbar-nav">
                                    <li className="uk-active"><Link to={"/Profile"}><a>Hi {!user ? "":user.name}</a></Link></li>
                                    <li className="uk-active"><Link to={"/Projects"}><a>projects</a></Link></li>
                                    <li><a onClick={this.logout}>logout</a></li>
                                </ul>
                                :
                                <ul className="uk-navbar-nav">
                                    <li>
                                        <a onClick={()=>this.modalOpenLogin(true)}>login</a>
                                    </li>
                                    <li  ><a onClick={()=>this.modalOpen(true)}>signup</a></li>
                                </ul>
                        }
                    </div>
                </nav>

                <Login_modal open={modal1Visible} close={this.modalOpenLogin} entro={this.entro} />
                <Signup_modal open={modal2Visible} close={this.modalOpen} />

            </div>
        );
    }
}
export default NavBar;