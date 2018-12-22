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


                <h1 className="header_text" > GIVE BACK A LITTLE OF YOUR TIME_ </h1>

            </div>

        )
    }
}

export default Home;