// components/business/user-info/user-info.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 头像地址
    avatar: {
      type: String,
      value: ''
    },
    // 昵称
    nickname: {
      type: String,
      value: ''
    },
    // 描述/简介
    description: {
      type: String,
      value: ''
    },
    // 头像尺寸
    size: {
      type: String,
      value: 'md'
    },
    // 是否显示箭头
    showArrow: {
      type: Boolean,
      value: false
    },
    // 是否可点击
    clickable: {
      type: Boolean,
      value: false
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
      if (!this.data.clickable) return;
      this.triggerEvent('click');
    }
  }
});
