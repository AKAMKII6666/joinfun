# Switch 开关组件

用于切换开关状态的组件。

## 引入

```json
{
  "usingComponents": {
    "l-switch": "/components/base/switch/switch"
  }
}
```

## 代码演示

### 基础用法

```html
<l-switch bind:change="handleChange" />
```

### 带标签

```html
<l-switch 
  label="接收通知" 
  checked="{{true}}"
  bind:change="handleChange"
/>
```

### 带描述

```html
<l-switch 
  label="接收通知"
  description="开启后，您将收到活动报名提醒"
  bind:change="handleChange"
/>
```

### 禁用状态

```html
<l-switch 
  label="禁用开关" 
  disabled 
  checked="{{true}}"
/>
```

### 自定义颜色

```html
<l-switch 
  label="自定义颜色" 
  color="#FF9500"
  bind:change="handleChange"
/>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 必填 |
|------|------|------|--------|------|
| checked | 当前是否选中 | `boolean` | `false` | 否 |
| color | 开关颜色 | `string` | `'#07C160'` | 否 |
| disabled | 是否禁用 | `boolean` | `false` | 否 |
| label | 标签文本 | `string` | `''` | 否 |
| description | 描述文本 | `string` | `''` | 否 |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| change | 开关状态变化时触发 | `{ value: boolean }` |

## 样式变量

组件使用全局 CSS 变量，可在 `app.wxss` 中自定义：

```css
page {
  --primary: #07C160;
  --border: #EEEEEE;
  --text-primary: #212121;
  --text-muted: #999999;
  --font-sm: 28rpx;
  --font-xs: 24rpx;
}
```

## 注意事项

1. 开关默认绿色（`#07C160`），与微信主题色一致
2. 点击标签也可触发切换
3. 描述文本会显示在开关下方
4. 禁用状态下透明度降低

## 典型使用场景

### 通知设置
```javascript
Page({
  data: {
    notifyEnabled: false
  },
  handleNotifyChange(e) {
    this.setData({ notifyEnabled: e.detail.value });
  }
});
```

```html
<l-switch 
  label="接收活动通知"
  description="有新的活动邀请时推送提醒"
  checked="{{notifyEnabled}}"
  bind:change="handleNotifyChange"
/>
```

### 隐私设置
```html
<l-switch 
  label="公开我的活动"
  description="其他人可以看到我发布的活动"
  checked="{{isPublic}}"
  bind:change="handlePublicChange"
/>
```
