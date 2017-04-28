import { request } from '../utils'
import { config } from '../utils'
export async function login (params) {
  //web 端适配
  if (!params.email){
    params.email=params.username
  }
  params.deviceId='web';
  return request(config.host+config.login, {
    method: 'post',
    mode: 'cors',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(params)
  })
}
/*
fetch('http://sign.dev:3000/user/login',{method:'post',body:JSON.stringify({username:'1234'}),headers: {
    "Content-Type": "application/json"
  }})
  */



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
