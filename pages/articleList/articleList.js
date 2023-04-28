// pages/articleList/articleList.js
const {handout} = require("../../api/login")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    total:null,
    list:[],
    list1:[],
    a:null
  },
  // <rich-text nodes="{{a}}"/>
  ClickItem(e) {
    wx.navigateTo({
      url: '/pages/articleItem/articleItem',
      success:(res)=>{
        res.eventChannel.emit("getItem",e.target.dataset.item)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    handout({page:1}).then(res=>{
      console.log(res,"后端返回的列表数据");
      let {list,total} = res
      this.setData({
        list,
        total
      })
    })
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