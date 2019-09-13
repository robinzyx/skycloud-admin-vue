import request from '@/router/axios';
import {baseUrl} from '@/config/env';

// 抽取任务

export function paged(params) {
  return request({
    url: '/api/datax/jobConfig',
    method: 'get',
    params
  })
}

export function fetch(params) {
  return request({
    url: '/api/datax/jobConfig/' + params,
    method: 'get'
  })
}

export function updated(data) {
  return request({
    url: '/api/datax/jobConfig/',
    method: 'put',
    data
  })
}

export function created(data) {
  return request({
    url: '/api/datax/jobConfig/',
    method: 'post',
    data
  })
}

export function deleted(data) {
  return request({
    url: '/api/datax/jobConfig/',
    method: 'delete',
    params: data
  })
}

export function viewJobLog(params) {
  return request({
    url: '/api/datax/viewJobLog',
    method: 'get',
    params
  })
}
