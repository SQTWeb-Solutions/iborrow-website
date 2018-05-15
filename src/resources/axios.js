import axios from 'axios'
import store from '@/store'

// default axios information
axios.defaults.baseURL = process.env.VUE_APP_PROXY_URL
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// Request interceptor
axios.interceptors.request.use(request => {
  const token = store.getters['auth/token']
  if (token) {
    request.headers.common['Authorization'] = `Bearer ${token}`
  }
  // request.headers['X-Socket-Id'] = Echo.socketId()

  return request
})

// Response interceptor
axios.interceptors.response.use(response => response, error => {
  const { status } = error.response

  if (status >= 500) {
    console.log('505 error here')
  }

  if (status === 401 && store.getters['auth/check']) {
    console.log('Error happens here')
  }

  return Promise.reject(error)
})
