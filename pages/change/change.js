//change.js
const util = require('../../utils/util.js')
const app = getApp()
Page({
  data: {
    curLang: {},
    langList: app.globalData.langList
  },
  onShow: function () {
    this.setData({ curLang: app.globalData.curLang })
  },
  onTapItem: function (e) {
    let langObj = e.currentTarget.dataset //存储所有data自定义属性的值
    wx.setStorageSync('language', langObj)
    this.setData({ 'curLang': langObj })
    app.globalData.curLang = langObj
    wx.switchTab({ url: '/pages/index/index' }) //切换到对应页面
  }
})

//当我点击韩语时需要把韩语变成当前的curLang。前面wxml的自定义属性data-chs、data-lang、data-index存储了，此刻用户点击时执行onTapItem者函数，这个事件e里面就有这些属性
