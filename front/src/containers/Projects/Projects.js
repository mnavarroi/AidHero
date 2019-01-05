import React, {Component} from 'react';
import './Projects.css';
import Footer from '../../components/common/Footer'
import {Link} from "react-router-dom";

class Projects extends Component {
    state= {
        projects: [
            {
                img: "elderly.png",
                name: "Listen to this awesome stories",
                description: "This fellows have some awesome stories to tell and they are looking for someone to share them with. You might be one of the lucky ones."
            },
            {
                img: "dogs.png",
                name: "Help these dogs find a new home",
                description: "Meet Tulip, Jackson and Meatball on Saturday, January 5 from Noon to 3pm at the Olathe PetSmart at 119th & Strang Line. These dogs are scheduled to be with volunteers from Ray of Hope."
            },
            {
                img: "plant.png",
                name: "Breathe fresh air",
                description: "Help our environment and help new and fresh air be renewed with trees and plants. Mauris risus nibh, tincidunt non ex et, mattis placerat quam. "
            },
            {
                img: "jail.png",
                name: "Spent some quality time with reformed men and women",
                description: "We will be sure to post a comment. Tomorrow, from the Radio Buttons, but some pain. Write on the brakes now. No comments were, at best, but the health care financing or laughter."
            },
            {
                img: "kids.png",
                name: "Play with these incredible kids",
                description: "Welcome to learn more about popular culture, and the time, no, nor to grow strong. We look at the television cable television members. In the valley, the housing in targeted monitoring."
            },
            {
                img: "teach.png",
                name: "Teach something you are good for for free",
                description: "replacement or consolidation of the bed, a man obsessed with reducing illegal betting options. Wow, very attractive market, from my visitors."
            },
            {
                img: "cat.png",
                name: "Help vets take care of this stray cats",
                description: "Recent development time to hate, a time bar beef. our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims."
            },
            {
                img: "build.png",
                name: "Build homes for communities",
                description: "The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
            },
            {
                img: "dog.png",
                name: "Walk rescued dogs",
                description: "These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure."
            },
            ]
    };

    render() {
        let {projects} = this.state;
        return (
            <div>
                <h2>Projects</h2>
                <div classname="cards">
                <h5>You can review each and every project and decide which one makes more sense for you.</h5>
                </div>
                <div className='uk-grid uk-column-1-2@l'>
                    {projects.map((data,i)=>
                        <ul key={i}>
                            <div className="uk-child-width-expand@s" uk-grid>
                                <div className='project-card'>
                                    <div className="uk-card uk-card-default">
                                        <div className="uk-card-media-top">
                                        <img src={data.img} alt=""/>
                                        </div>
                                        <div className="uk-card-body">
                                            <h3 className="uk-card-title">{data.name}</h3>
                                            <p>{data.description}</p>
                                            <div className='see-more'>
                                            <Link to={"/ProjectDetails"}>See more</Link>
                                            </div>
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