// utils/auth.js

const TOKEN_KEY = 'token';
const USER_INFO_KEY = 'userInfo';

/**
 * 获取 token
 */
const getToken = () => {
  return wx.getStorageSync(TOKEN_KEY);
};

/**
 * 获取用户信息
 */
const getUserInfo = () => {
  const userInfo = wx.getStorageSync(USER_INFO_KEY);
  return userInfo ? JSON.parse(userInfo) : null;
};

/**
 * 保存 token 和用户信息
 */
const setAuth = (token, userInfo) => {
  wx.setStorageSync(TOKEN_KEY, token);
  wx.setStorageSync(USER_INFO_KEY, JSON.stringify(userInfo));
};

/**
 * 清除登录状态
 */
const removeAuth = () => {
  wx.removeStorageSync(TOKEN_KEY);
  wx.removeStorageSync(USER_INFO_KEY);
};

/**
 * 检查是否已登录
 */
const isLoggedIn = () => {
  const token = wx.getStorageSync(TOKEN_KEY);
  return !!token;
};

/**
 * 检查登录状态，未登录则跳转登录页
 * @param {Object} options - 选项
 * @param {boolean} options.redirect - 是否使用 redirectTo（默认 false 使用 navigateTo）
 * @returns {boolean} 是否已登录
 */
const checkLogin = (options = {}) => {
  const token = wx.getStorageSync(TOKEN_KEY);
  
  if (!token) {
    // 跳转登录页前，记录来源页面
    const pages = getCurrentPages();
    if (pages.length > 0) {
      const currentPage = pages[pages.length - 1];
      const url = '/' + currentPage.route;
      // 排除登录页本身，避免死循环
      if (!url.includes('/pages/login/')) {
        wx.setStorageSync('redirectUrl', url);
      }
    }

    const url = '/pages/login/login';
    if (options.redirect) {
      wx.redirectTo({ url });
    } else {
      wx.navigateTo({ url });
    }
    return false;
  }
  
  return true;
};

/**
 * 带登录检查的请求
 * @param {Object} options - wx.request 选项
 * @returns {Promise} 请求结果
 */
const requestWithAuth = (options) => {
  const token = wx.getStorageSync(TOKEN_KEY);
  
  const header = {
    ...options.header,
    'Authorization': token ? `Bearer ${token}` : ''
  };
  
  return new Promise((resolve, reject) => {
    wx.request({
      ...options,
      header,
      success: (res) => {
        // token 过期或无效
        if (res.data.code === 401) {
          removeAuth();
          checkLogin();
          reject(new Error('登录已过期'));
        } else {
          resolve(res);
        }
      },
      fail: reject
    });
  });
};

module.exports = {
  getToken,
  getUserInfo,
  setAuth,
  removeAuth,
  isLoggedIn,
  checkLogin,
  requestWithAuth
};
