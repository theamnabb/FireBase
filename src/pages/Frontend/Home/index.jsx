import { Col, Row, Typography } from 'antd'

const {Title} = Typography
import React from 'react'

const Home = () => {
  return (
   
   <main className='py-5'>
    <div className="container">
        <Row>
            <Col span={24}>
            <Title level={1} className='text-center mb-0'>
                Home Page
            </Title>
            </Col>
        </Row>
    </div>
   </main>
   
  )
}

export default Home