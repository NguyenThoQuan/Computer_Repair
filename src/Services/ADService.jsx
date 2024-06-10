import axios from './CustomerAxios';

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

const signup = (staffName, username, password) => {
    return axios.post("/staff-auth/signup", { staffName, username, password })
}

const login = (username, password) => {
    return axios.post("/staff-auth/login", { username, password })
}

const getStaffAuth = () => {
    return axios.get("/staff-auth/")
}

const postService = async (nameService, description, expectedPrice, serviceUrl) => {
    const formData = new FormData();
    formData.append('nameService', nameService);
    formData.append('description', description);
    formData.append('expectedPrice', expectedPrice);
    formData.append('serviceUrl', serviceUrl);

    try {
        const response = await axios.post('/services/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error uploading service:', error);
        throw error;
    }
};

const getService = () => {
    return axios.get("http://localhost:3002/services/");
}

const getBooking = () => {
    return axios.get("/ticketdetails/")
}

const postStatus = (ticketId, staffUserId, status, price) => {
    return axios.post("/ticketprocess/", { ticketId, staffUserId, status, price })
}

const getInvoice = () => {
    return axios.get("/invoice/")
}

const patchService = (_id, data) => {
    return axios.patch(`/services/${_id}`, data);
}

const patchCalendar = (_id, data) => {
    return axios.patch(`/ticketdetails/${_id}`, data);
}

const patchTickets = (_id, data) => {
    return axios.patch(`/tickets/${_id}`, data);
}

const deleteCalendar = (_id) => {
    return axios.delete(`/ticketdetails/${_id}`);
}

const deleteService = (_id,) => {
    return axios.delete(`/services/${_id}`);
}

export { signup, login, postService, getService, getBooking, postStatus, getInvoice, getStaffAuth, deleteCalendar, deleteService, patchCalendar, patchTickets, patchService };