import { request } from '../utils'
import { config} from '../utils'
let myHeaders = new Headers({
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'text/plain'
});
export async function myCity (params) {
  return request('http://www.zuimeitianqi.com/zuimei/myCity', {
    method: 'get',
    headers:myHeaders,
    mode:'cors',
    data: params
  })
}

export async function queryWeather (params) {
  return request('http://www.zuimeitianqi.com/zuimei/queryWeather', {
    method: 'get',
    headers:myHeaders,
    mode:'cors',
    data: params
  })
}

export async function query (params) {
  return request(config.host+config.dashboard, {
    method: 'get',
    headers:myHeaders,
    mode:'cors',
    data: params
  })
}
