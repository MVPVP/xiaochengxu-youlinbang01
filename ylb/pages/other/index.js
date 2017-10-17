// pages/other/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  mapTap(){
    wx.navigateTo({
      url: 'map/map',
    })
  },
  photoTap(){
    console.log('能拍照吗')
    if (wx.openBluetoothAdapter) {
      wx.openBluetoothAdapter()
    } else {
      // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
      })
    }
  },
  animationTap(){
    wx.navigateTo({
      url: 'animate/animate',
    })
  },
  scancodeTap(){
    wx.scanCode({
      success: (res) => {
        console.log(res)
      }
    })
  },
  videoTap(){
    wx.navigateTo({
      url: 'video/video',
    })
  },
  recordTap(){
    wx.startRecord({
      success: function (res) {
        var tempFilePath = res.tempFilePath
      },
      fail: function (res) {
        //录音失败
      }
    })
    setTimeout(function () {
      //结束录音  
      wx.stopRecord()
    }, 10000)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})