import Mock from 'mockjs'
import CONSTANTS from '@/constants'

Mock.mock(/\/substation\/search/, 'get', getsubstationList)
Mock.mock(/\/line\/search/, 'post', getLineList)

function getsubstationList (config) {
  return Mock.mock({
    code: CONSTANTS.RESPONSE_CODE_SUCCESS,
    'data|5-10': [{
      'id': '@id',
      'name': '@ctitle(3,8)'
    }]
  })
}

function getLineList (config) {
  return Mock.mock({
    code: CONSTANTS.RESPONSE_CODE_SUCCESS,
    'data|5-10': [{
      'id': '@id',
      'name': '@ctitle(3)',
      'info': {
        'title': '@ctitle(20)',
        'pics': [1, 2],
        'content': '@cparagraph(20,40)',
        'likes': '@integer(100,20000)',
        'comments|5-10': [
          {
            'userId': '@id',
            'name': '@cname',
            'content': '@csentence',
            'time': '@date(MM-dd)',
            'likes': '@integer(100,20000)'
          }
        ]
      }
    }]
  })
}
