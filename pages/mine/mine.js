// pages/mine/mine.js
// 引入请求函数
const {login,userinfo,EditName} = require("../../api/login") 
var app = getApp()
var bus = app.globalData.bus

Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo:null,
    activeName: 0,
    nickName:null,
  },
  onLoad(){
    this.setData({
      userInfo:wx.getStorageSync('userInfo'),
      nickName:wx.getStorageSync('nickName')
    })
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
   getUserProfile(e) {
    let userInfo = this.data.userInfo
    if (userInfo !== null) return
    var that = this
    wx.getUserProfile({
      desc: '用于完善信息',
    success(res){
      var user = res.userInfo
      that.setData({
        userInfo:user
      })
      app.globalData.userInfo = user
      console.log(app.globalData);
      ;

        wx.login({
          success: res => {
            // 发送 res.code 到后台换取 openId, sessionKey, unionId
            let code = res.code
            login({
              js_code: code,
            }).then(res=>{
              wx.setStorageSync('token',res.token)
              wx.setStorageSync('uid',res.uid)
              userinfo({uid:res.uid}).then(res=>{
                console.log(res,"fanhuide");
                that.setData({
                  nickName:res.nickName
                })
                // EditName({uid:res.id,nickName:"十六1"}).then(res=>{
                //   console.log(res);
                // })
              },
              (err)=>{
                console.log("失败",res);
              })
            },
            (err)=>{
              console.log("失败",res);
            })



          }
        })

      }
    })
  }
})
