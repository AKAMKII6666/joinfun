// components/base/select/select.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 选项列表
    options: {
      type: Array,
      value: []
    },
    // 当前选中的值
    value: {
      type: String,
      value: ''
    },
    // 提示文字
    placeholder: {
      type: String,
      value: '请选择'
    },
    // 是否禁用
    disabled: {
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
    selectedIndex: 0,
    selectedLabel: ''
  },

  /**
   * 生命周期方法
   */
  lifetimes: {
    attached() {
      this.updateSelected();
    }
  },

  /**
   * 属性观察器
   */
  observers: {
    value() {
      this.updateSelected();
    },
    options() {
      this.updateSelected();
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 更新选中状态
     */
    updateSelected() {
      const { value, options } = this.data;
      const index = options.findIndex(item => item.value === value);
      const selected = options[index];
      
      this.setData({
        selectedIndex: index >= 0 ? index : 0,
        selectedLabel: selected ? selected.label : ''
      });
    },

    /**
     * 处理选择变化
     */
    handleChange(e) {
      const { options } = this.data;
      const index = e.detail.value;
      const selected = options[index];
      
      if (!selected) return;
      
      // 检查是否禁用
      if (selected.disabled) return;
      
      this.setData({
        selectedIndex: index,
        selectedLabel: selected.label
      });
      
      // 触发事件
      this.triggerEvent('change', { 
        value: selected.value, 
        label: selected.label 
      });
    }
  }
});
