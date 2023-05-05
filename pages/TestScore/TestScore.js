// pages/TestScore/TestScore.js
const {userinfo} = require("../../api/login") 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    score:0,
    updated_at:null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getinfo()
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

  },
  getinfo(){
    let uid = wx.getStorageSync('uid')
    userinfo({uid}).then(res=>{
      console.log(res,"回来的分数");
      let {updated_at,score} = res
      this.setData({
        updated_at,
        score
      })
    })
  }
})