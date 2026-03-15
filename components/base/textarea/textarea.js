// components/base/textarea/textarea.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 输入框的值
    value: {
      type: String,
      value: ''
    },
    // 占位符
    placeholder: {
      type: String,
      value: '请输入内容'
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
    // 是否自动增高
    autoSize: {
      type: Boolean,
      value: true
    },
    // 是否显示字数统计
    showCount: {
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
    currentLength: 0,
    isFocused: false
  },

  /**
   * 生命周期方法
   */
  lifetimes: {
    attached() {
      this.updateLength();
    }
  },

  /**
   * 属性观察器
   */
  observers: {
    value(newVal) {
      this.updateLength();
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 更新当前字数
     */
    updateLength() {
      const value = this.data.value || '';
      this.setData({
        currentLength: value.length
      });
    },

    /**
     * 处理输入变化
     */
    handleChange(e) {
      const { value } = e.detail;
      this.setData({ value });
      this.updateLength();
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
    }
  }
});
