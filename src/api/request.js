import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 1000
  })

  instance.interceptors.request.use(config =>{
    return config
  }, err =>{
    console.error("interceptors.request", err);
  })

  instance.interceptors.response.use(res =>{
    return res.data
  }, err =>{
    console.error(err);
  })

  return instance(config)
}
export function req(config) {
  const instance = axios.create({
    baseURL: 'http://api.xuandan.com/DataApi',
    timeout: 1000,

  })

  instance.interceptors.request.use(config =>{
    return config
  }, err =>{
    console.error("interceptors.request", err);
  })

  instance.interceptors.response.use(res =>{
    return res.data
  }, err =>{
    console.error(err);
  })

  return instance(config)
}