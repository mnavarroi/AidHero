import React, {Component} from 'react';
import {Modal, Form, Input, Button} from 'antd'
import {login} from '../../services'

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
        console.log(this.state.user);
    }

    submit=(e)=>{
        e.preventDefault()
        login(this.state.user)

    }

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
                        label="email"
                    >
                        <Input
                            onChange={this.handleChange}
                            name={"email"}
                            required
                        />
                    </Form.Item>
                    <Form.Item
                        {...formItemLayout}
                        label="password"
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


        )
    }
}

export default Login_modal;