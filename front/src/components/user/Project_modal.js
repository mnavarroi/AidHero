import React, {Component} from 'react';
import {Modal, Form, Input, Button} from 'antd';
import {newPost} from '../../services';
const { TextArea } = Input;


 export default class Project_modal extends Component {

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
        console.log(data);
    };

    submit=(e)=>{
        e.preventDefault();
        let {data}=this.state;
        const {user}=this.props;
        data['author']=user._id;
        data['organization_name']=user.organizations;
        console.log("que es",data)
        newPost(data).then(res=>{
            console.log(res);
            this.props.readPost(res.data)
            this.props.close()
        })
            .catch(err=>{
            console.log(err.response.data);
            });
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
                title="New Post"
                centered
                visible={this.props.open}
                onCancel={()=>this.props.close()}
                footer={null}
            >
                <Form onSubmit={this.submit}>
                    <Form.Item
                        {...formItemLayout}
                        label="Project Name"
                    >
                        <Input
                            onChange={this.handleChange}
                            name={"post_name"}
                            required
                        />
                    </Form.Item>
                    <Form.Item
                        {...formItemLayout}
                        label="Description"
                    >
                        <TextArea rows={4}
                            onChange={this.handleChange}
                            name={"description"}
                            required
                        />
                    </Form.Item>
                    <Form.Item
                        {...formItemLayout}
                        label="What do we need?"
                    >
                        <TextArea rows={2}
                            onChange={this.handleChange}
                            name={"needs"}
                            required
                        />
                    </Form.Item>
                    <Form.Item
                        {...formItemLayout}
                        label="The URL of your picture"
                    >
                        <Input
                            onChange={this.handleChange}
                            name={"pics"}
                            required
                        />
                    </Form.Item>

                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">Create</Button>
                    </Form.Item>
                </Form>
            </Modal>


        )
    }
}

