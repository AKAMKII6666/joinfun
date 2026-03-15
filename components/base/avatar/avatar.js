// components/base/avatar/avatar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 头像图片地址
    src: {
      type: String,
      value: ''
    },
    // 尺寸：sm / md / lg
    size: {
      type: String,
      value: 'md'
    },
    // 形状：circle / square
    shape: {
      type: String,
      value: 'circle'
    },
    // 图片裁剪模式
    imageMode: {
      type: String,
      value: 'aspectFill'
    },
    // 默认文字（无头像时显示首字母）
    defaultText: {
      type: String,
      value: ''
    },
    // 是否显示角标
    showBadge: {
      type: Boolean,
      value: false
    },
    // 角标内容
    badgeText: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isLoading: false,
    isError: false
  },

  /**
   * 生命周期方法
   */
  lifetimes: {
    attached() {
      this.updateDefaultText();
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 更新默认文字
     */
    updateDefaultText() {
      const { src, defaultText } = this.data;
      if (!src && !defaultText) {
        // 默认显示空
        this.setData({ defaultText: '' });
      }
    },

    /**
     * 处理图片加载成功
     */
    handleImageLoad() {
      this.setData({ 
        isLoading: false,
        isError: false 
      });
    },

    /**
     * 处理图片加载失败
     */
    handleImageError() {
      this.setData({ 
        isLoading: false,
        isError: true 
      });
    },

    /**
     * 处理点击
     */
    handleClick() {
      this.triggerEvent('click');
    }
  }
});
