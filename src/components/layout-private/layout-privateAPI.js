import axios from 'axios';

export const getAllRoutesAccess = async ( pk ) => {
    try {
        const { data } = await axios.get(`/api/access/routes/${pk}`);
        
        return {...data,status:true};
    }catch (e) {
        return {status:false,message:e.toString()};
    }
}