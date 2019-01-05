import React from 'react';
import './ListProfile.css';

export const ListProfile = () =>(
    <div className='list'>
        <div className='your-past-projects'>
            <h3>Your past projects</h3>
        </div>
        <ul className="uk-list uk-list-striped">
            <li>Help these dogs to find a new home</li>
            <li>Listen to this awesome grandparents stories</li>
            <li>Play with kids at the park</li>
        </ul>
    </div>
);