// components/business/empty-state/empty-state.js
Component({
  properties: {
    icon: { type: String, value: '📭' },
    title: { type: String, value: '' },
    subtitle: { type: String, value: '' },
    buttonText: { type: String, value: '' }
  },
  methods: {
    handleButtonClick() {
      this.triggerEvent('click');
    }
  }
});
