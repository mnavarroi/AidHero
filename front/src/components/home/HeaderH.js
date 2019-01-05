import React from 'react'
import ImgHome from "../../images/home.png";
import {Hw} from "./Hw";
import './Home.css';
import './HeaderH.css';

export const HeaderH = () =>(
    <div className='header uk-height-large uk-flex uk-flex-left uk-flex-middle uk-background-cover uk-light'
         data-src={ImgHome}
         data-srcset={ImgHome}
         uk-img="true">


        <h1 className="header_text"> GIVE A LITTLE OF YOUR TIME BACK_ </h1>

        <div className='cta_header'>
            <p uk-margin>
                <button className="button uk-button uk-button-default">Show me the projects</button>
            </p>
        </div>
    </div>
);

