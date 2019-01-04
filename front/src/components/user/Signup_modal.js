import React, {Component} from 'react';
import {Modal, Form, Input, Button} from 'antd'
import {signup} from '../../services'

class Signup_modal extends Component {

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
    };

    submit=(e)=>{
        e.preventDefault()
        signup(this.state.user)
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

            <Modal
                title="Registro"
                centered
                visible={this.props.open}
                onCancel={()=>this.props.close(false)}
                footer={null}
            >
                <Form onSubmit={this.submit}>
                    <Form.Item
                        {...formItemLayout}
                        label="Nombre"
                    >
                        <Input
                            onChange={this.handleChange}
                            name={"name"}
                            required
                        />
                    </Form.Item>
                    <Form.Item
                        {...formItemLayout}
                        label="last_name"
                    >
                        <Input
                            onChange={this.handleChange}
                            name={"last_name"}
                            required
                        />
                    </Form.Item>
                    <Form.Item
                        {...formItemLayout}
                        label="E-mail"
                    >
                        <Input
                            onChange={this.handleChange}
                            type="email"
                            name={"email"}
                            required
                        />
                    </Form.Item>
                    <Form.Item
                        {...formItemLayout}
                        label="Contraseña"
                    >
                        <Input
                            onChange={this.handleChange}
                            type="password"
                            name={"password"}
                            required
                        />
                    </Form.Item>
                    <Form.Item
                        {...formItemLayout}
                        label="Confirm-password"
                    >
                        <Input
                            onChange={this.handleChange}
                            type="password"
                            name={"confirmPassword"}
                            required
                        />
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">Register</Button>
                    </Form.Item>
                </Form>
            </Modal>


        )
    }
}

export default Signup_modal;