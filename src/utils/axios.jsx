import axios from "axios";

const instance = axios.create({
    baseURL:"change this to backend local host",
})

export default instance;