const {topic,topicPage} = require("../../api/login") 
// pages/exam2/exam2.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    type:'study',
    uid: wx.getStorageSync('uid'),
    info:null
    // Loading : false,
    // time: 60 * 60 * 60 * 1000
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    this.begin()
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
  begin() {
    let type = this.data.type
    let uid = this.data.uid
    topic({uid,type}).then(res=>{
      console.log(res,"返回的第一题是什么");
      this.setData({
        info:res
      })
    })
  },
  radioChange(a){
    console.log(a,"wodianjide");
  }
})