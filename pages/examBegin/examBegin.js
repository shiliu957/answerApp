import Dialog from '@vant/weapp/dialog/dialog';
const {topic,topicPage,submit} = require("../../api/login") 
// pages/exam2/exam2.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
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
    type:'exam',
    uid: wx.getStorageSync('uid'),
    info:null,
    answer:{},
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
      console.log(res,"这是考试返回的数据");
      this.setData({
        info:res,
        percentage: res.id * 1
      })
    })
  },
  commit(){
    let answer = JSON.stringify(this.data.answer)
    let uid = this.data.uid
    submit({
      answer,
      uid
    }).then(res=>{
      console.log(res,"您的分数");
      Dialog.alert({
        title: '您的分数: ' + res.score,
        message: res.content,
      }).then(() => {
        wx.switchTab({
          url: '/pages/home/home'
        })
      });
    })
  },
  prePage(){
    let type = this.data.type
    let uid = this.data.uid
    topicPage({
      uid,
      type,
      topic_num:this.data.info.id,
      page:"prev"
    }).then(res=>{
      console.log(res,"考试的上一题");
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
    })
  },
  nextPage(){
    let type = this.data.type
    let uid = this.data.uid
    topicPage({
      uid,
      type,
      topic_num:this.data.info.id,
      page:"next"
    }).then(res=>{
      console.log(res,"考试的下一题");
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
    submit({
      answer,
      uid
    }).then(res=>{
      Dialog.alert({
        title: '考试时间到了，您的分数: ' + res.score,
        message: res.content,
      }).then(() => {
        wx.switchTab({
          url: '/pages/home/home'
        })
      });
    })
  },
  

})