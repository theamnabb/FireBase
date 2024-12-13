import React from "react";
import { useState } from "react";
import { Button, Col, Form, Input, Row, Typography } from "antd";
import {auth} from '../../../config/firebase'
import { signInWithEmailAndPassword } from "firebase/auth";

const { Title } = Typography;
const initialState = {
  email: "",
  password: ""
};

const Login = () => {
  const [state, setState] = useState(initialState);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleChange = (e) =>
    setState((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();

    let { email, password } = state;

    const userData = {
      uid: "",
      email,
      password,
    };
    setIsProcessing(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
      
        // ...
      })
      .catch((error) => {
        console.log(error);
        
        // ..
      })
      .finally(()=>{
        setIsProcessing(false);
        
      });

    
  };
 

  return (
    <main className="auth p-3  p-lg-4">
      <div className="card p-3  p-lg-4">
        <Title level={1} className="text-primary text-center mb-5">
          Login
        </Title>
        <Form layout="vertical">
          <Row gutter={16}>
            {/* Email */}
            <Col span={24}>
              <Form.Item label="Email" required>
                <Input
                  size="large"
                  type="email"
                  placeholder="Enter Your Email"
                  name="email"
                  onChange={handleChange}
                />
              </Form.Item>
            </Col>

            {/* Password */}
            <Col span={24}>
              <Form.Item label="Password" required>
                <Input.Password
                  size="large"
                  type="password"
                  placeholder="Enter Your Password"
                  name="password"
                  onChange={handleChange}
                />
              </Form.Item>
            </Col>

            
            {/* Button */}
            <Col span={24}>
              <Button
                type="primary"
                block
                size="large"
                htmlType="submit"
                loading={isProcessing}
                onClick={handleSubmit}
              >
                Login
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </main>
  );
};

export default Login;
