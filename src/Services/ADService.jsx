import axios from './CustomerAxios';

const signup = (staffName, username, password) => {
    return axios.post("/staff-auth/signup", { staffName, username, password })
}

export { signup };