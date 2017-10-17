// pages/Rhome/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    articleList:[
      {
        img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        title:'高情商的表现，你有几个？',
        time:'2017-10-10 10:01:01'
      },
      {
        img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        title: '别以为你长得帅我就不打你',
        time: '2017-10-10 10:01:01'
      },
      {
        img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
        title: '一支穿云箭，千军万马来相见',
        time: '2017-10-10 10:01:01'
      },
      {
        img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        title: '你还是回乡下养猪吧',
        time: '2017-10-10 10:01:01'
      },
    ],
    menjinList:{
      iconURL:'../../assets/icons/lockItem.png',
      list:[
        { name:'3楼-东门'},
        { name: '3楼-西门' },
        { name: '1楼-大门' }
      ]
    },
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 200,
    curLockName:'',

    lockDialogBoll:false,
    moveToLeft:0,
    starX:0,
    slideBoxWidth:0,
    slideWidth: 0,
    touchOne:true
  },
  switchToFind:function(){
    wx.switchTab({ url: "../Rfind/index" });
  },
  toArticleDetail: function (event){
    console.log('999999999999')
    wx.navigateTo({
      url: '../Rfind/article/article?url=' + event.currentTarget.dataset.url + 
      '&title=' + decodeURIComponent(event.currentTarget.dataset.title)
    })
  },
  swiperTap(event){
    wx.navigateTo({
      url: '../Rfind/article/article?url=' + event.currentTarget.dataset.url,
    })
  },
  pwLockTap(){
    function getRadomNuber(total) {//随机生成6位数密码；
      let num = '';
      for (let i = 0; i < total; i++) {
        var aa = Math.floor(Math.random() * 10);
        num += aa;
      }
      return parseInt(num);
    }
    console.log('pppppp')
    var pw = getRadomNuber(6);
    wx.navigateTo({
      url: 'pwlock/pwlock?pw=' + pw,
    })
  }, 
  touchstartTap(e){
    // console.log('zzzz:' + e.changedTouches[0].pageX)
    let starX = e.changedTouches[0].pageX;
    this.setData({
      starX: starX
    })
  },
  touchmoveTap(e){
    // console.log('yyyy:' + e.changedTouches[0].pageX)
    var ToLeft = e.changedTouches[0].pageX-this.data.starX;
    var slideBoxW = Math.floor(this.data.slideBoxWidth - this.data.slideWidth-1);
    if (ToLeft<0)
      ToLeft=0;
    if (ToLeft > slideBoxW){
      ToLeft = slideBoxW;  
      var touchOne = this.data.touchOne;
      if (touchOne){
        console.log(99999999);
        wx.showToast({//正方形盒子√
          title: '已发送开锁请求.',
          icon: 'success',
          duration: 1000
        })
      }
      this.setData({
        touchOne: false
      })

      var _this = this
      setTimeout(function () {
        _this.setData({
          touchOne: true
        })
      }, 1000);
      
    }
      
    this.setData({
      moveToLeft: ToLeft
    })
  },
  touchendTap(){
    this.setData({
      moveToLeft: 0
    })
  },
  closeLockDialog(){
    this.setData({
      lockDialogBoll:false
    })
  },
  lockBtnTap(event){
    this.setData({
      lockDialogBoll: true,
      curLockName: event.currentTarget.dataset.name
    });
    console.log('laiba')
    //计算弹窗滑动开门盒子
    var _this = this;
    wx.createSelectorQuery().selectAll('.slideBox').boundingClientRect(function (rects) {
      console.log(1111111111111111111111);
      rects.forEach(function (rect) {
        // rect.id      // 节点的ID
        // rect.dataset // 节点的dataset
        // rect.left    // 节点的左边界坐标
        // rect.right   // 节点的右边界坐标
        // rect.top     // 节点的上边界坐标
        // rect.bottom  // 节点的下边界坐标
        // rect.width   // 节点的宽度
        // rect.height  // 节点的高度
        _this.setData({
          slideBoxWidth: rect.width
        })
        console.log('slideBoxWidth:'+rect.width);
      })
    }).exec()
    wx.createSelectorQuery().selectAll('.slide').boundingClientRect(function (rects) {
      rects.forEach(function (rect) {
        _this.setData({
          slideWidth: rect.width
        })
        console.log('slideWidth:' + rect.width);
      })
    }).exec()

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