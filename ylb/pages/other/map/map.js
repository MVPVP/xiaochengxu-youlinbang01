// pages/other/map/map.js
Page({
  data: {
    latitudeD: 0,
    longitudeD: 0,
  },
  onLoad(){
    var _this=this;
    wx.getLocation({
      type: 'gcj02',//默认为 wgs84 返回 gps 坐标，gcj02 返回可用于wx.openLocation的坐标
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy
        wx.openLocation({
          latitude: latitude,
          longitude: longitude,
          scale: 28
        })
        console.log(res);
        _this.setData({
          latitudeD: latitude,
          longitudeD: longitude
        })
      }
    })
  }
})