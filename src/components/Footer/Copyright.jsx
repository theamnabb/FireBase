import React from 'react'
import { Col, Row, Typography } from 'antd'
const {Paragraph} = Typography

const Copyright = () => {
    const year = new Date().
  return (
    <footer className='py-2 bg-primary'>
        <div className="container">
            <Row>
                <Col span={24}>
                <Paragraph className='text-white text-center'>
                    &copy; {year} All Rights Reversed.
                </Paragraph>
                </Col>
            </Row>
        </div>
    </footer>
  )
}

export default Copyright