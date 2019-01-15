import React, {Component} from 'react';
import './Projects.css';
import Footer from '../../components/common/Footer'
import {Link} from "react-router-dom";
import {Button} from 'antd'
import {getPosts} from "../../services";
import Project_modal from "../../components/user/Project_modal";

class Projects extends Component {
    state= {
        modal3Visible:false,
        projects: [],
        user:{}
    };
    componentWillMount(){
        const user = JSON.parse(localStorage.getItem('user'));

            this.readPost()
            this.setState({user})


    }
    readPost=(post)=>{
        if(post){
            console.log("si funciona",post)
            let {projects}=this.state
            projects.push(post)
            this.setState({projects})
        }else{
            console.log("recaarga")
            getPosts().then(res => {
                this.setState({projects:res.data})
            })
        }

    }
    modalOpenProject=()=>{
        let {modal3Visible}=this.state;
        modal3Visible =! modal3Visible
        console.log("modal",modal3Visible)
        this.setState({modal3Visible})
    }
    render() {
        let {projects,modal3Visible,user} = this.state;
        console.log("esto es", projects);
        return (
            <div>
                <Project_modal open={modal3Visible} close={this.modalOpenProject} user={user} readPost={this.readPost}/>

                <h2>Projects</h2> <Button onClick={this.modalOpenProject} style={{color:"red"}}>Editar</Button>
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
                                        <img src={data.pics} alt=""/>
                                        </div>
                                        <div className="uk-card-body">
                                            <h3 className="uk-card-title">{data.post_name}</h3>
                                            <p>{data.description}</p>
                                            <div className='see-more'>
                                            <Link to={`/ProjectDetails/${data._id}`}>See more</Link>
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