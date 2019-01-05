//HIW
import React from "react";
import HIW1 from '../../images/hiw-1.svg';
import HIW2 from '../../images/hiw-2.svg';
import HIW3 from '../../images/hiw-3.svg';
import './Hw.css';
import { Card, Col, Row } from 'antd';
const { Meta } = Card;


export const Hw = ()=>(
    <div className='rows'>
        <div className='hiw'>
            <Row gutter={16}>
                <Col span={8}>
                    <Card bordered={false}
                          style={{ width: 280}}
                          cover={<img alt="example" src={HIW1} />}
                    >
                        <Meta
                            title="Signup to see the projects"
                        />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card bordered={false}
                          style={{ width: 280}}
                          cover={<img alt="example" src={HIW2} />}
                    >
                        <Meta
                            title="Search the projects"
                        />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card bordered={false}
                          style={{ width: 280}}
                          cover={<img alt="example" src={HIW3} />}
                    >
                        <Meta
                            title="Select the one you love"
                        />
                    </Card>
                </Col>
            </Row>

            <p uk-margin="true">
                <button className="button-hiw uk-button uk-button-default">Show me the projects</button>
            </p>

        </div>
    </div>
);
