import axios from 'axios'
import { useUserStore } from '@/stores'
import { ElMessage } from 'element-plus'
import router from '@/router'

const baseURL = 'https://big-event-vue-api-t.itheima.net'

const instance = axios.create({
  baseURL: baseURL,
  timeout: 3000,
  headers: { 'X-Custom-Header': 'foobar' }
})

// request interceptors
instance.interceptors.request.use(
  function (config) {
    // before request
    const useStore = useUserStore()
    if (useStore.token) {
      config.headers.Authorization = useStore.token
    }
    return config
  },
  function (error) {
    // error handler
    return Promise.reject(error)
  }
)

// response interceptors
instance.interceptors.response.use(
  function (response) {
    // 2xx status code
    if (response.data.code === 0) {
      return response
    }

    // 錯誤提示
    ElMessage.error(response.data.message || 'error')
    return Promise.reject(response.data)
  },
  function (error) {
    // 401 權限不足或 token 過期
    if (error.response?.status === 401) {
      router.push('/login')
    }

    // 默認錯誤直接提示
    ElMessage.error(error.response?.data.message || 'error')
    return Promise.reject(error)
  }
)

export default instance
export { baseURL }
