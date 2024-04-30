import axios from "axios";

const fetchBank = () => {
    return axios.get("https://api.vietqr.io/v2/banks");
}

export { fetchBank };