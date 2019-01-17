import React, {Component} from 'react';
import './Profile.css';
import {ListProfile} from "../../components/profile/ListProfile";
import {FooterH} from '../../components/common/Footer';
import {getOwnPosts} from '../../services';
import Update_modal from "../../components/user/Update_modal";


class Profile extends Component {
    state = {
        modal4Visible:false,
        user: {},
        projects: []
    };

    componentWillMount () {
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

    modalUpdateProfile=()=>{
        let {modal4Visible}=this.state;
        modal4Visible =! modal4Visible;
        console.log("modal",modal4Visible);
        this.setState({modal4Visible})
    };

    render() {
        let {user, projects, modal4Visible} =this.state;
        return (
            <div>

                <Update_modal open={modal4Visible} close={this.modalUpdateProfile} user={user}/>
                <div className='align-header'>
                <h2>
                    Welcome back {!user ? "":user.name}!
                </h2>
                    <div className='button-update'>
                    <button onClick={()=>this.modalUpdateProfile(true)}>Update my profile</button>
                    </div>
                </div>
                <ListProfile
                    projects={projects}
                />
                <FooterH/>
            </div>
        )
    }
}

export default Profile;