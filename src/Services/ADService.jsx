import axios from './CustomerAxios';

const signup = (staffName, username, password) => {
    return axios.post("/staff-auth/signup", { staffName, username, password })
}

const login = (username, password) => {
    return axios.post("/staff-auth/login", { username, password })
}

export { signup, login };