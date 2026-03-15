// components/base/button/button.js
Component({
  properties: {
    variant: {
      type: String,
      value: 'primary'
    },
    size: {
      type: String,
      value: 'md'
    },
    block: {
      type: Boolean,
      value: false
    },
    disabled: {
      type: Boolean,
      value: false
    },
    loading: {
      type: Boolean,
      value: false
    }
  },

  data: {
    theme: 'default',
    variantClass: '',
    sizeClass: ''
  },

  lifetimes: {
    attached() {
      this.updateClasses();
    }
  },

  observers: {
    variant() { this.updateClasses(); },
    size() { this.updateClasses(); }
  },

  methods: {
    updateClasses() {
      const variantMap = {
        primary: 'variant-primary',
        secondary: 'variant-secondary',
        ghost: 'variant-ghost',
        danger: 'variant-danger'
      };
      const themeMap = {
        primary: 'primary',
        secondary: 'default',
        ghost: 'default',
        danger: 'danger'
      };
      this.setData({
        variantClass: variantMap[this.data.variant] || '',
        theme: themeMap[this.data.variant] || 'default',
        sizeClass: `size-${this.data.size}`
      });
    },

    handleClick(e) {
      if (this.data.disabled || this.data.loading) return;
      this.triggerEvent('click', e.detail);
    }
  }
});
