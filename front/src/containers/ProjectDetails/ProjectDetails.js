import React, {Component} from 'react';
import './ProjectDetails.css';
import { Avatar } from 'antd';
import {HeaderP} from "../../components/projectdetail/HeaderP";
import {DescriptionP} from "../../components/projectdetail/DescriptionP";
import {NeedsP} from "../../components/projectdetail/NeedsP";
import {FooterH} from '../../components/common/Footer';

class ProjectDetails extends Component {
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
                    <button>I want to give my time to this project</button>
                </div>
                <FooterH/>
            </div>
        )
    }
}

export default ProjectDetails;