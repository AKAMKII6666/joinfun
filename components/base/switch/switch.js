// components/base/switch/switch.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 当前是否选中
    checked: {
      type: Boolean,
      value: false
    },
    // 开关颜色（兼容微信原生）
    color: {
      type: String,
      value: '#07C160'
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      value: false
    },
    // 标签文本
    label: {
      type: String,
      value: ''
    },
    // 描述文本
    description: {
      type: String,
      value: ''
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
     * 处理点击切换
     */
    handleToggle() {
      const { disabled } = this.data;
      if (disabled) return;

      const newChecked = !this.data.checked;
      this.setData({ checked: newChecked });

      // 触发事件
      this.triggerEvent('change', { 
        value: newChecked 
      });
    },

    /**
     * 处理原生switch变化（备用）
     */
    handleSwitchChange(e) {
      const { value } = e.detail;
      this.setData({ checked: value });
      this.triggerEvent('change', { value });
    }
  }
});
