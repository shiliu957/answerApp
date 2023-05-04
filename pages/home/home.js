import Dialog from '@vant/weapp/dialog/dialog';
// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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
          wx.switchTab({
            url: '/pages/mine/mine'
          })
        });
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
          wx.switchTab({
            url: '/pages/mine/mine'
          })
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