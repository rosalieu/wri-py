import React, { Component } from "react";
import { Form, Input, Button, Checkbox, Space } from "antd";
import ReactDOM from "react-dom";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { Redirect, Link } from "react-router-dom";
import firebase from "firebase/app";

const layout = {
  labelCol: {
    span: 2,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

// Add manual auth
const Login = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
    window.location.href = "/dashboard";
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div
      style={{
        backgroundColor: "#ffd9d9",
        margin: "25px",
        padding: "25px",
        borderRadius: "25px",
      }}
    >
      <Button  onClick={() => {
                      const googleAuthProvider =
                        new firebase.auth.GoogleAuthProvider();
                      firebase.auth().signInWithPopup(googleAuthProvider);
                    }}>Log in with Google</Button>
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <br></br>
        <h1 class="header">Login</h1>

        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Username required to signup",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Password required to signup",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button
            type="primary"
            style={{
              background: "gold",
              color: "black",
              textAlign: "right",
            }}
            htmlType="submit"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Space>
        <h2 class="subheader">Don't have an account?</h2>
        <Link to="/signup">
          <Button
            type="primary"
            style={{
              background: "gold",
              borderColor: "gold",
              color: "black",
            }}
          >
            Signup
          </Button>
        </Link>
      </Space>
    </div>
  );
};

<Login />;

export default Login;
