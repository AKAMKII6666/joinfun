# Badge 徽章组件

用于显示数量角标或红点提示。

## 引入

```json
{
  "usingComponents": {
    "l-badge": "/components/base/badge/badge"
  }
}
```

## 代码演示

### 基础用法

```html
<l-badge count="5">
  <view>内容区域</view>
</l-badge>
```

### 红点模式

```html
<l-badge dot>
  <view>新消息</view>
</l-badge>
```

### 尺寸

```html
<l-badge count="5" size="sm" />
<l-badge count="5" size="md" />
<l-badge count="5" size="lg" />
```

### 自定义颜色

```html
<l-badge count="10" customColor="#FF9500" />
```

### 最大数量

```html
<l-badge count="100" maxCount="99" />
<l-badge count="1000" maxCount="999" />
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 必填 |
|------|------|------|--------|------|
| count | 徽章数字 | `number` | `0` | 否 |
| dot | 是否显示红点 | `boolean` | `false` | 否 |
| size | 尺寸 | `sm` \| `md` \| `lg` | `md` | 否 |
| showBadge | 是否显示徽章 | `boolean` | `true` | 否 |
| customColor | 自定义背景颜色 | `string` | `''` | 否 |
| maxCount | 最大显示数量 | `number` | `99` | 否 |

## 样式变量

```css
page {
  --error: #FF5252;
  --bg-card: #FFFFFF;
}
```

## 注意事项

1. 组件为容器型，需要包裹目标内容
2. 徽章默认显示在右上角
3. 红点模式下 `count` 失效
4. 超出 `maxCount` 显示如 "99+"

## 典型使用场景

### 消息未读数
```html
<l-badge count="{{unreadCount}}" maxCount="99">
  <view class="message-icon">消息</view>
</l-badge>
```

### 新消息红点
```html
<l-badge dot>
  <view class="tab-item">新消息</view>
</l-badge>
```

### 活动报名人数
```html
<l-badge count="{{activity.joinedCount}}" size="sm">
  <image src="{{activity.cover}}" />
</l-badge>
```

### 购物车数量
```html
<l-badge count="{{cartCount}}" customColor="#07C160">
  <view class="cart-icon">购物车</view>
</l-badge>
```
