import React, {Component} from 'react';
import './Projects.css';
import ImgHome from '../../images/home.png'

class Projects extends Component {
    render() {
        return (
            <div>
                <h1>Projects</h1>
                <div>
                    <div className="uk-child-width-1-2@m" uk-grid>
                        <div>
                            <div className="uk-card uk-card-default">
                                <div className="uk-card-media-top">
                                    <img src="https://scontent-yyz1-1.cdninstagram.com/vp/5e98c3e57b00e8ed6ad24452d2d0337f/5CAC4DEE/t51.2885-15/sh0.08/e35/s750x750/47155668_1166924510143340_7579968199787737479_n.jpg?ig_cache_key=MTkyNDgxMzQ5Nzk1NTQ1NDA0MQ%3D%3D.2" alt=""/>
                                </div>
                                <div className="uk-card-body">
                                    <h3 className="uk-card-title">Little doggies</h3>
                                    <p>Ayuda a los pequeños lomitos a conseguir un hogar.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;