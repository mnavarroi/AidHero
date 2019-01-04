import React, {Component} from 'react';
import './Footer.css';
import Logo from '../../images/aidhero_logo_min.svg';

export const FooterH=()=>(
            <div className="uk-child-width-expand@s">

                <div className='footer'>
                    <ul className="uk-list uk-list-large">
                        <li><img data-src={Logo} width="40" height="50" alt="H"/></li>
                        <li>Projects</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                    </ul>
                </div>
            </div>
        );

export default FooterH;