const {video} = require("../../api/login")
// pages/videoList/videoList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page:1,
    total:null,
    list:[],
  },
  MyVideo(e){
    wx.navigateTo({
      url: '/pages/MyVideos/MyVideos',
      success:(res)=>{
        res.eventChannel.emit("getItem",e.target.dataset.item)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getVideoList()
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
  getVideoList(){
    let page = this.data.page
    let c_id = getApp().globalData.c_id
    video({page,c_id}).then(res=>{
      console.log(res,"视频列表返回的数据");
      const {list,total} = res
      this.setData({
        list,
        total
      })
    })
  }
})