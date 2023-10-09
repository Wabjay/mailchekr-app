import axios from 'axios';

export default axios.create({
    baseURL: 'https://mail-checkr-api.onrender.com/api/'
});