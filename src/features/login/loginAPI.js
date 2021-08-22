import axios from "axios";

export const singInUserApi = async ({
    email='',
    password=''
}) => {
    const {status,data} = await axios.post('/api/user/account/login',{
        email,
        password,
    }).catch() || {};
    console.log(status,data);
    axios.defaults.headers.post['Token'] = data.token;
    axios.defaults.headers.get['Token'] = data.token;
    axios.defaults.headers.put['Token'] = data.token;
    axios.defaults.headers.delete['Token'] = data.token;

    return status===200 ? data : null;
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