// components/base/radio/radio.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 单选框的值
    value: {
      type: String,
      value: ''
    },
    // 当前是否选中
    checked: {
      type: Boolean,
      value: false
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
     * 处理点击
     */
    handleClick() {
      const { disabled, checked, value } = this.data;
      if (disabled || checked) return;

      this.triggerEvent('change', { value });
    }
  }
});
