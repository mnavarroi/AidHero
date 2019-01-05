import React, {Component} from 'react';
import {HeaderH} from "../../components/home/HeaderH";
import {Hw} from '../../components/home/Hw';
import {SliderH} from '../../components/home/SliderH';
import {FooterH} from '../../components/common/Footer';
import ImgHome from "../../images/home.png";
import './Home.css'
import Quote from "../../components/home/Quote";
import {Link} from "react-router-dom";


const styles = {
    container:{
        display:'flex',
        flexDirection:'column',
    }
};
class Home extends Component {
    render() {
        return (
            <div>
                <div className='header uk-height-large uk-flex uk-flex-left uk-flex-middle uk-background-cover uk-light'
                     data-src={ImgHome}
                     data-srcset={ImgHome}
                     uk-img="true">


                    <h1 className="header_text"> GIVE A LITTLE OF YOUR TIME BACK_</h1>

                    <div className='cta_header'>
                        <p uk-margin>
                            <Link to='/Projects' className="button-cta uk-button uk-button-default">Show me the projects</Link>
                        </p>
                    </div>
                </div>
                <Hw/>
                <Quote/>
                <FooterH/>
            </div>
        )
    }
}

export default Home;