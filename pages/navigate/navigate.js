var common = require('../common/common.js')
Page({
  onLoad: function (options) {
    this.setData({
      title: options.title
    })
  common.sayHello('MINA')
  }
})