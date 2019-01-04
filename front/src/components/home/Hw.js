//HIW
import React from "react";
import './Hw.css';
import { Card, Col, Row } from 'antd';
const { Meta } = Card;


export const Hw = ()=>(
    <div className='hiw'>
        <Row gutter={16}>
            <Col span={8}>
                <Card
                    style={{ width: 320 }}
                    cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                >
                    <Meta
                        title="Register in the app"
                        description="This is the description"
                    />
                </Card>
            </Col>
            <Col span={8}>
                <Card
                    style={{ width: 320 }}
                    cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                >
                    <Meta
                        title="Search the projects"
                        description="This is the description"
                    />
                </Card>
            </Col>
            <Col span={8}>
                <Card
                    style={{ width: 320 }}
                    cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                >
                    <Meta
                        title="Select the one you love"
                        description="This is the description"
                    />
                </Card>
            </Col>
        </Row>

        <p uk-margin>
            <button className="uk-button uk-button-default">Show me the projects</button>
        </p>

    </div>

    );
