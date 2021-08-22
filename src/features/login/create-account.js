import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Form, Input, Button} from 'antd';
import {
    createAccountAsync,
    handleEmail,
    handlePassword,
    selectLogin,
} from './loginSlice';
import LayoutLogin from "./components/layout-login";
import {useHistory} from "react-router";


const initialState = {
    name:'',
    last_name:'',
    nikename: '',
    confirm:'',
};

const CreateAccount = () => {
    const history = useHistory();
    const { email,password,loading } = useSelector(selectLogin);
    const [state, setState] = useState(initialState);
    const dispatch = useDispatch();

    useEffect(()=>{
        console.log('login',{ email });
    },[])

    // event
    const handleSubmit = e => {
        e.preventDefault();
        if(password !== state.confirm || password ==='' || state.confirm===''){
            alert('Please enter your password correct!');
            return;
        }

        console.log('create...',{
            ...state,
            email,
            password,
        });
        dispatch(createAccountAsync({...state,email,password}));
        setState(initialState);
        history.push('/login')
    }

    const hanldeChange = type => event => {
        const value = event.target.value;
        console.log(type,value);
        setState({...state, [type]:value})
    }

    return <LayoutLogin
        handleSubmit={handleSubmit}
        title='Create Account'
    >
        {/* name */}
        <Form.Item
            label="Name"
            name="name"
            rules={[{required: true,message: 'Please input your email!'},]}>
            <Input
                type='text'
                placeholder='name...'
                value={state.name}
                onChange={hanldeChange('name')}
            />
        </Form.Item>
        {/* last_name */}
        <Form.Item
            label="Last Name"
            name="last-name"
            rules={[{required: true,message: 'Please input your email!'},]}>
            <Input
                type='text'
                placeholder='Last name...'
                value={state.last_name}
                onChange={hanldeChange('last_name')}
            />
        </Form.Item>
        {/* nikename */}
        <Form.Item
            label="Nikename"
            name="nike-name"
            rules={[{required: true,message: 'Please input your email!'},]}>
            <Input
                type='text'
                placeholder='Nimename...'
                value={state.nikename}
                onChange={hanldeChange('nikename')}
            />
        </Form.Item>
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
            <Input
                placeholder='password...'
                value={password}
                onChange={e=>dispatch(handlePassword(e.target.value))}
            />
        </Form.Item>
        {/* Confirm */}
        <Form.Item
            label="Confirm"
            name="confirm"
            rules={[{required: true,message: 'Please input your password confirm!'},]}>
            <Input.Password
                placeholder='Confirm...'
                value={state.confirm}
                onChange={hanldeChange('confirm')}
            />
        </Form.Item>

        <Button loading={loading} shape="round" block type="primary" htmlType="submit" onClick={handleSubmit} >CREARTE</Button>
        <br/>
        <Button block type="link" onClick={()=>history.push('/')} >Cancel</Button>

    </LayoutLogin>
}

export default  CreateAccount;