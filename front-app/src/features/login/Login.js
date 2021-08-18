import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Form, Input, Button, Divider, Layout} from 'antd';
import  {
    handleEmail,
    handlePassword,
    selectLogin,
} from './loginSlice';

const Login = () => {
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

    return < >
        <Layout.Header>
            <h1 style={{color:'#FFF'}}>This Is The Login Page</h1>
        </Layout.Header>
        <hr />
        <Layout.Content style={{ padding: '10px 50px',textAlign:'center',justifyContent:'center' }}>
             <Divider orientation="left">
                 <h3>User Perfil</h3>
             </Divider>
        <Form
            style={{height:200,width:450,display:'flex',justifyContent:'space-between',flexDirection:'column',background: '#fff',padding:24}}
          name="basic"
          initialValues={{ remember: false }}
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 21 }}
          onSubmitCapture={handleSubmit}
        >
            {/* email */}
            <Form.Item
                label="Username"
                name="username"
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
            <Button type="primary" htmlType="submit" >Send</Button>
        </Form>
        </Layout.Content>
    </>
}

export default  Login;