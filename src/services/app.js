import { request } from '../utils'
import { config } from '../utils'
export async function login (params) {
  return request(config.host+config.login, {
    method: 'post',
    mode: 'cors',
    data: params
  })
}

export async function logout (params) {
  return request(config.host+config.logout, {
    method: 'post',
    data: params
  })
}

export async function userInfo (params) {
  return request(config.host+config.userInfo, {
    method: 'get',
    data: params
  })
}
