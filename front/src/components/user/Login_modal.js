import React, {Component} from 'react';
import {Modal, Form, Input, Button} from 'antd'
import {base_url} from '../../services'
import axios from "axios";
import './Login_modal.css';

class Login_modal extends Component {

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
                console.log("Error Login =====> ", err.response.data.msg);
            })

    };

    render() {

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };
        return (
<div className='modal-login'>
            <Modal
                title="Login"
                centered
                visible={this.props.open}
                onCancel={()=>this.props.close(false)}
                footer={null}

            >
                <Form onSubmit={this.submit}>
                    <Form.Item
                        {...formItemLayout}
                        label="e-mail"
                    >
                        <Input
                            onChange={this.handleChange}
                            name={"email"}
                            required
                        />
                    </Form.Item>
                    <Form.Item
                        {...formItemLayout}
                        label="Password"
                        //required (este pone el asterisco rojo)
                    >
                        <Input
                            onChange={this.handleChange}
                            name={"password"}
                            type="password"
                            required
                        />
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">Login</Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
        )
    }
}

export default Login_modal;