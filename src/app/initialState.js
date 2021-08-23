

const initialStateLogin = {
    email:'',
    password:'',
    sesion:null,
    loading:false,
};
const initialStateLayout = {
    menus: [],
    loaddin: false,
    collapsed:false,
}

const initialState = {
    login: initialStateLogin,
    layout: initialStateLayout
}

const persistedState = localStorage.getItem('state') 
    ? JSON.parse(localStorage.getItem('state') || JSON.stringify( initialState ))
    : initialState;



export default persistedState;