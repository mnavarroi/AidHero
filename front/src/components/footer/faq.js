import React from "react";

export const faq = () =>(

    <div className='faq'>
        <ul uk-accordion>
            <li className="uk-open">
                <a className="uk-accordion-title" href="#">Item 1</a>
                <div className="uk-accordion-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                </div>
            </li>
            <li>
                <a className="uk-accordion-title" href="#">Item 2</a>
                <div className="uk-accordion-content">
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor reprehenderit.</p>
                </div>
            </li>
            <li>
                <a className="uk-accordion-title" href="#">Item 3</a>
                <div className="uk-accordion-content">
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat proident.</p>
                </div>
            </li>
        </ul>

    </div>
);