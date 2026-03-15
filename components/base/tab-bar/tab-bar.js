// components/base/tab-bar/tab-bar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // Tab 列表
    tabs: {
      type: Array,
      value: []
    },
    // 当前选中的索引
    current: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 处理 Tab 点击
     */
    handleTabClick(e) {
      const index = e.currentTarget.dataset.index;
      const { current, tabs } = this.data;
      
      // 如果点击当前tab，不触发
      if (index === current) return;
      
      // 检查是否禁用
      const tab = tabs[index];
      if (tab && tab.disabled) return;
      
      // 更新当前索引
      this.setData({ current: index });
      
      // 触发事件
      this.triggerEvent('change', { 
        index,
        tab 
      });
    }
  }
});
