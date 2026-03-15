// utils/request.js

const BASE_URL = 'http://8.152.100.50:10001';

/**
 * 封装 wx.request
 * @param {Object} options - 请求选项
 * @returns {Promise}
 */
const request = (options) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: BASE_URL + options.url,
      method: options.method || 'GET',
      data: options.data || {},
      header: {
        'Content-Type': 'application/json',
        ...options.header
      },
      success: (res) => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res.data);
        } else {
          wx.showToast({
            title: res.data?.message || '请求失败',
            icon: 'none'
          });
          reject(res);
        }
      },
      fail: (err) => {
        wx.showToast({
          title: '网络请求失败',
          icon: 'none'
        });
        reject(err);
      }
    });
  });
};

/**
 * GET 请求
 */
const get = (url, data) => {
  return request({ url, method: 'GET', data });
};

/**
 * POST 请求
 */
const post = (url, data) => {
  return request({ url, method: 'POST', data });
};

module.exports = {
  request,
  get,
  post
};
