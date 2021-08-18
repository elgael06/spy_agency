import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Form, Input, Button} from 'antd';
import  {
    handleEmail,
    handlePassword,
    selectLogin,
} from './loginSlice';
import LayoutLogin from "./components/layout-login";
import {useHistory} from "react-router";


const CreateAccount = () => {
    const history = useHistory();
    const { email,password } = useSelector(selectLogin);
    const dispatch = useDispatch();

    useEffect(()=>{
        console.log('login',{ email,password });
    },[])

    // event
    const handleSubmit = e => {
        e.preventDefault();
        console.log('send...')
    }

    return <LayoutLogin
        handleSubmit={handleSubmit}
        title='Create Account'
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
        <Button shape="round" block type="primary" htmlType="submit" >CREARTE</Button>
        <br/>
        <Button block type="link" onClick={()=>history.push('/')} >Return to login</Button>
    </LayoutLogin>
}

export default  CreateAccount;