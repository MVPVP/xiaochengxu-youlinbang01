// pages/other/video/video.js
Page({
  bindButtonTap: function () {
    console.log('支持什么格式的视频呢')
    var that = this
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: 'back',
      success: function (res) {
        that.setData({
          src: res.tempFilePath
        })
      }
    })
  }
})