import React from 'react';
import './SliderH.css';

export const SliderH = () =>(
    <div className="uk-position-relative uk-visible-toggle uk-light" uk-slider="sets: true">

        <ul className="slider-images uk-slider-items uk-child-width-1-2 uk-child-width-1-4@m">
            {[0,1,2,3,4,5,6].map((data,i)=>
                <li key={i}>
                    <img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" alt=""/>
                    <div className="uk-position-center uk-panel">
                        <div className='project-slider'>
                            <h4>Esta es la descripción del texto</h4>
                        </div>
                    </div>
                </li>
            )}
        </ul>
    </div>
);