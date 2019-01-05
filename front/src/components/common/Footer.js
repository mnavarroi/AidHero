import React, {Component} from 'react';
import './Footer.css';
import Logo from '../../images/aidhero_logo_min.svg';
import {Link} from "react-router-dom";

export const FooterH=()=>(
    <div className="uk-child-width-expand@s">
        <div className='footer'>
            <ul className="uk-list uk-list-large">
                <div className='logomin'>
                    <Link to={"/"}><img src={Logo} width="100px" alt="H"/></Link>
                </div>
                <div className='footer-links'>
                    <Link to='/Projects'><li>Projects</li></Link>
                    <Link to='/About'><li>About</li></Link>
                    <Link to='/FAQ'><li>FAQ</li></Link>
                    <Link to='/PrivacyPolicy'><li>Privacy Policy</li></Link>
                </div>
            </ul>
        </div>
    </div>
);

export default FooterH;