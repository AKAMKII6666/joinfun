// components/base/input/input.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 输入框类型：text | number | password | digit
    type: {
      type: String,
      value: 'text'
    },
    // 输入框的值
    value: {
      type: String,
      value: ''
    },
    // 占位符
    placeholder: {
      type: String,
      value: '请输入'
    },
    // 最大长度
    maxlength: {
      type: Number,
      value: -1
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      value: false
    },
    // 是否只读
    readonly: {
      type: Boolean,
      value: false
    },
    // 是否显示清空按钮
    clearable: {
      type: Boolean,
      value: false
    },
    // 是否显示错误状态
    error: {
      type: Boolean,
      value: false
    },
    // 错误提示信息
    errorMessage: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isFocused: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 处理输入变化
     */
    handleChange(e) {
      const { value } = e.detail;
      this.setData({ value });
      this.triggerEvent('input', { value });
      this.triggerEvent('change', { value });
    },

    /**
     * 处理聚焦
     */
    handleFocus(e) {
      this.setData({ isFocused: true });
      this.triggerEvent('focus', e.detail);
    },

    /**
     * 处理失焦
     */
    handleBlur(e) {
      this.setData({ isFocused: false });
      this.triggerEvent('blur', e.detail);
    },

    /**
     * 处理清空
     */
    handleClear(e) {
      this.setData({ value: '' });
      this.triggerEvent('clear', e.detail);
    }
  }
});
