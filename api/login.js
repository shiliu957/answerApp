import {request} from "../utils/request.js"

export function login(data){
  return request('/api/member/login', 'post', data)
}
// const apiHttp = "nttps://eiomtotwoo.com/api/member/userinfo"; // 后端IP地址
// // 请求
// function request(url, method, data, header) {
//     data = data || {};
//     header = header || {};
//     let token = wx.getStorageSync("token"); // 在本地缓存中获取token
//     if(token) {
//         if(!header || !header["Authorization"]) {
//             header["Authorization"] = token;
//         }
//     }
//     wx.showNavigationBarLoading(); // 在当前页面显示导航条加载动画
//     let promise = new Promise(function(resolve, reject) {
//         wx.request({
//             url: apiHttp + url,
//             header: header,
//             data: data,
//             method: method,
//             success: function(res) {
//                 // 开发者服务器返回的 HTTP 状态码
//                 if(res.statusCode == 401) { // token过期，重新执行登录流程
//                     reLogin().then(() => {
//                         resolve();
//                     }).catch(reason => {
//                         console.log(reason);
//                     })
//                 }
//                 resolve(res);
//             },
//             fail: reject,
//             complete: function() {
//                 wx.hideNavigationBarLoading();
//             }
//         })
//     })
//     return promise;
// }

// // 重新登录
// function reLogin() {
//     return new Promise((resolve, reject) => {
//         // 先移除已存在的token
//         wx.removeStorageSync('token');
//         wx.showToast({
//             title: '登录信息过期',
//             icon: "none",
//             duration: 1000 // 持续时间
//         })
//         setTimeout(() => {
//             wx.showLoading({ // 显示 loading 提示框。需主动调用 wx.hideLoading 才能关闭提示框
//                 title: '重新登录中',
//                 mask: true, // 是否显示透明蒙层，防止触摸穿透
//                 success: function() {
//                     wx.login({
//                         success: res => {
//                             request('/user/login',"POST",{
//                                 code: res.code
//                             }).then(res => {
//                                 wx.hideLoading();
//                                 if(res.statusCode == 200) {
//                                     let token = res.data.token;
//                                     wx.setStorageSync('token',token);
//                                     wx.showToast({
//                                         title: '登陆成功',
//                                         icon: 'success'
//                                     })
//                                     resolve();
//                                 } else {
//                                     reject(res.data.msg);
//                                 }
//                             })
//                         }
//                     })
//                 }
//             })
//         }, 1000)
//     })
// }

// module.exports = {
//     apiHttp: apiHttp,
//     "post": function(url, data, header) {
//         return request(url, "POST", data, header);
//      }
// }