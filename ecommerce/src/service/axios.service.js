import * as axios from "axios";

const http = axios.create({
    baseURL: "http://localhost:9005/",
    timeout: 30000,
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

let headers = {};
const getHeaders = (is_strict) => {
    if (is_strict) {
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

const uploader = (method, url, data, file = []) => {
    return new Promise((resolve, reject) => {
        //ready to submit the form.
        const xhr = new XMLHttpRequest();
        const formData = new FormData();

        if (file && file.length > 0) {
            let image = file;
            image.map((o) => {
                formData.append("image",o, o.name)
            })
        }

        for (let item in data) {
            formData.append(item, data[item]);
        }

        xhr.onreadystatechange = function () {
            let response = null;
            if (this.readyState == XMLHttpRequest.DONE) {
                if (typeof this.response != "object") {
                    response = JSON.parse(this.response);
                }

                if (response.status) {
                    resolve(response)
                } else {
                    reject(response)
                }
            }
        }

        xhr.open(method, process.env.REACT_APP_API_URL+"/"+url);
        xhr.send(formData);
    })
}

export { postItem, getItems, uploader };