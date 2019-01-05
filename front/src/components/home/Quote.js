import React, {Component} from 'react';
import './Quote.css';

export const Quote=()=>(
<div className="uk-section uk-section-large uk-section-muted">
    <div className="flex uk-container">

        <h3 className='quote'>No one has ever become poor by giving.</h3>

        <div className="uk-grid-match uk-child-width-1-3@m" uk-grid="true">
            <div>
                <p className='author'>Anna Frank</p>
            </div>
        </div>
    </div>
</div>
);

export default Quote;