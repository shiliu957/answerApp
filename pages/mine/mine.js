// pages/mine/mine.js
// 引入请求函数
const {login,userinfo} = require("../../api/login") 

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
  async getUserProfile(e) {
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
        wx.login({
          success: res => {
            // 发送 res.code 到后台换取 openId, sessionKey, unionId
            let code = res.code
            login({
              js_code: code,
            }).then(res=>{
              wx.setStorageSync('token',res.token)
              wx.setStorageSync('uid',res.uid)
              userinfo({ data:that.data.userInfo,}).then(res=>{
                console.log(res,"fanhuide");
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
