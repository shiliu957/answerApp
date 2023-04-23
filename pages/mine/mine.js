// pages/mine/mine.js
// 引入请求函数
import {login} from "../../api/login"

Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo:null,
    activeName: 0,
    islogin:false,
    message:{
      nickName:"",
      gender:"",
      language:"",
      avatarUrl:"",
      province:"",
      city:"",     
      tel:"",     
    }
  },
  AnswerRecord() {
    // alert(111);
    wx.navigateTo({
      url: '/pages/AnswerRecord/AnswerRecord'
    })
  },
  TestScore() {
    // alert(111);
    wx.navigateTo({
      url: '/pages/TestScore/TestScore'
    })
  },
  MyVideos() {
    // alert(111);
    wx.navigateTo({
      url: '/pages/MyVideos/MyVideos'
    })
  },
  MyArticles() {
    // alert(111);
    wx.navigateTo({
      url: '/pages/MyArticles/MyArticles'
    })
  },
  change(e) {
    this.setData({
      activeName: e.detail
    })
  },
 async login() {
  let res = await login({
    js_code: code,
    // grant_type:'authorization_code'
  })
  console.log(res,"*********");
 },
  async getUserProfile(e) {
    let userInfo = this.data.userInfo
    if (userInfo !== null) return
    var that = this
    wx.getUserProfile({
      desc: '用于完善信息',
    success(res){
      console.log(res.userInfo,"wwwwwwww");
      var user = res.userInfo
      let {avatarUrl,city,country,gender,language,nickName,province} = user
      that.setData({
        userInfo:user
      })
        wx.login({
          success: res => {
            // 发送 res.code 到后台换取 openId, sessionKey, unionId
            let code = res.code
           let go = that.login({
              js_code: code,
              // grant_type:'authorization_code'
            })
            console.log(go,"fanhuideshuju");
            wx.request({
              url: 'https://eiom.totwoo.com/api/member/login',
              mothod:'POST',
              // mothod:'GET',
              data:{
                js_code: code,
                // grant_type:'authorization_code'
              },
              success:(res) => {
                wx.setStorageSync('token',res.data.data.token)
              },
              fail:(err)=>{
                console.log("失败",res);
              }
            })
          //  let res = request("/api/member/login",{ js_code: code})
          //  wx.setStorageSync('token',res.data.data.token)
            // console.log(res,"我是封装zzhi'hohihou的登录");
            wx.request({
              url: 'https://eiom.totwoo.com/api/member/userinfo',
              method:"post",
              data:that.data.userInfo,
              header:{
                //   wx.getStorageSync('token') 从缓存中取出token值
                "authorization": wx.getStorageSync('token')
              },
              success:(e)=>{

              },
        })
            
          }
        })

      }
    })
  }
})
