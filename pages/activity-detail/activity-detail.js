// pages/activity-detail/activity-detail.js
const auth = require('../../utils/auth');

Page({
  data: {
    activity: null,
    hasJoined: false,
    participants: []
  },

  onLoad(options) {
    const activityId = options.id;
    this.loadActivityDetail(activityId);
  },

  loadActivityDetail(activityId) {
    const activityDetail = {
      id: activityId,
      title: '周末篮球友谊赛',
      cover: 'https://fastly.picsum.photos/id/769/400/300.jpg?hmac=nK4rc0mQDj-au2ZAYMPXnA6hpIsTT1_auxt9tf37xjQ',
      organizer: {
        name: '运动达人',
        avatar: 'https://fastly.picsum.photos/id/769/400/300.jpg?hmac=nK4rc0mQDj-au2ZAYMPXnA6hpIsTT1_auxt9tf37xjQ'
      },
      dateText: '03-15 周日 14:00~18:00',
      location: '朝阳区体育馆',
      address: '北京市朝阳区建国路88号',
      joinedCount: 8,
      maxCount: 12,
      description: '周末一起来打篮球吧！不限水平，重在参与。本活动旨在促进运动交流，欢迎篮球爱好者报名参加。',
      detailImages: [
        'https://fastly.picsum.photos/id/769/400/300.jpg?hmac=nK4rc0mQDj-au2ZAYMPXnA6hpIsTT1_auxt9tf37xjQ',
        'https://fastly.picsum.photos/id/769/400/300.jpg?hmac=nK4rc0mQDj-au2ZAYMPXnA6hpIsTT1_auxt9tf37xjQ'
      ],
      guideImages: [
        'https://fastly.picsum.photos/id/769/400/300.jpg?hmac=nK4rc0mQDj-au2ZAYMPXnA6hpIsTT1_auxt9tf37xjQ'
      ]
    };

    const participantList = [
      { id: '1', name: '张三', avatar: 'https://fastly.picsum.photos/id/769/400/300.jpg?hmac=nK4rc0mQDj-au2ZAYMPXnA6hpIsTT1_auxt9tf37xjQ' },
      { id: '2', name: '李四', avatar: 'https://fastly.picsum.photos/id/769/400/300.jpg?hmac=nK4rc0mQDj-au2ZAYMPXnA6hpIsTT1_auxt9tf37xjQ' },
      { id: '3', name: '王五', avatar: 'https://fastly.picsum.photos/id/769/400/300.jpg?hmac=nK4rc0mQDj-au2ZAYMPXnA6hpIsTT1_auxt9tf37xjQ' },
      { id: '4', name: '赵六', avatar: 'https://fastly.picsum.photos/id/769/400/300.jpg?hmac=nK4rc0mQDj-au2ZAYMPXnA6hpIsTT1_auxt9tf37xjQ' }
    ];

    this.setData({
      activity: activityDetail,
      participants: participantList
    });
  },

  onJoinTap() {
    // 检查登录状态
    if (!auth.checkLogin({ redirect: true })) {
      return;
    }

    const { hasJoined } = this.data;
    if (hasJoined) {
      wx.showModal({
        title: '提示',
        content: '确定要请假吗？',
        success: (res) => {
          if (res.confirm) {
            this.setData({ hasJoined: false });
            wx.showToast({ title: '已请假', icon: 'success' });
          }
        }
      });
    } else {
      wx.showLoading({ title: '报名中' });
      setTimeout(() => {
        wx.hideLoading();
        this.setData({ hasJoined: true });
        wx.showToast({ title: '报名成功', icon: 'success' });
      }, 1000);
    }
  },

  onShareTap() {
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    });
  },

  onNavigateTap() {
    const { activity } = this.data;
    wx.openLocation({
      name: activity.location,
      address: activity.address,
      latitude: 39.908823,
      longitude: 116.397470,
      scale: 18
    });
  },

  onViewParticipantsTap() {
    wx.showToast({ title: '查看全部报名人', icon: 'none' });
  },

  onPreviewImage(e) {
    const url = e.detail || e.currentTarget.dataset.url;
    wx.previewImage({
      current: url,
      urls: this.data.activity.detailImages
    });
  },

  onOrganizerClick() {
    wx.showToast({ title: '查看发起人', icon: 'none' });
  }
});
