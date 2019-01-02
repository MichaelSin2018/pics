import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 8c8e60e1c03338a4b95e265573822824fcdfed56d9e43d42c2d1a5f177b4412c'
    }
})