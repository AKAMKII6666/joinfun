// components/business/activity-card/activity-card.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 活动数据对象
    activity: {
      type: Object,
      value: {}
    },
    // 默认封面图
    defaultCover: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    statusText: ''
  },

  /**
   * 观察器
   */
  observers: {
    'activity.status': function(status) {
      this.updateStatusText(status);
    }
  },

  /**
   * 生命周期方法
   */
  lifetimes: {
    attached() {
      const { activity } = this.data;
      this.updateStatusText(activity.status);
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 更新状态文字
     */
    updateStatusText(status) {
      const statusMap = {
        'pending': '待开始',
        'ongoing': '进行中',
        'completed': '已结束',
        'cancelled': '已取消'
      };
      
      this.setData({
        statusText: status ? statusMap[status] || status : ''
      });
    },

    /**
     * 处理点击
     */
    handleClick() {
      const { activity } = this.data;
      this.triggerEvent('click', { activity });
    }
  }
});
