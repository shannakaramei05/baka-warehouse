import axios from "axios";

const BASE_URL_API = "http://localhost:3000"


export function doGet (url){
    return  axios.get(BASE_URL_API + url);
}


export function doPost(url, data) {
    return axios.post(BASE_URL_API + url, data)
}