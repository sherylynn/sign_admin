import { request } from '../utils'
import { config } from '../utils'
export async function query (params) {
  return request(config.host+config.users, {
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
