import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Form, Input, Button, Divider, Layout} from 'antd';
import  {
    handleEmail,
    handlePassword,
    selectLogin,
} from './loginSlice';

const { Header, Content, Footer } = Layout;

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
        <Header>
            <h1 style={{color:'#FFF'}}>Login Page</h1>
        </Header>

        <hr />
        <Content style={{ display:'flex',textAlign:'center',justifyContent:'center', alignItems:'center' }}>

        <Form
            style={{
                display:'flex',
                marginTop:-120,
                height:450,
                width:450,
                justifyContent:'space-between',
                flexDirection:'column',
                background: '#fff',
                padding:'20px 35px'
            }}
          name="basic"
          initialValues={{ remember: false }}
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 21 }}
          onSubmitCapture={handleSubmit}
        >
            <div>
            <Divider>
                 <h2>Sing in</h2>
             </Divider>
            </div>

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
            <Button shape="round" block type="primary" htmlType="submit" >ENTER</Button>
            <hr />
            <Footer><small>Company SPY</small></Footer>
        </Form>
        </Content>
    </>
}

export default  Login;