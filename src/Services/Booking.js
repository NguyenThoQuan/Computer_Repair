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

const getTicket = () => {
    return axios.get("/tickets/");
}

const postTicket = (customerId, time) => {
    return axios.post("/tickets/", { customerId, time })
}

const postTicketDetails = (ticketId, serviceId) => {
    return axios.post("/ticketdetails/", { ticketId, serviceId })
}

export { getCustomers, customers, getServices, getBookingDetails, postTicket, postTicketDetails, getTicket };