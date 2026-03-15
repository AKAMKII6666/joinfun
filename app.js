// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },

  // 路由守卫：跳转登录页前记录来源页面
  navigateToLogin() {
    const pages = getCurrentPages();
    if (pages.length > 0) {
      const currentPage = pages[pages.length - 1];
      const url = '/' + currentPage.route;
      // 排除登录页本身，避免死循环
      if (!url.includes('/pages/login/')) {
        wx.setStorageSync('redirectUrl', url);
      }
    }
  },

  globalData: {
    userInfo: null
  }
})
