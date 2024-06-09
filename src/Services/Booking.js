import axios from "./CustomerAxios";

const getCustomers = () => {
    return axios.get("/customers/");
}

const customers = (name, phoneNumber) => {
    return axios.post("/customers/", { name, phoneNumber });
}

const getServices = () => {
    return axios.get("/services/");
}

const getBookingDetails = () => {
    return axios.get("/ticketdetails/");
}

const postTicket = (customersId, time) => {
    return axios.post("/tickets/", { customersId, time })
}

export { getCustomers, customers, getServices, getBookingDetails, postTicket };