import Axios from 'axios'
import { ElMessage } from 'element-plus'

const isProd = import.meta.env.PROD

const axiosInstance = Axios.create({
  baseURL: isProd ? 'https://my-app-vue3/' : 'https://127.0.0.1:9001/',
  timeout: 30000
})

/** 请求拦截*/
axiosInstance.interceptors.request.use(
  (config) => {
    // console.log(config);
    /** 根据项目实际情况处理 config*/
    //    code...
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

/** 响应拦截*/
axiosInstance.interceptors.response.use(
  (response) => {
    /** 根据项目实际情况处理 response*/
    //    code...
    return response
  },
  (error) => {
    if (error.response && error.response.data) {
      const code = error.response.status
      const msg = error.response.data.message
      ElMessage.error(`Code: ${code}, Message: ${msg}`)
      console.error(`[Axios Error]`, error.response)
    } else {
      ElMessage.error(`${error}`)
    }
    return Promise.reject(error)
  }
)

export default axiosInstance
