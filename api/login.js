const { request } = require("../utils/request.js") 

const url = {
  login:'/api/member/login',
  userinfo:'/api/member/userinfo',
}
function login(data){
  return request(url.login, 'POST', data)
}
function userinfo(data){
  return request(url.userinfo, 'POST', data)
}

module.exports = {
  login,
  userinfo,
}