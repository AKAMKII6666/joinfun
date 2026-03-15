// components/base/badge/badge.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 徽章数字
    count: {
      type: Number,
      value: 0
    },
    // 是否显示红点
    dot: {
      type: Boolean,
      value: false
    },
    // 尺寸：sm / md / lg
    size: {
      type: String,
      value: 'md'
    },
    // 是否显示徽章
    showBadge: {
      type: Boolean,
      value: true
    },
    // 自定义颜色
    customColor: {
      type: String,
      value: ''
    },
    // 最大显示数量（超过显示 maxCount+）
    maxCount: {
      type: Number,
      value: 99
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    displayCount: ''
  },

  /**
   * 观察器
   */
  observers: {
    count(newVal) {
      this.updateDisplayCount();
    }
  },

  /**
   * 生命周期方法
   */
  lifetimes: {
    attached() {
      this.updateDisplayCount();
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 更新显示数量
     */
    updateDisplayCount() {
      const { count, maxCount, dot } = this.data;
      if (dot) {
        this.setData({ displayCount: '' });
        return;
      }
      
      let displayCount = count;
      if (count > maxCount) {
        displayCount = maxCount + '+';
      }
      
      this.setData({ displayCount });
    }
  }
});
