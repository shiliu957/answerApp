// pages/exam1/exam1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      label:[
        {
          title:'考试科目',
          content:'数学'
        },
        {
          title:'试题数量',
          content:'100题'
        },
        {
          title:'考试时间',
          content:'90分钟'
        },
        {
          title:'合格标准',
          content:'满分100分 80分合格'
        },
      ]
  },
  examBegin(){
    wx.navigateTo({
      url: '/pages/examBegin/examBegin',
    })
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