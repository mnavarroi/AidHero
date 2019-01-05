import React, {Component} from 'react';
import './Schedule.css'
import {Link} from "react-router-dom";
import Day from "../../components/profile/Day";
import Comments from "../../components/profile/Comments";


class Schedule extends Component {
    render() {
        return (
            <div className='center-content'>
                <Day/>
                <Comments/>
            </div>
        );
    }
}

        export default Schedule;