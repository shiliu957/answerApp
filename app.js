// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        let code = res.code
        console.log(code);
        // wx.request({
        //   url: 'https://ieom.uniz3d.net/api/member/login',
        //   mothod:'GET',
        //   data:{
        //     appid:'wx3ceee9a768a68fda',
        //     js_code: code,
        //     secret:'9afd7bbc1d5cc570c4d0ad92a1c82a51',
        //     grant_type:'authorization_code'
        //   },
        //   success:(res) => {
        //     console.log("成功",res);
        //   },
        //   fail:(err)=>{

        //   }
        // })
      }
    })
  },


  globalData: {
    userInfo: null,
  }
})
