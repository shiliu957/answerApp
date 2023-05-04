const { request } = require("../utils/request.js") 

const url = {
  login:'/api/member/login',
  userinfo:'/api/member/userinfo',
  topic:'/api/topic/index',   //习题接口
  topicPage:'/api/topic/page',//上一提下一题接口
  submit:'/api/topic/submit',   //提交接口
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
function topic(data){ //data需要传一个对象{uid和type}
  return request(url.topic, 'POST', data)
}
function topicPage(data){
  return request(url.topicPage,'POST',data)
}
function handout(data){
  return request(url.handout, 'POST', data)
}
function submit(data){
  return request(url.submit, 'POST', data)
}

module.exports = {
  login,
  userinfo,
  video,
  topic,
  topicPage,
  handout,
  submit
}