import axios from 'axios';
export const base_url = 'http://localhost:3000/api';

export const signup = (user) => {
    console.log("===>",user)
    axios.post(`${base_url}/auth/signup`, user)
        .then(res => {
            console.log("Registré",res)
        })
        .catch(err => {
            console.log("Error Signup =====> ", err.response.data.msg);
        })
};


export const login = (user) => {
    console.log("===>",user)
    axios.post(`${base_url}/auth/login`, user)
        .then(res => {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.user));
            console.log("Entré",res)
        })
        .catch(err => {
            console.log("Error Login =====> ", err.response.data.msg);
        })
};