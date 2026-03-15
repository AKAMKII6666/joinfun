// pages/index/index.js
Page({
  data: {
    currentTab: 0,
    tabs: [
      { title: '已报名', key: 'joined' },
      { title: '最近浏览', key: 'recent' }
    ],
    joinedActivities: [],
    recentActivities: []
  },

  onLoad() {
    this.loadMockData();
  },

  loadMockData() {
    const joinedList = [
      {
        id: '1',
        title: '周末篮球友谊赛',
        cover: 'https://fastly.picsum.photos/id/769/400/300.jpg?hmac=nK4rc0mQDj-au2ZAYMPXnA6hpIsTT1_auxt9tf37xjQ',
        dateText: '03-15 周日 14:00~18:00',
        location: '朝阳区体育馆',
        joinedCount: 8,
        maxCount: 12,
        status: 'pending'
      },
      {
        id: '2',
        title: '桌游三国杀局',
        cover: 'https://fastly.picsum.photos/id/769/400/300.jpg?hmac=nK4rc0mQDj-au2ZAYMPXnA6hpIsTT1_auxt9tf37xjQ',
        dateText: '03-20 周五 19:00~22:00',
        location: '海淀区创客空间',
        joinedCount: 5,
        maxCount: 10,
        status: 'pending'
      }
    ];

    const recentList = [
      {
        id: '3',
        title: '读书会：《人类简史》',
        cover: 'https://fastly.picsum.photos/id/769/400/300.jpg?hmac=nK4rc0mQDj-au2ZAYMPXnA6hpIsTT1_auxt9tf37xjQ',
        dateText: '03-18 周三 10:00~12:00',
        location: '单向街书店',
        joinedCount: 12,
        maxCount: 20,
        status: 'pending'
      },
      {
        id: '4',
        title: '春季踏青活动',
        cover: 'https://fastly.picsum.photos/id/769/400/300.jpg?hmac=nK4rc0mQDj-au2ZAYMPXnA6hpIsTT1_auxt9tf37xjQ',
        dateText: '03-22 周日 08:00~17:00',
        location: '香山公园',
        joinedCount: 25,
        maxCount: 30,
        status: 'pending'
      },
      {
        id: '5',
        title: '程序员技术分享会',
        cover: 'https://fastly.picsum.photos/id/769/400/300.jpg?hmac=nK4rc0mQDj-au2ZAYMPXnA6hpIsTT1_auxt9tf37xjQ',
        dateText: '03-25 周三 14:00~18:00',
        location: '腾讯会议',
        joinedCount: 50,
        maxCount: 100,
        status: 'ongoing'
      }
    ];

    this.setData({
      joinedActivities: joinedList,
      recentActivities: recentList
    });
  },

  onTabChange(e) {
    const { index } = e.detail;
    this.setData({ currentTab: index });
  },

  onActivityClick(e) {
    const { activity } = e.detail;
    wx.navigateTo({
      url: `/pages/activity-detail/activity-detail?id=${activity.id}`
    });
  },

  onPublishClick() {
    wx.navigateTo({
      url: '/pages/publish/publish'
    });
  }
});
