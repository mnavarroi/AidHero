import React, {Component} from 'react';
import './ProjectDetails.css';
import { Avatar } from 'antd';
import {HeaderP} from "../../components/projectdetail/HeaderP";
import {DescriptionP} from "../../components/projectdetail/DescriptionP";
import {NeedsP} from "../../components/projectdetail/NeedsP";
import {FooterH} from '../../components/common/Footer';
import {Link} from "react-router-dom";

class ProjectDetails extends Component {
    //this.match.params.id
    render() {
        return (
            <div>
                <HeaderP/>
                <div className='avatar'>
                    <Avatar>ONG</Avatar>
                    My best bud
                </div>
                <div className='details'>
                    <DescriptionP/>
                    <NeedsP/>
                    <Link to='/Schedule' className="button-hiw uk-button uk-button-default">I want to give my time to this project</Link>
                </div>
                <FooterH/>
            </div>
        )
    }
}

export default ProjectDetails;