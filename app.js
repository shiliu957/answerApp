// app.js
var eventBus = require('./utils/eventBus')
App({
  onLaunch() {
  },
  globalData: {
    userInfo: null,
    bus: eventBus.eventBus,
    c_id:null,
    itemName:""
  }
})
