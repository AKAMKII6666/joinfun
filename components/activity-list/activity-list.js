// components/activity-list/activity-list.js
Component({
  // 组件属性
  properties: {
    // 活动列表
    activities: {
      type: Array,
      value: []
    },
    // 空状态文字
    emptyText: {
      type: String,
      value: '暂无活动'
    },
    // 空状态提示
    emptyHint: {
      type: String,
      value: ''
    }
  },

  // 组件数据
  data: {},

  // 组件方法
  methods: {
    // 点击活动卡片
    onActivityTap: function(e) {
      var activityId = e.detail.id;
      this.triggerEvent('activitytap', { id: activityId });
    }
  }
});
