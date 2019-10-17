import request from '@/utils/request'

export function fetchStationList () {
  return request({
    url: '/substation/search',
    method: 'get'
  })
}

export function fetchLineList (data) {
  return request({
    url: '/line/search',
    method: 'post',
    data
  })
}
