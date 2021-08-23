import axios from 'axios';
import { notification } from 'antd';
// import { store } from '../../app/store';
// import { singOutUser } from '../../features/login/loginSlice';

export const getAllRoutesAccess = async ( pk ) => {
    try {
        const { data } = await axios.get(`/api/access/routes/${pk}`);
        
        return {...data,status:true};
    }catch (e) {
        notification.open({
            message: 'Error',
            description:e.toString(),       
        });
        // store.dispatch(singOutUser(pk||0));
        return {status:false,message:e.toString()};
    }
}