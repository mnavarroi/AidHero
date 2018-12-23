import React, {Component} from 'react';
import './Home.css';
import ImgHome from '../../images/home.png'

class Home extends Component {
    render() {
        return (
            <div className='header uk-height-medium uk-flex uk-flex-left uk-flex-middle uk-background-cover uk-light'
                 data-src={ImgHome}
                 data-srcset={ImgHome}
                  uk-img="true">


                <h1 className="header_text"> GIVE A LITTLE OF YOUR TIME BACK_ </h1>

                <div className='cta_header'>
                    <p uk-margin>
                        <button className="button uk-button uk-button-default">Show me the projects</button>
                    </p>
                </div>

                <h2></h2>

            </div>
        )
    }
}

export default Home;