import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://chp1gpwb2e.execute-api.us-east-2.amazonaws.com/test',
});

export default axiosInstance;