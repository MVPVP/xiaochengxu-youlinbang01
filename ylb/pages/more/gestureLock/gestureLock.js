import Lock from "../../../components/lock/lock.js"
const app=getApp();
Page({
  data: {
    userInfo:null,
    hasUserInfo:false
  },

  onLoad () {
    this.lock = new Lock(this, {
      canvasWidth: 300,
      canvasHeight: 300,
      canvasId: 'canvasLock',
      drawColor: '#3985ff'           
    })
    //获取用户信息
    if (app.globalData.userInfo) {
      console.log('0000000');
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })  
    } else {
      console.log('44444444');
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    
    
  },

  onReady () {
    console.log("onReady")    
  }
  
})


