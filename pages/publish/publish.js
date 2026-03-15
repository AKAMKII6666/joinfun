// pages/publish/publish.js
const auth = require('../../utils/auth');

Page({
  data: {
    title: '',
    coverImage: '',
    maxCount: '',
    location: '',
    address: '',
    selectedDate: '',
    startTime: '',
    endTime: '',
    phone: '',
    detailImages: [],
    guideImages: [],
    description: ''
  },

  onLoad() {
    // 路由守护：检查登录状态
    auth.checkLogin({ redirect: true });
  },

  onTitleChange(e) {
    this.setData({ title: e.detail.value });
  },

  onChooseCover() {
    wx.chooseMedia({
      count: 1,
      mediaType: ['image'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        this.setData({ coverImage: res.tempFiles[0].tempFilePath });
      }
    });
  },

  onDeleteCover() {
    this.setData({ coverImage: '' });
  },

  onMaxCountChange(e) {
    this.setData({ maxCount: e.detail.value });
  },

  onLocationChange(e) {
    this.setData({ location: e.detail.value });
  },

  onAddressChange(e) {
    this.setData({ address: e.detail.value });
  },

  onDateChange(e) {
    this.setData({ selectedDate: e.detail.value });
  },

  onStartTimeChange(e) {
    this.setData({ startTime: e.detail.value });
  },

  onEndTimeChange(e) {
    this.setData({ endTime: e.detail.value });
  },

  onPhoneChange(e) {
    this.setData({ phone: e.detail.value });
  },

  onChooseDetailImages() {
    const remaining = 12 - this.data.detailImages.length;
    if (remaining <= 0) {
      wx.showToast({ title: '最多上传12张', icon: 'none' });
      return;
    }
    wx.chooseMedia({
      count: remaining,
      mediaType: ['image'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        const newImages = res.tempFiles.map(item => item.tempFilePath);
        this.setData({ detailImages: this.data.detailImages.concat(newImages) });
      }
    });
  },

  onDeleteDetailImage(e) {
    const index = e.currentTarget.dataset.index;
    const images = [...this.data.detailImages];
    images.splice(index, 1);
    this.setData({ detailImages: images });
  },

  onChooseGuideImages() {
    const remaining = 12 - this.data.guideImages.length;
    if (remaining <= 0) {
      wx.showToast({ title: '最多上传12张', icon: 'none' });
      return;
    }
    wx.chooseMedia({
      count: remaining,
      mediaType: ['image'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        const newImages = res.tempFiles.map(item => item.tempFilePath);
        this.setData({ guideImages: this.data.guideImages.concat(newImages) });
      }
    });
  },

  onDeleteGuideImage(e) {
    const index = e.currentTarget.dataset.index;
    const images = [...this.data.guideImages];
    images.splice(index, 1);
    this.setData({ guideImages: images });
  },

  onDescriptionChange(e) {
    this.setData({ description: e.detail.value });
  },

  onPreview() {
    if (!this.validateForm()) return;
    wx.showToast({ title: '预览功能开发中', icon: 'none' });
  },

  onPublish() {
    if (!this.validateForm()) return;
    wx.showLoading({ title: '发布中' });
    setTimeout(() => {
      wx.hideLoading();
      wx.showToast({ title: '发布成功', icon: 'success' });
      setTimeout(() => wx.navigateBack(), 1500);
    }, 1500);
  },

  validateForm() {
    const { title } = this.data;
    if (!title || title.trim().length === 0) {
      wx.showToast({ title: '请输入活动标题', icon: 'none' });
      return false;
    }
    return true;
  }
});
