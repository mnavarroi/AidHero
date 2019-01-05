import React from 'react'
import ImgHome from "../../images/home.png";
import './Home.css';
import './HeaderH.css';
import {Link} from "react-router-dom";

export const HeaderH = () =>(
    <div className='header uk-height-large uk-flex uk-flex-left uk-flex-middle uk-background-cover uk-light'
         data-src={ImgHome}
         data-srcset={ImgHome}
         uk-img="true">


        <h1 className="header_text"> GIVE A LITTLE OF YOUR TIME BACK_ <a to='/projects'>Show me the projects</a></h1>


        <div className='cta_header'>
            <p uk-margin>
                <Link to='/projects'>Show me the projects</Link>
            </p>
        </div>
    </div>
);

