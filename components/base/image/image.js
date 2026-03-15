// components/base/image/image.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 图片地址
    src: {
      type: String,
      value: ''
    },
    // 裁剪模式
    mode: {
      type: String,
      value: 'aspectFill'
    },
    // 懒加载
    lazyLoad: {
      type: Boolean,
      value: true
    },
    // 是否显示加载状态
    showLoading: {
      type: Boolean,
      value: true
    },
    // 是否显示错误文字
    showErrorText: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    error: false,
    showLoading: true
  },

  /**
   * 观察器
   */
  observers: {
    src() {
      // src 变化时重置状态
      this.setData({
        error: false,
        showLoading: true
      });
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 图片加载成功
     */
    handleLoad() {
      this.setData({ showLoading: false });
      this.triggerEvent('load');
    },

    /**
     * 图片加载失败
     */
    handleError() {
      this.setData({ 
        showLoading: false,
        error: true 
      });
      this.triggerEvent('error');
    },

    /**
     * 点击图片
     */
    handleClick() {
      this.triggerEvent('click');
    }
  }
});
