const axios = require('axios');

export function getPosts(){
    return axios.get('https://my-json-server.typicode.com/sebasfili/reactApi/drinks');
}

