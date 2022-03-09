import axios from "axios";
const service = axios.create({
    // baseURL: "http://localhost:3000",
    baseURL: "https://apis.netstart.cn/yunyuedu/",
    timeout: 60000,//请求超时时间
    // withCredentials: true,//自动获取后台服务器cookie同步本地
    headers: {
        "Content-Type": "application/json;charset=UTF-8" //表单数据类型
    },

})

// request  拦截器 发送数据到后台服务器前拦截
service.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        // console.log("axios中request报错", error);
        Promise.reject(error);
    }
)

service.interceptors.response.use(
    response => {
        return response.data;
    },
    error => {
        // console.log("axios中response报错", error);
        Promise.reject(error);
    }
)
export function get(url, params) {
    return service.get(url, {
      params, // get 请求时带的参数
      timeout: 10000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    })
  }
export default service;