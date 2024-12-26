import React from "react";
import { useState } from "react";
import { Button, Col, Form, Input, Row, Typography } from "antd";
import {auth} from '../../../config/firebase'
import { createUserWithEmailAndPassword } from "firebase/auth";

const { Title } = Typography;
const initialState = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  confirmpassword: "",
};

const Register = () => {
  const [state, setState] = useState(initialState);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleChange = (e) =>
    setState((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();

    let { firstname, lastname, email, password, confirmpassword } = state;

    const userData = {
      uid: "",
      firstname,
      lastname,
      email,
      password,
      confirmpassword,
    };
    setIsProcessing(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        createDocument({...userData, uid:user.uid});
      
        // ...
      })
      .catch((error) => {
        console.log(error);
        setIsProcessing(false);
        
        // ..
      });

    
  };
  const createDocument = (userData) => {
    console.log("userData", userData);
    setTimeout(() => {
      setIsProcessing(false);
    }, 1000);
  };

  return (
    <main className="auth p-3  p-lg-4">
      <div className="card p-3  p-lg-4">
        <Title level={1} className="text-primary text-center mb-5">
          Register
        </Title>
        <Form layout="vertical">
          <Row gutter={16}>
            <Col xs={24} md={12}>
              <Form.Item label="First Name" required>
                <Input
                  size="large"
                  type="text"
                  placeholder="Enter Your Firstname"
                  name="firstname"
                  onChange={handleChange}
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item label="Last Name">
                <Input
                  size="large"
                  type="text"
                  placeholder="Enter Your Lastname"
                  name="lastname"
                  onChange={handleChange}
                />
              </Form.Item>
            </Col>
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

            {/* confirmpassword */}
            <Col span={24}>
              <Form.Item label="Confirm Password" required>
                <Input.Password
                  size="large"
                  type="password"
                  placeholder="Enter Your Confirm Password"
                  name="confirmpassword"
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
                Register
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </main>
  );
};

export default Register;
