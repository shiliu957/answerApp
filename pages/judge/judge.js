const {topic,topicPage} = require("../../api/login") 
import Toast from '@vant/weapp/toast/toast';
// pages/exam2/exam2.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    index:1,
    ItemChecked:false,
    database:{
      A:false,
      B:false,
      C:false,
      D:false,
    },
    from:'study',
    uid: wx.getStorageSync('uid'),
    info:null,
    option: [
      { text: '选择题', value: 0 },
      { text: '填空题', value: 1 },
      { text: '论述题', value: 2 },
    ],
    type: 0,
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
    let from = this.data.from
    let type = this.data.type
    let uid = this.data.uid
    let c_id = getApp().globalData.c_id
    topic({uid,from,type,c_id}).then(res=>{
      this.setData({
        info:res
      })
    })
  },
  prePage() {
    if (this.data.index===1) {
      Toast('已经是第一题啦~~~');
      return
    }
    let index = this.data.index
    index--
    let from = this.data.from
    let c_id = getApp().globalData.c_id
    let type = this.data.type
    let uid = this.data.uid
    topicPage({
      uid,
      from,
      c_id,
      type,
      topic_num:this.data.info.id * 1,
      page:"prev"
    }).then(res=>{
      this.setData({
        index,
        info:res,
        database:{
          A:false,
          B:false,
          C:false,
          D:false,
        },
        ItemChecked:false
      })
    })

  },
  nextPage(){
    if (this.data.info.state==='final') {
      Toast('已经是最后一题啦~~~');
      return
    }
    let index = this.data.index
    index++
    let from = this.data.from
    let c_id = getApp().globalData.c_id
    let type = this.data.type
    let uid = this.data.uid
    topicPage({
      uid,
      from,
      c_id,
      type,
      topic_num:this.data.info.id * 1,
      page:"next"
    }).then(res=>{
      this.setData({
        index,
        info:res,
        database:{
          A:false,
          B:false,
          C:false,
          D:false,
        },
        ItemChecked:false
      })
    })

  },
  radioChange(a){
    console.log(a,"wodianjide");
    if (this.data.info.answer === a.detail.value) {
      return
    }
    this.setData({
      ItemChecked:true
    })
  },
  handlerC() {
    this.setData({
      index:1
    })
    this.begin()
  }
})