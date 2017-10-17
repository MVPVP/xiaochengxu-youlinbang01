// pages/more/reset/reset.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    step:1,
    headText:'使用注册的手机号来找回密码',
    defaultPhome:'15920523800',
    daojishi: 6,
    chongfa: false
  },
  getCodeBtn:function(){
    this.setData({
      step:2,
      headText: '已发送短息验证 请查收'
    })
    this.daojishifunction();
  },
  nextStepBtn:function(){
    this.setData({
      step: 3,
      headText: '验证成功 请修改密码'
    })
  },
  finishBtn:function(){
    wx.redirectTo({
      url: '../login/login',
    })
  },
  chongfaTap() {
    this.setData({
      daojishi: 6,
      chongfa: false
    })
    this.daojishifunction();
  },
  daojishifunction() {
    var _this = this;
    function daojishiFunc(num) {
      var intervalTime = setInterval(function () {
        num--;
        if (num <= 0) {
          clearInterval(intervalTime);
          _this.setData({
            chongfa: true
          })
        }
        console.log(num)
        _this.setData({
          daojishi: num
        })
      }, 1000)
    }
    daojishiFunc(this.data.daojishi);
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