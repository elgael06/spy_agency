import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Form, Input, Button} from 'antd';
import { Link } from 'react-router-dom';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {
    handleEmail,
    handlePassword,
    selectLogin,
    singInUser,
} from './loginSlice';
import LayoutLogin from "./components/layout-login";


const Login = () => {
    const { email,password,loading } = useSelector(selectLogin);
    const dispatch = useDispatch();

    // event
    const handleSubmit = e => {
        e.preventDefault();
        if(email && password){
            dispatch(singInUser({
                    email,
                    password
                }
            ))
        }
    }

    return <LayoutLogin
        handleSubmit={handleSubmit}
        title='Sing In'
    >
        {/* email */}
        <Form.Item
            label="Email"
            name="email"
            rules={[{required: true,message: 'Please input your email!'},]}>
            <Input
                prefix={<UserOutlined className="site-form-item-icon" />} 
                type='email'
                placeholder='email...'
                value={email}
                onChange={e=>dispatch(handleEmail(e.target.value))}
            />
        </Form.Item>
        {/* password */}
        <Form.Item
            label="Password"
            name="password"
            rules={[{required: true,message: 'Please input your password!'},]}>
            <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />} 
                type='password'
                placeholder='password...'
                value={password}
                onChange={e=>dispatch(handlePassword(e.target.value))}
            />
        </Form.Item>
        <Button loading={loading} block type="primary" htmlType="submit" >ENTER</Button>
          <p style={{textAlign: 'left',padding:10}}> Or <Link to="/account" >register now!</Link></p>
    </LayoutLogin>
}

export default  Login;