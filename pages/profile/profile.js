// pages/profile/profile.js
const auth = require('../../utils/auth');

Page({
  data: {
    userInfo: null,
    modifyCount: 0,
    maxModifyCount: 3,
    remainingModifyCount: 2
  },

  onLoad() {
    // 路由守护：检查登录状态
    auth.checkLogin({ redirect: true });
    
    this.loadUserInfo();
  },

  loadUserInfo() {
    const user = {
      name: '大聪明',
      avatar: 'https://fastly.picsum.photos/id/769/200/200.jpg?hmac=nK4rc0mQDj-au2ZAYMPXnA6hpIsTT1_auxt9tf37xjQ',
      openid: 'oXXXXXXXXXXXXX'
    };

    this.setData({
      userInfo: user,
      modifyCount: 1,
      remainingModifyCount: 2
    });
  },

  onChangeAvatar() {
    const { modifyCount, maxModifyCount } = this.data;
    if (modifyCount >= maxModifyCount) {
      wx.showToast({ title: '今年修改次数已用完', icon: 'none' });
      return;
    }
    wx.chooseMedia({
      count: 1,
      mediaType: ['image'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        const userInfo = { ...this.data.userInfo, avatar: res.tempFiles[0].tempFilePath };
        this.setData({ 
          userInfo,
          modifyCount: modifyCount + 1,
          remainingModifyCount: maxModifyCount - modifyCount - 1
        });
        wx.showToast({ title: '修改成功', icon: 'success' });
      }
    });
  },

  onChangeName() {
    const { modifyCount, maxModifyCount } = this.data;
    if (modifyCount >= maxModifyCount) {
      wx.showToast({ title: '今年修改次数已用完', icon: 'none' });
      return;
    }
    wx.showModal({
      title: '修改昵称',
      editable: true,
      placeholderText: '请输入新昵称',
      success: (res) => {
        if (res.confirm && res.content) {
          const userInfo = { ...this.data.userInfo, name: res.content };
          this.setData({ 
            userInfo,
            modifyCount: modifyCount + 1,
            remainingModifyCount: maxModifyCount - modifyCount - 1
          });
          wx.showToast({ title: '修改成功', icon: 'success' });
        }
      }
    });
  },

  onMenuClick(e) {
    const { type } = e.currentTarget.dataset;
    wx.showToast({ title: `点击了${type}`, icon: 'none' });
  },

  onContact() {
    wx.showToast({ title: '联系客服功能开发中', icon: 'none' });
  }
});
