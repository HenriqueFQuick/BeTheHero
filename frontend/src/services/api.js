const axios = require('axios');

const api = axios.create({
    baseUrl: 'http://localhost:3433'
});

export default api;