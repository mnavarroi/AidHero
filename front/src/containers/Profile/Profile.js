import React, {Component} from 'react';
import './Profile.css';
import {ListProfile} from "../../components/profile/ListProfile";
import {NeedsP} from "../../components/projectdetail/NeedsP";
import {FooterH} from '../../components/common/Footer';

class Profile extends Component {
    render() {
        return (
            <div>
                <h2>
                    Welcome back Manuel!
                </h2>
                <ListProfile/>
                <FooterH/>
            </div>
        )
    }
}

export default Profile;