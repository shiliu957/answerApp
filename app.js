// app.js
var eventBus = require('./utils/eventBus')
App({
  onLaunch() {
  },
  globalData: {
    userInfo: null,
    bus: eventBus.eventBus
  }
})
