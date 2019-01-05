import React, {Component} from 'react';
import './Projects.css';
import Footer from '../../components/common/Footer'
//import MainImage from "../../images/dogs.png";


class Projects extends Component {
    render() {
        return (
            <div>
                <h2>Projects</h2>
                <div className='uk-grid uk-column-1-2@l'>
                    {[0,1,2,3,4,5,6,7,8,9,10].map((data,i)=>
                        <ul key={i}>
                            <div className="uk-child-width-expand@s" uk-grid>
                                <div className='project-card'>
                                    <div className="uk-card uk-card-default">
                                        <div className="uk-card-media-top">
                                        <img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" alt=""/>
                                        </div>
                                        <div className="uk-card-body">
                                            <h3 className="uk-card-title">Little doggies</h3>
                                            <p>Help these little dogs to find a home full of human love.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ul>
                    )}
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Projects;