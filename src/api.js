import axios from 'axios'

const api = axios.create({
    baseURL: 'http://www.mocky.io/v2/',
    responseType: 'json'
});

export default api;