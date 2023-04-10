import axios from "axios";
export const baseUrl = '/api';
// export const baseUrl = "http://192.168.43.244:8080";
// axios.defaults.baseURL = '/api';
// export const baseUrl = axios.defaults.baseURL ;

// 第一步，创建实例
const instance = axios.create({
    baseURL: baseUrl,
    timeout: 120000 //毫秒
})
// 第二步 请求拦截
instance.interceptors.request.use(function (config) { 
    // 在发送请求之前做什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
})
// 第三步 响应拦截
instance.interceptors.request.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});
export default instance;


// get请求
// @param {*}url请求地址
// @param {*}params url参数

export function get(url, {params}) {
    return instance.get(url, {
        params
     })
}

// post请求
// @param {*}url请求地址
// @param {*}params data数据
export function post(url, data) {
    return instance.post(url, data)
}

export function put(url, data) {
    return instance.put(url, data)
}

export function del(url) {
    return instance.delete(url)
}