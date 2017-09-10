//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  },
  login: function () {
    wx.getUserInfo({
      success: function (res) {
        var userInfo = res.userInfo
        var nickName = userInfo.nickName
        var avatarUrl = userInfo.avatarUrl
        var gender = userInfo.gender //性别 0：未知、1：男、2：女
        var province = userInfo.province
        var city = userInfo.city
        var country = userInfo.country
      }
    })
    app.func.req('/hello', {}, function (data) {
      if (data) {
        wx.navigateTo({
          url: '../taskList/taskList?data=1,2,3'
        })
      }
    })
  },
  test: function () {
    app.func.req('/api/v1/signin', "{\"account\":{\"username\":111111,\"password\":111111}}", function (data) {
      if (data) {
        // wx.navigateTo({
        //   url: '../taskList/taskList?data=1,2,3'
        // })
      } else {

      }
    })
  }
})
