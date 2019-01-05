import React from "react";
import './HeaderP.css';
import MainImage from "../../images/dogs.png";

export const HeaderP = () =>(
    <div className="uk-height-large uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light"
         data-src={MainImage} uk-img="true">
        <div className='hero-text'>
            <h1>Help these dogs find their new home</h1>
        </div>
    </div>
);