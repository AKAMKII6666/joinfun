// components/wechat-login-btn/wechat-login-btn.js
Component({
  properties: {
    loading: {
      type: Boolean,
      value: false
    }
  },

  methods: {
    onTap() {
      if (!this.data.loading) {
        this.triggerEvent('login');
      }
    }
  }
});
