// pages/my-activities/my-activities.js
const auth = require('../../utils/auth');

Page({
  data: {
    activities: [],
    currentActivity: null
  },

  onLoad() {
    // 路由守护：检查登录状态
    auth.checkLogin({ redirect: true });
    
    this.loadMyActivities();
  },

  loadMyActivities() {
    const activityList = [
      {
        id: '101',
        title: '周末篮球友谊赛',
        cover: 'https://fastly.picsum.photos/id/769/400/300.jpg?hmac=nK4rc0mQDj-au2ZAYMPXnA6hpIsTT1_auxt9tf37xjQ',
        dateText: '03-15 周日 14:00~18:00',
        location: '朝阳区体育馆',
        joinedCount: 8,
        maxCount: 12,
        status: 'pending'
      },
      {
        id: '102',
        title: '桌游三国杀局',
        cover: 'https://fastly.picsum.photos/id/769/400/300.jpg?hmac=nK4rc0mQDj-au2ZAYMPXnA6hpIsTT1_auxt9tf37xjQ',
        dateText: '03-20 周五 19:00~22:00',
        location: '海淀区创客空间',
        joinedCount: 5,
        maxCount: 10,
        status: 'pending'
      },
      {
        id: '103',
        title: '读书会活动',
        cover: 'https://fastly.picsum.photos/id/769/400/300.jpg?hmac=nK4rc0mQDj-au2ZAYMPXnA6hpIsTT1_auxt9tf37xjQ',
        dateText: '03-10 周一 10:00~12:00',
        location: '单向街书店',
        joinedCount: 15,
        maxCount: 20,
        status: 'completed'
      }
    ];

    this.setData({ activities: activityList });
  },

  onActivityClick(e) {
    const { activity } = e.detail;
    wx.navigateTo({
      url: `/pages/activity-detail/activity-detail?id=${activity.id}`
    });
  },

  onEditTap(e) {
    const id = e.currentTarget.dataset.id;
    wx.showToast({ title: '编辑活动 ' + id, icon: 'none' });
  },

  onReuseTap(e) {
    const id = e.currentTarget.dataset.id;
    wx.showModal({
      title: '提示',
      content: '确定复用此活动吗？',
      success: (res) => {
        if (res.confirm) {
          wx.showToast({ title: '已复用', icon: 'success' });
        }
      }
    });
  },

  onDeleteTap(e) {
    const id = e.currentTarget.dataset.id;
    const that = this;
    wx.showModal({
      title: '提示',
      content: '确定删除此活动吗？',
      success: (res) => {
        if (res.confirm) {
          const activities = that.data.activities.filter(a => a.id !== id);
          that.setData({ activities });
          wx.showToast({ title: '已删除', icon: 'success' });
        }
      }
    });
  },

  onPublishClick() {
    wx.navigateTo({ url: '/pages/publish/publish' });
  }
});
