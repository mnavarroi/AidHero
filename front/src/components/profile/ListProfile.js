import React from 'react';
import './ListProfile.css';
import {Link} from "react-router-dom";

export const ListProfile = ({projects}) =>(
    <div className='list'>
        <div className='your-past-projects'>
            <h3>These are your past projects</h3>
        </div>
        <ul className="uk-list uk-list-striped">
            {projects.length >= 1 ? projects.map((data,i)=>
                <li key={i}>{data.post_name}</li>
            ) : <li>You have no projects yet.</li>
            }

        </ul>
    </div>
);

/*
* ejemplo de if ternario
*
* { dato == dato ? "si se cumple" : "si no se cumple "}
* { !daato  && dato ==3 || dato == "perorr? }
*
* */