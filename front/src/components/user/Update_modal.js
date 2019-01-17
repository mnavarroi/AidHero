import React, {Component} from 'react';
import {Modal, Form, Input, Button} from 'antd';
import {updateProfile} from '../../services';

export default class Update_modal extends Component {

    constructor(){
        super();
        this.state =  {
            data: {}
        }
    }

    handleChange = (e) => {
        const {data} = this.state;
        let field = e.target.name;
        data[field] = e.target.value;
        this.setState({data});
    };

    submit=(e)=>{
        e.preventDefault();
        let {data}=this.state;
        const {user}=this.props;
        ///localStorage.removeItem("user")
        updateProfile(user._id,data).then(res=>{
           localStorage.setItem('user', JSON.stringify(res.data.user))
           this.props.close()
            window.location.reload()
        })
            .catch(err=>{
                console.log(err.response.data);
            });
    };

    render() {
        let {user}=this.props;
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
                title="Update your profile"
                centered
                visible={this.props.open}
                onCancel={()=>this.props.close()}
                footer={null}
            >
                <Form onSubmit={this.submit}>
                    <Form.Item
                        {...formItemLayout}
                        label="Name"
                    >
                        <Input
                            defaultValue={user.name}
                            onChange={this.handleChange}
                            name={"name"}
                            required
                        />
                    </Form.Item>

                    <Form.Item
                        {...formItemLayout}
                        label="Last Name"
                    >
                        <Input
                            defaultValue={user.last_name}
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
                            defaultValue={user.email}
                            onChange={this.handleChange}
                            name={"email"}
                            required
                        />
                    </Form.Item>


                    <Form.Item
                        {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">Update</Button>
                    </Form.Item>
                </Form>
            </Modal>
        )
    }
}

