// var apiLogin = require('../../api/home')
// const throttle = require('../../utils/throttle')
// const app = getApp();
// const APPID = 'wxf931a783195f3a44'
// const SECRET = 'f2b903bd8a00ae8e25a0fcd886ca26a4'
// var pc;
// var WXBizDataCrypt = require('../../utils/cryptojs-master/RdWXBizDataCrypt.js');

Component({

  /**
   * 页面的初始数据
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
  },
  properties: { //接收的数据都写在这
    show: Boolean, //接收数据的类型   
  },
  /**
   * 生命周期函数--监听页面加载
   */
  ready: function (options) {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
    this.setData({
      show: this.properties.show //副组件传过来的
    })
    // this.getUserProfile = throttle.throttle(this._getUserProfile.bind(this), 5000)
  },
  onShow: function () {

  },
  methods: {
    getUserProfile(e) {
      var that = this
      wx.getUserProfile({
        desc: '用于完善会员资料',
        success: (resa) => {
          console.log("res:" + JSON.stringify(resa.userInfo));
          wx.login({
            success(res) {
              if (res.code) {
                let data = {
                  Code: res.code
                }
                console.log(res.code);
                // apiLogin.Login(data).then(res => {
                //   console.log(res, 'res');
                //   if (res.BaseResponse.IsSuccess) {
                    // pc = new WXBizDataCrypt(APPID, res.SessionKey)
                    // wx.setStorageSync('openId', res.Data.openid)
                    // wx.setStorageSync('uId', res.Data.UserSysno)
                    //wx.setStorageSync('mId', "6799072594911043584")
                    that.setData({ show: false });
                   
                  //   let myEventDetail = { // 需要传递什么数据就在这个对象中写
                  //     isShow: true,
                  //   }
                  //   that.triggerEvent('changeNaviIndex', myEventDetail);
                  // } else {
                  //   wx.showToast({
                  //     title: res.BaseResponse.Message,
                  //     icon: "none"
                  //   })
                  // }
                // })
              }
            }
          })
        }
      })
    },
    showPopup() {
      this.setData({ show: true });
    },
    onClose() {
      this.setData({ show: false });
      let myEventDetail = { // 需要传递什么数据就在这个对象中写
        isShow: false,
      }
      // this.triggerEvent('changeNaviIndex', myEventDetail);
      wx.showToast({
        title: '请授权登录后体验',
        icon: 'none',
      });
    },
  
  },


})