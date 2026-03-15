// components/activity-card/activity-card.js
Component({
  // 组件属性
  properties: {
    // 活动数据
    activity: {
      type: Object,
      value: {}
    },
    // 是否显示取消状态
    cancelled: {
      type: Boolean,
      value: false
    }
  },

  // 组件数据
  data: {},

  // 组件方法
  methods: {
    // 点击卡片
    onTap: function() {
      var activityId = this.data.activity.id;
      this.triggerEvent('tap', { id: activityId });
    }
  }
});
