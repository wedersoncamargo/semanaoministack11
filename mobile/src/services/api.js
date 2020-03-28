import axios from 'axios';
//192.168.1.97

const api = axios.create({
    baseURL: 'http://192.168.1.97:3333'
});

export default api;