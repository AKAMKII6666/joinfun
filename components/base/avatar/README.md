# Avatar 头像组件

用于展示用户头像的组件。

## 引入

```json
{
  "usingComponents": {
    "l-avatar": "/components/base/avatar/avatar"
  }
}
```

## 代码演示

### 基础用法

```html
<l-avatar src="https://example.com/avatar.jpg" />
```

### 尺寸

```html
<!-- 小 -->
<l-avatar src="..." size="sm" />

<!-- 中（默认） -->
<l-avatar src="..." size="md" />

<!-- 大 -->
<l-avatar src="..." size="lg" />
```

### 形状

```html
<!-- 圆形（默认） -->
<l-avatar src="..." shape="circle" />

<!-- 圆角方形 -->
<l-avatar src="..." shape="square" />
```

### 默认头像

```html
<!-- 使用默认文字 -->
<l-avatar defaultText="张" />

<!-- 使用默认图片 -->
<l-avatar src="" />
```

### 带角标

```html
<l-avatar src="..." showBadge badgeText="1" />
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 必填 |
|------|------|------|--------|------|
| src | 头像图片地址 | `string` | `''` | 否 |
| size | 尺寸 | `sm` \| `md` \| `lg` | `md` | 否 |
| shape | 形状 | `circle` \| `square` | `circle` | 否 |
| imageMode | 图片裁剪模式 | `string` | `aspectFill` | 否 |
| defaultText | 默认文字（无头像时显示首字母） | `string` | `''` | 否 |
| showBadge | 是否显示角标 | `boolean` | `false` | 否 |
| badgeText | 角标内容 | `string` | `''` | 否 |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| click | 点击头像时触发 | - |

## 样式变量

```css
page {
  --primary: #07C160;
  --primary-light: #34D082;
  --bg-page: #F5F5F5;
  --bg-card: #FFFFFF;
  --text-muted: #999999;
  --error: #FF5252;
  --radius-md: 12rpx;
}
```

## 注意事项

1. 图片加载失败时自动显示默认样式
2. `size` 支持 sm(64rpx) / md(96rpx) / lg(128rpx)
3. `shape` 支持 circle(圆形) / square(圆角方形)
4. 角标默认显示在右上角

## 典型使用场景

### 用户信息展示
```html
<l-avatar src="{{userInfo.avatarUrl}}" size="md" />
```

### 消息列表头像
```html
<l-avatar src="{{item.avatar}}" size="sm" shape="circle" />
```

### 群聊头像
```html
<l-avatar src="{{item.avatar}}" size="lg" shape="square" />
```

### 带未读数角标
```html
<l-avatar 
  src="{{userInfo.avatar}}"
  showBadge
  badgeText="{{unreadCount > 99 ? '99+' : unreadCount}}"
/>
```
