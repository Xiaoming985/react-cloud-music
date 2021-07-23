import axios from 'axios'
import { message } from 'antd'

/** 
 * 错误信息提示函数
 */
 const tip = msg => {
  message.error({
    content: msg,
    style: {
      marginTop: '20vh',
    }
  });
}

/** 
 * 跳转登录页
 * 携带当前页面路由，用以在登录页面完成登录后返回当前页面
 */
 const toLogin = () => {
  
}

/** 
 * 请求失败后的错误统一处理 
 * @param {Number} status 请求失败的状态码
 */
const errHandle = (status, other) => {
  // 状态码判断
  switch (status) {
    // 401: 未登录状态，跳转登录页
    case 401:
        toLogin();
        break;
    // 403 token过期
    // 清除token并跳转登录页
    case 403:
        tip('登录过期，请重新登录');
        localStorage.removeItem('token');
        setTimeout(() => {
            toLogin();
        }, 1000);
        break;
    // 404请求不存在
    case 404:
        tip('404: 请求的资源不存在'); 
        break;
    default:
        console.log(other);   
  }
}

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 30 * 1000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json;charset=utf-8"
  }
})
// instance.defaults.withCredentials = false

instance.interceptors.request.use(
  config => {
    // modify config and then return it 
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

instance.interceptors.response.use(
  res => {
    return res.data // return Promise.resolve(res.data)
  },
  err => {
    const { response } = err
    if (response) {
      // 请求已发出，但是不在2xx的范围
      errHandle(response.status, response.data.message)
      return Promise.reject(response)
    } else {
      // 处理断网的情况
      if (!window.navigator.onLine) {
        
      } else {
        return Promise.reject(err)
      }
    }
  }
)

export default instance;