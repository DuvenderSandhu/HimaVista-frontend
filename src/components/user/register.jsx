import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import Title from 'antd/es/typography/Title';
import { Link } from 'react-router-dom';
const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const UserRegister = () => (
 <div className="p-8 mt-16 flex flex-col justify-center items-center">
  <Title level={2}>Form for  User Registers</Title>
     <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="UserRegistername"
      name="userRegistername"
      rules={[
        {
          required: true,
          message: 'Please input your userRegistername!',
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
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item
      wrapperCol={{
          offset: 8,
          span: 16,
        }}
    >
        <Link to={"/user/register"}>New Local User Register</Link> 
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>

 </div>
);
export default UserRegister;