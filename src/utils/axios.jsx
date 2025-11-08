import axios from "axios";
const base = import.meta.env.VITE_BASE_URL || import.meta.env.BASE_URL || "";
const instance = axios.create({
    baseURL: base,
    
    
})

export default instance;