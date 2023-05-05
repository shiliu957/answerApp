// pages/mine/mine.js
// 引入请求函数
import Toast from '@vant/weapp/toast/toast';
const {login,userinfo,EditName} = require("../../api/login") 
var app = getApp()
var bus = app.globalData.bus

Page({
  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    userInfo:null,
    activeName: 0,
    nickName:null,
    usename:null
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
    console.log("$$$$$$$$$$$");
    wx.getStorage({key: 'uid'}).then(data=>{
      wx.navigateTo({
        url: '/pages/TestScore/TestScore'
      })
    }).catch(err=>{
      Toast('请先登录金博纳电力题库');
      // Dialog.alert({
      //   title: '提示',
      //   message: '请先登录金博纳电力题库',
      // }).then(() => {
      //   Toast('qingqing');
      // });
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
  EditName(){
    this.setData({ show: true });
  },
  confirm() {
    let uid = wx.getStorageSync('uid')
    let nickName = this.data.usename
    EditName({uid,nickName}).then(res=>{
      userinfo({uid}).then(res=>{
        wx.setStorageSync('nickName',nickName)
        this.setData({
          nickName:nickName,
          usename:""
        })
      })
    })
  },
  onClose() {
    this.setData({ show: false });
  },
   getUserProfile() {
    let userInfo = this.data.userInfo
    if (userInfo !== "") {
      this.EditName()
      return
    }
    var that = this
    wx.getUserProfile({
      desc: '用于完善信息',
    success(res){
      var user = res.userInfo
      that.setData({
        userInfo:user
      })
      wx.setStorageSync('userInfo',user)

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
                let nickName = nickName === null ? "题友" : res.nickName
                wx.setStorageSync('nickName',nickName)
                that.setData({
                  nickName:nickName
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
