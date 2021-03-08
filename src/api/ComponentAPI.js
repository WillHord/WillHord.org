import axios from 'axios'

const baseURL = 'https://test.willhord.org/api'

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

const ComponentAPI = axios.create({
    baseURL: baseURL,
    timeout: 1000,
    headers: {
      'Content-Type': 'application/json',
      'accept' : 'application/json',
    }
})

export default ComponentAPI;