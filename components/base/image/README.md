# Image 图片组件

封装微信原生 image 组件，增加加载/错误状态。

## 引入

```json
{
  "usingComponents": {
    "l-image": "/components/base/image/image"
  }
}
```

## 代码演示

### 基础用法

```html
<l-image src="https://example.com/image.jpg" />
```

### 裁剪模式

```html
<!-- 缩放填充（默认） -->
<l-image src="..." mode="aspectFill" />

<!-- 缩放适应 -->
<l-image src="..." mode="aspectFit" />

<!-- 固定宽高 -->
<l-image src="..." mode="widthFix" />
```

### 自定义加载/错误占位

```html
<l-image src="{{src}}" bind:error="handleError">
  <view slot="loading" class="custom-loading">加载中...</view>
  <view slot="error" class="custom-error">❌</view>
</l-image>
```

### 显示错误文字

```html
<l-image src="..." showErrorText />
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 必填 |
|------|------|------|--------|------|
| src | 图片地址 | `string` | `''` | 否 |
| mode | 裁剪模式 | `string` | `aspectFill` | 否 |
| lazyLoad | 懒加载 | `boolean` | `true` | 否 |
| showLoading | 显示加载状态 | `boolean` | `true` | 否 |
| showErrorText | 显示错误文字 | `boolean` | `false` | 否 |

### mode 可选值

| 值 | 说明 |
|----|------|
| scaleToFill | 缩放填充 |
| aspectFit | 缩放适应 |
| aspectFill | 缩放填充（默认） |
| widthFix | 固定宽度 |
| heightFix | 固定高度 |
| top | 居顶 |
| bottom | 居底 |
| center | 居中 |
| left | 居左 |
| right | 居右 |

### Events

| 事件名 | 说明 |
|--------|------|
| load | 图片加载成功时触发 |
| error | 图片加载失败时触发 |
| click | 点击图片时触发 |

## 样式变量

```css
page {
  --bg-page: #F5F5F5;
  --text-muted: #999999;
  --font-xs: 24rpx;
}
```

## 注意事项

1. 加载失败时自动显示占位图
2. `src` 变化时自动重置状态
3. 支持自定义加载/错误插槽

## 典型使用场景

### 活动封面图
```html
<l-image 
  src="{{activity.cover}}"
  mode="aspectFill"
  class="activity-cover"
/>
```

### 用户头像
```html
<l-image 
  src="{{user.avatar}}"
  mode="aspectFill"
  class="user-avatar"
/>
```

### 详情图片
```html
<l-image 
  wx:for="{{images}}"
  wx:key="index"
  src="{{item}}"
  mode="widthFix"
  bind:error="handleImageError"
/>
```
