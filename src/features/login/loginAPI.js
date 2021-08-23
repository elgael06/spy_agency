import axios from "axios";
import { notification } from 'antd';
import { setToken } from "../../functions/setToken";

export const singInUserApi = async ({
    email='',
    password=''
}) => {
    const {status,data} = await axios.post('/api/user/account/login',{
        email,
        password,
    }).catch() || {};
    setToken(data.token);

    if (data.status){ notification.open({
        message: 'Login',
        description:data.message,            
    });
        return status===200 ? data : null;
    }else {
        notification.open({
            message: 'Login',
            description:'Error while logging.',            
        });
        return null;
    }
}

export  const createAccountApi = async ({
email='',
last_name='',
name='',
nikename='',
password='',
}) => {
    const { status, data } = await axios.post('/api/user/register',
        { email, last_name, name, nikename,password, });

    return status===200 ? data : null;
}

export const logoutAPI = async (pk) => {
    try {
        const { data }= await axios.get(`/api/user/account/logout/${pk}`);
        notification.open({
            message: 'Logout',
            description: data?.message,            
        });
        return true;
    } catch (e) {
        notification.open({
            message: 'Logout',
            description:'Error while logout.',            
        });
        return false;
    }
}