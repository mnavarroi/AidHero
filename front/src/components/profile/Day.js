import React, {Component} from 'react';
import {base_url} from '../../services'
import axios from "axios";
import { DatePicker} from 'antd';

const {RangePicker } = DatePicker;

class Day extends Component {

    constructor(){
        super();
        this.state =  {
            user: {}
        }
    }

    handleChange = (e) => {
        const {user} = this.state;
        let field = e.target.name;
        user[field] = e.target.value;
        this.setState({user});
        console.log(user)
    };

    submit=(e)=>{
        e.preventDefault();
        axios.post(`${base_url}/auth/login`, this.state.user)
            .then(res => {
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("user", JSON.stringify(res.data.user));
                const user=  res.data.user;
                const logged = true;
                this.props.close(false);
                this.props.entro(user, logged)

            })
            .catch(err => {
            })

    };

    render() {

        const { size } = this.state;
        return (
            <div>
                <RangePicker size={size} />
            </div>
        );
    }
}

export default Day;