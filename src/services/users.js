import { request } from '../utils'
import { config } from '../utils'
const qs = require('qs')
export async function query (params) {
  //console.log(params)
  //console.log(Object.entries(params))
  //console.log(qs.stringify(Object.entries(params)))
  //使用了一些麻烦的api 可行,思考的时候考虑过JSON.stringify 最后尝试 
  return request(config.host+config.users+'?'+Object.keys(params)[0]+'='+Object.values(params)[0]+'&'+Object.keys(params)[1]+'='+Object.values(params)[1], {
  //对entries 理解有误,返回的是数组,而不是分开的对象
  //return request(config.host+config.users+'?'+qs.stringify(Object.entries(params)), {
    method: 'get',
    mode: 'cors',
    headers: {
      "Content-Type": "application/json"
    },
    data: JSON.stringify(params)
  })
}

export async function create (params) {
  return request(config.host+config.users, {
    method: 'post',
    mode: 'cors',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(params)
  })
}

export async function remove (params) {
  console.log(params);
  return request(config.host+config.users, {
    method: 'delete',
    mode: 'cors',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(params)
  })
}

export async function update (params) {
  return request(config.host+config.users, {
    method: 'put',
    mode: 'cors',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(params)
  })
}
