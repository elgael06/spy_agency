import React from "react";

import {Divider, Form, Layout} from 'antd';


const { Header, Content, Footer } = Layout;

const LayoutLogin = ({
    title='',
    children=null,
    handleSubmit=()=>{}
}) => {


    return < >
        <Header>
            <h1 style={{color:'#FFF'}}>Login Page Company SPY</h1>
        </Header>

        <hr />
        <Content style={{ display:'flex',textAlign:'center',justifyContent:'center', alignItems:'center' }}>
            <Form
                style={{
                    display:'flex',
                    marginTop:-80,
                    minHeight:500,
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
                         <h2>{title}</h2>
                     </Divider>
                </div>
                {children}
                <hr />
                <Footer><small>Company SPY</small></Footer>
            </Form>
        </Content>
    </>
}

export default  LayoutLogin;