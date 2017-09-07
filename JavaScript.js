const openIdUrl = require('./config').openIdUrl

App({
  onLaunch: function () {
    console.log('App Launch');
    
  },
  onShow: function () {
    console.log('App Show000');
  },
  onHide: function () {
    console.log('App Hide')
  },
  globalData: {
    hasLogin: false,
    isgetPromission:false,
    openid: null,
    isSign:false,
    userInfo: null,
    city: null,
    bindMobile:false,
    version:0,
    qrcodes:[],
    qrindex:0,
    appid:''
  },
  VersionCompare: function (currVer, promoteVer) {
    currVer = currVer || "0.0.0";
    promoteVer = promoteVer || "0.0.0";
    if (currVer == promoteVer) return false;
    var currVerArr = currVer.split(".");
    var promoteVerArr = promoteVer.split(".");
    var len = Math.max(currVerArr.length, promoteVerArr.length);
    for (var i = 0; i < len; i++) {
      var proVal = ~~promoteVerArr[i],
        curVal = ~~currVerArr[i];
      if (proVal < curVal) {
        return false;
      } else if (proVal > curVal) {
        return true;
      }
    }
    return false;
  },
  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.getUserInfo({
        withCredentials: false,
        success: function (res) {
          that.globalData.userInfo = res.userInfo
          typeof cb == "function" && cb(that.globalData.userInfo)
        },
        fail:function(res){
          typeof cb == "function" && cb(null)
        }
      })
    }
  },
 
  
  // lazy loading openid
  getUserOpenId: function(callback) {
    var self = this

    if (self.globalData.openid) {
      typeof callback == "function" && callback(self.globalData.isSign, self.globalData.openid)
    } else {
      wx.login({
        success: function(data) {
         
          wx.request({
            url: openIdUrl,
            data: {
              code: data.code
            },
            success: function(res) {
              console.log('app拉取openid成功', res)
              self.globalData.openid = res.data.openid;
              self.globalData.isSign = res.data.isSign;
              self.globalData.bindMobile = res.data.bindMobile;
              typeof callback == "function" && callback(self.globalData.isSign, self.globalData.openid)
            },
            fail: function(res) {
              console.log('拉取用户openid失败，将无法正常使用开放接口等服务', res)
              callback(res)
            }
          });

        },
        fail: function(err) {
          console.log('wx.login 接口调用失败，将无法正常使用开放接口等服务', err);
          
          callback(err)
        }
      })
    }
  }

})
