# PublishFloatBtn 发布悬浮按钮

右下角悬浮的发布按钮。

## 引入

```json
{
  "usingComponents": {
    "l-publish-float-btn": "/components/business/publish-float-btn/publish-float-btn"
  }
}
```

## 代码演示

### 基础用法

```html
<l-publish-float-btn bind:click="handlePublish" />
```

```javascript
Page({
  handlePublish() {
    wx.navigateTo({ url: '/pages/publish/publish' });
  }
});
```

## API

### Events

| 事件名 | 说明 |
|--------|------|
| click | 点击时触发 |
