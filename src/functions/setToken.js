import axios from 'axios';


export const setToken = (token) => {

    axios.defaults.headers.post['Token']    = token;
    axios.defaults.headers.get['Token']     = token;
    axios.defaults.headers.put['Token']     = token;
    axios.defaults.headers.delete['Token']  = token;
}