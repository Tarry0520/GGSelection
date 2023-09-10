//进行axios二次封装:使用请求与相应拦截器
import axios from 'axios'
import { ElMessage } from 'element-plus'
//创建axios实例
const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API, //基础路径会携带/api
  timeout: 5000, //超时代时间
})

//请求拦截器
request.interceptors.request.use((config) => {
  //config配置对象,headers属性请求头,经常给服务器端携带公共参数
  //返回配置对象那个
  return config
})
//响应拦截器
request.interceptors.response.use(
  //成功回调
  //简化数据
  (response) => {
    return response.data
  },
  (error) => {
    //失败的回调
    //处理网络错误
    let msg = ''
    const status = error.response.status
    switch (status) {
      case 401:
        msg = 'token过期'
        break
      case 403:
        msg = '无权访问'
        break
      case 404:
        msg = '请求地址错误'
        break
      case 500:
        msg = '服务器出现问题'
        break
      default:
        msg = '无网络'
    }
    ElMessage({
      type: 'error',
      message: msg,
    })
    return Promise.reject(error)
  },
)
export default request
