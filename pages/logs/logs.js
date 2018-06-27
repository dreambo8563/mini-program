//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onClick(e) {
    console.log("click the item", e)
  },
  onLoad: function() {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})