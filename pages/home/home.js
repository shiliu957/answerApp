import Dialog from '@vant/weapp/dialog/dialog';
const {login,userinfo} = require("../../api/login") 
var app = getApp()

var bus = app.globalData.bus
// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // active: 0,
    name:null,
    userInfo:null,
    nickName:null,
    // icon: {
    //   normal: '../../static/images/tabBar/home.png',
    //   active: '../../static/images/tabBar/home1.png',
    // },
  },
  onChange(event) {
    console.log(event,"%%%%%%%%%%%%%%%%%");
    // event.detail 的值为当前选中项的索引
    this.setData({ active: event.detail });
  },
    examClick(){
      wx.getStorage({key: 'uid'}).then(data=>{
        wx.navigateTo({
          url: '/pages/examBeginBtn/examBeginBtn',
        })
      }).catch(err=>{
        Dialog.alert({
          title: '提示',
          message: '请先登录金博纳电力题库',
        }).then(() => {
          this.login()
        });
      })
    },
    login(){
      var that = this
      console.log("%%%%%%%%%%%%%%%%%%%%");
      wx.getUserProfile({
        desc: '用于完善信息',
      success(res){

        var user = res.userInfo
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
                  let nickName = nickName === null ? "题友" : res.nickName
                  wx.setStorageSync('nickName',nickName)
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
    },
    practiceClick() {
      wx.getStorage({key: 'uid'}).then(data=>{
        wx.navigateTo({
          url: '/pages/judge/judge'
        })
      }).catch(err=>{
        Dialog.alert({
          title: '提示',
          message: '请先登录金博纳电力题库',
        }).then(() => {
          this.login()
        });
      })
    },

    videoList(){
      wx.navigateTo({
        url: '/pages/videoList/videoList'
      })
    },

    articleList(){
      wx.navigateTo({
        url: '/pages/articleList/articleList'
      })
    },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let {name} = options
    console.log(name);
    if (name===undefined) {
      name = getApp().globalData.itemName
      this.setData(
        {name}
      )
      
    } else{
      this.setData(
        {name}
      )
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})