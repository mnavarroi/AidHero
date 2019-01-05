import axios from 'axios';
//export const base_url = 'http://localhost:3000/api';
export const base_url = 'https://aidhero.herokuapp.com/api';

export const signup = (user) => {
    axios.post(`${base_url}/auth/signup`, user)
        .then(res => {
        })
        .catch(err => {
        })
};


export const login = (user) => {
    axios.post(`${base_url}/auth/login`, user)
        .then(res => {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.user));
        })
        .catch(err => {
        })
};