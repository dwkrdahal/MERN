import * as axios from "axios";

const http = axios.create({
    baseURL: "http://localhost:9005/",
    timeout:30000,
    responseType: "json",
    headers: {
        "authorization": localStorage.getItem('token')
    }
});

const postItem = (url, data, is_strict = false) => {
    
    return new Promise((res, rej) => {
        http.post(url, data, getHeaders(is_strict))
        .then((response) => {
            res(response);
        })
        .catch((err) => {
            rej(err);
        })
    })
    
}

let headers ={};
const getHeaders = (is_strict) => {
    if(is_strict){
        headers = {
            headers: {
            "authorization": localStorage.getItem('token')
            }
        }
    }
    return headers;
}

const getItems = (url, is_strict = false) => {
    
    return new Promise((res, rej) => {
        http.get(url, getHeaders(is_strict))
        .then((success) => {
            res(success);
        })
        .catch((error) => {
            rej(error);
        })
    })
}

export {postItem, getItems};