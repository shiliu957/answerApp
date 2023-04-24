const {topic} = require("../../api/login")
// pages/judge/judge.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
			cTime: '00:00',
			flag: true,
			is_if: 99,
			is_yes: 99,
			ban: false,
			current: 0,
			exam: {
				a: {
					title: '1、下列语句中，体现文明用语的是哪一句(　　)',
					key: 'A'
				},
				b: [
					{
						choice: 'A',
						content: '你瞅啥'
					},
					{
						choice: 'B',
						content: '瞅你咋滴'
					},
					{
						choice: 'C',
						content: '再瞅一个试试'
					},
					{
						choice: 'D',
						content: '试试就试试'
					}
				]
			}
  },
	startTimer() {
    let that = this;
    let lastTime = new Date().getTime();
    this.myTimer = setInterval(function() {
      //setInterval定时方法，每一秒执行一次，实现时钟效果
      let cTime = new Date().getTime();
      let xcTime = cTime - lastTime;
      let rTime = that.formatDuring(xcTime);
      console.log('rTime', rTime);
      that.setData({
        cTime:rTime
      })
      //至此，时间输出为11:05:03正确格式，而非11:5:3
    }, 1000);
  },
  formatDuring(mss) {
    var minutes = parseInt((mss % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.trunc((mss % (1000 * 60)) / 1000);
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    return minutes + ':' + seconds;
  },
  //停止timer
  stopTimer() {
    if (!!this.myTimer) {
      clearInterval(this.myTimer);
    }
  },
  // 收藏
  change() {
    console.log('1111');

  },
  // 选择
  select(e) {
    let msg = e.target.dataset
    const key = msg.choice == this.data.exam.a.key
    this.setData({
      is_yes: key ? true : false,
      is_if: msg.index,
      ban: true  //选择一次后是否禁止再次选择
    })
  },
  // 预览
  goLook() {
    wx.navigateTo({
      url: '/pages/practiceClick/perview'
    });
  },
  changeSwiper(e) {
    // 获取swiper的索引
    const current = e.detail.current;
    this.setData({
      current
    })
    console.log('current', this.data.current);
  },
  //获取练习数据
  // gettopicinfo(){
  //   let uid = wx.getStorageSync('uid')
  //   topic({
  //     uid
  //   })
  // }

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.startTimer();
    
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
    this.stopTimer();
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