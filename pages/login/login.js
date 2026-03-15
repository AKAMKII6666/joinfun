// pages/login/login.js
const auth = require('../../utils/auth');
const request = require('../../utils/request');

Page({
  data: {
    loading: false
  },

  onLoad() {
    // 检查是否已登录
    if (auth.isLoggedIn()) {
      this.goBack();
    }
  },

  // 微信登录
  onWechatLogin() {
    if (this.data.loading) return;

    this.setData({ loading: true });

    // 先获取用户信息（需要弹窗授权）
    wx.getUserProfile({
      desc: '用于完善用户资料', // 必填，描述获取用户信息的目的
      lang: 'zh_CN',
      success: (profileRes) => {
        console.log('===== wx.getUserProfile 返回数据 =====');
        console.log('profileRes:', profileRes);
        console.log('userInfo:', profileRes.userInfo);
        console.log('encryptedData:', profileRes.encryptedData);
        console.log('iv:', profileRes.iv);
        console.log('=====================================');
        
        // 然后获取登录凭证
        wx.login({
          success: (loginRes) => {
            if (loginRes.code) {
              console.log('===== wx.login 返回数据 =====');
              console.log('code:', loginRes.code);
              console.log('========================---');
              this.loginWithCode(loginRes.code, profileRes.encryptedData, profileRes.iv, profileRes.userInfo);
            } else {
              wx.showToast({
                title: '获取登录凭证失败',
                icon: 'none'
              });
              this.setData({ loading: false });
            }
          },
          fail: () => {
            wx.showToast({
              title: '微信登录失败',
              icon: 'none'
            });
            this.setData({ loading: false });
          }
        });
      },
      fail: (err) => {
        console.log('===== wx.getUserProfile 失败 =====');
        console.log('err:', err);
        console.log('=================================');
        
        // 用户拒绝授权时，仍然尝试用 wx.login 登录
        wx.login({
          success: (loginRes) => {
            if (loginRes.code) {
              this.loginWithCode(loginRes.code, null, null, null);
            } else {
              wx.showToast({
                title: '获取登录凭证失败',
                icon: 'none'
              });
              this.setData({ loading: false });
            }
          },
          fail: () => {
            wx.showToast({
              title: '微信登录失败',
              icon: 'none'
            });
            this.setData({ loading: false });
          }
        });
      }
    });
  },

  // 调用后端登录接口
  loginWithCode(code, encryptedData, iv, userInfo) {
    // 构建请求参数
    const params = {
      code: code
    };
    
    // 如果有授权数据，一起传给后端
    if (encryptedData && iv) {
      params.encryptedData = encryptedData;
      params.iv = iv;
    }

    console.log('===== 准备发送到后端的数据 =====');
    console.log('params:', params);
    console.log('================================');

    wx.request({
      //url: 'https://thick-alpaca-70.akamkii6666.deno.net/account/login?code=' + code,
      url: 'http://8.152.100.50:10001/account/login',
      method: 'POST',
      timeout: 1000*60,
      data: params,
      success: (res) => {
        console.log('===== 后端返回数据 =====');
        console.log('res:', res);
        console.log('========================');
        
        // 服务器返回 code: 200 表示成功
        if (res.data && res.data.code === 200) {
          // 登录成功，保存 token 和用户信息
          const { openid, session_key, unionid } = res.data.data;
          
          // 优先使用后端返回的 token，其次用 session_key
          const authToken = token || session_key;
          
          // 合并用户信息（优先使用授权获取的 userInfo）
          const finalUserInfo = {
            ...(userInfo || {}),
            openid,
            session_key,
            unionid
          };
          
          if (authToken) {
            auth.setAuth(authToken, finalUserInfo);
          }
          
          wx.showToast({
            title: '登录成功',
            icon: 'success'
          });
          setTimeout(() => {
            this.goBack();
          }, 1500);
        } else {
          wx.showToast({
            title: res.data?.message || '登录失败',
            icon: 'none'
          });
        }
      },
      fail: () => {
        wx.showToast({
          title: '网络请求失败',
          icon: 'none'
        });
      },
      complete: () => {
        this.setData({ loading: false });
      }
    });
  },

  // 返回上一页或首页
  goBack() {
    // 优先使用 storage 中记录的来源页面
    let redirectUrl = wx.getStorageSync('redirectUrl');
    
    // 清理 storage，避免残留
    wx.removeStorageSync('redirectUrl');
    
    // 如果没有记录或记录的是登录页，则跳转到首页
    if (!redirectUrl || redirectUrl.includes('/pages/login/')) {
      redirectUrl = '/pages/index/index';
    }
    
    // 使用 redirectTo 跳转
    wx.redirectTo({
      url: redirectUrl
    });
  }
});
