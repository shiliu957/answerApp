import Dialog from '@vant/weapp/dialog/dialog';
const {topic,topicPage,submit,getTopic} = require("../../api/login") 
// pages/exam2/exam2.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    error:1001,
    index:1,
    show: false,
    percentage: 0 ,
    Loading : false,
    time: 60 * 60 * 1000,
    // ItemChecked:false,
    database:{
      A:false,
      B:false,
      C:false,
      D:false,
    },
    from:'exam',
    uid: wx.getStorageSync('uid'),
    info:null,
    answer:{},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.begin()
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
  inquire(id){
    if (this.data.answer[id] === undefined) {
      return
    }
    let answer = this.data.answer[id]
    let database = {
      A:false,
      B:false,
      C:false,
      D:false,
    }
    database[answer] = true
    this.setData({
      database
    })
  },
  onClickShow() {
    this.setData({ show: true });
  },

  onClickHide() {
    this.setData({ show: false });
  },

  itemClick(e){
    // console.log(e.target.dataset.num,"$$$$$$$$$$$$$$$");
    let id = e.target.dataset.num
    let c_id = getApp().globalData.c_id
    getTopic({
      id,
      c_id
    }).then(res=>{
      // console.log(res,"%%%%%%%%%%%%%%%%%");
      this.setData({
        info:res,
        percentage: res.id * 1,
        database:{
          A:false,
          B:false,
          C:false,
          D:false,
        },
      })
      this.inquire(res.id)
    })
  },
  begin() {
    let from = this.data.from
    let uid = this.data.uid
    let c_id = getApp().globalData.c_id
    topic({uid,from,c_id}).then(res=>{
      // console.log(res,"这是考试返回的数据");
      this.setData({
        info:res,
        percentage: res.id * 1,
        error:0
      })
    },e=>{
      this.setData({
        error:e
      })
    })
  },
  commit(){
    let answer = JSON.stringify(this.data.answer)
    let uid = this.data.uid
    let c_id = getApp().globalData.c_id
    submit({
      answer,
      uid,
      c_id
    }).then(res=>{
      // console.log(res,"您的分数");
      Dialog.alert({
        title: '您的分数: ' + res.score,
        message: res.content,
      }).then(() => {
        wx.switchTab({
          url: '/pages/homepage/homepage'
        })
      });
    })
  },
  prePage(){
    let index = this.data.index
    index--
    let from = this.data.from
    let uid = this.data.uid
    let c_id = getApp().globalData.c_id
    topicPage({
      uid,
      from,
      c_id,
      topic_num:this.data.info.id,
      page:"prev"
    }).then(res=>{
      // console.log(res,"考试的上一题");
      this.setData({
        index,
        info:res,
        percentage: res.id * 1,
        database:{
          A:false,
          B:false,
          C:false,
          D:false,
        },
      })
      this.inquire(res.id)
    })
  },
  nextPage(){
    let index = this.data.index
    index++
    let from = this.data.from
    let uid = this.data.uid
    let c_id = getApp().globalData.c_id
    topicPage({
      uid,
      from,
      c_id,
      topic_num:this.data.info.id,
      page:"next"
    }).then(res=>{
      // console.log(res,"考试的下一题");
      this.setData({
        index,
        info:res,
        percentage: res.id * 1,
        database:{
          A:false,
          B:false,
          C:false,
          D:false,
        },
      })
      this.inquire(res.id)
    })
  },
  radioChange(a){
    let id = this.data.info.id
    let answer ={
      ...this.data.answer,
      [id]:a.detail.value
    }
    this.setData({
      answer
    })
    console.log(this.data.answer);
  },
  finished(){
    console.log("倒计时结束");
    let answer = JSON.stringify(this.data.answer)
    let uid = this.data.uid
    let c_id = getApp().globalData.c_id
    submit({
      answer,
      uid,
      c_id
    }).then(res=>{
      Dialog.alert({
        title: '考试时间到了，您的分数: ' + res.score,
        message: res.content,
      }).then(() => {
        wx.switchTab({
          url: '/pages/homepage/homepage'
        })
      });
    })
  },
  

})