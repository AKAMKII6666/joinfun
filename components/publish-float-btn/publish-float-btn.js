// components/publish-float-btn/publish-float-btn.js
Component({
  // 组件属性
  properties: {
    // 按钮文字
    text: {
      type: String,
      value: '+ 发布'
    }
  },

  // 组件数据
  data: {},

  // 组件方法
  methods: {
    // 点击按钮
    onTap: function() {
      this.triggerEvent('tap');
    }
  }
});
