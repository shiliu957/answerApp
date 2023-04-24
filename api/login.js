const { request } = require("../utils/request.js") 

const url = {
  login:'/api/member/login',
  userinfo:'/api/member/userinfo',
  topic:'/api/topic/index',   //习题练习接口
  check:'/api/topic/check',   //习题提交接口
  video:'/api/video/index',   //视频接口
  handout:'/api/handout/index',   //讲义列表接口
}
function login(data){
  return request(url.login, 'POST', data)
}
function userinfo(data){
  return request(url.userinfo, 'POST', data)
}
function video(data){
  return request(url.video, 'POST', data)
}
function topic(data){
  return request(url.topic, 'POST', data)
}

module.exports = {
  login,
  userinfo,
  video,
  topic,
}