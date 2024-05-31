import axios from "./CustomerAxios";

const booking = (name, phoneNumber) => {
    return axios.post("/customers/", { name, phoneNumber });
}

const getServices = () => {
    return axios.get("/services/");
}

export { booking, getServices };