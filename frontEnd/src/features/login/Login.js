import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Form, Input, Button} from 'antd';
import {
    handleEmail,
    handlePassword,
    selectLogin,
    singInUser,
} from './loginSlice';
import LayoutLogin from "./components/layout-login";
import {useHistory} from "react-router";


const Login = () => {
    const history = useHistory();
    const { email,password,loading } = useSelector(selectLogin);
    const dispatch = useDispatch();

    useEffect(()=>{
        console.log('login',{ email,password });
    },[])

    // event
    const handleSubmit = e => {
        e.preventDefault();
        console.log('send...');
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
                type='password'
                placeholder='password...'
                value={password}
                onChange={e=>dispatch(handlePassword(e.target.value))}
            />
        </Form.Item>
        <Button loading={loading} shape="round" block type="primary" htmlType="submit" >ENTER</Button>
        <br/>

        <Button block type="link" onClick={()=>history.push('/account')} >create Acount</Button>
    </LayoutLogin>
}

export default  Login;