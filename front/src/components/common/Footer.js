import React, {Component} from 'react';
import './Footer.css';
import Logo from '../../images/aidhero_logo_min.svg';

export const FooterH=()=>(
    <div className="uk-child-width-expand@s">
        <div className='footer'>
            <ul className="uk-list uk-list-large">
                <div className='logomin'>
                    <li><img src={Logo} width="40" height="50" alt="H"/></li>
                </div>
                <li>Projects</li>
                <li>About</li>
                <li>FAQ</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
    </div>
);

export default FooterH;