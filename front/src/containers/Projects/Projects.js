import React, {Component} from 'react';
import './Projects.css';
import Footer from '../../components/common/Footer'
import {Link} from "react-router-dom";
import {Button} from 'antd'
import {getOwnPosts, getPosts} from "../../services";
import Project_modal from "../../components/user/Project_modal";

class Projects extends Component {
    state= {
        modal3Visible:false,
        projects: [],
        user:{}
    };
    componentWillMount(){
        const user = JSON.parse(localStorage.getItem('user'));
        const token = localStorage.getItem('token');
        if (token) {
            /* nombrefuncion(datos).then(respuesta=>{ haces funciones o lo que sea o un console}).catch(err=>{console.log(err}) */
            getOwnPosts(user._id).then(res=>{
                this.setState({projects:res.data});
            }).catch(err=>{
                console.log("error:",err)
            });

            this.setState({user})
        }else{
            this.props.history.push('/')
        }

    };



readPost=(post)=>{
    if(post){
        let {projects}=this.state;
        projects.push(post);
        this.setState({projects})
    }else{
        getPosts().then(res => {
            this.setState({projects:res.data})
        })
    }

};
modalOpenProject=()=>{
    let {modal3Visible}=this.state;
    modal3Visible =! modal3Visible;
    console.log("modal",modal3Visible);
    this.setState({modal3Visible})
};
render(){
    let {projects,modal3Visible,user} = this.state;
    return (
        <div>
            <Project_modal open={modal3Visible} close={this.modalOpenProject} user={user} readPost={this.readPost}/>
            <div className='align-header'>
                <h2>Projects</h2>
                <div className='button-update'>
                     <button onClick={this.modalOpenProject}>Add a new project</button>
                </div>
            </div>

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