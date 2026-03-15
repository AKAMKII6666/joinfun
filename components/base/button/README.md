# Button 按钮组件

基于 TDesign t-button 封装的按钮组件，支持多种变体和尺寸。

## 引入

```json
{
  "usingComponents": {
    "l-button": "/components/base/button/button"
  }
}
```

## 代码演示

### 基础用法

```html
<l-button>默认按钮</l-button>
```

### 按钮变体

```html
<!-- 主要按钮 -->
<l-button variant="primary">主要按钮</l-button>

<!-- 次要按钮 -->
<l-button variant="secondary">次要按钮</l-button>

<!-- 幽灵按钮 -->
<l-button variant="ghost">幽灵按钮</l-button>

<!-- 危险按钮 -->
<l-button variant="danger">危险按钮</l-button>
```

### 按钮尺寸

```html
<!-- 小尺寸 -->
<l-button size="sm">小按钮</l-button>

<!-- 中尺寸（默认） -->
<l-button size="md">中按钮</l-button>

<!-- 大尺寸 -->
<l-button size="lg">大按钮</l-button>
```

### 块级按钮

```html
<l-button block>块级按钮</l-button>
```

### 禁用状态

```html
<l-button disabled>禁用按钮</l-button>
```

### 加载状态

```html
<l-button loading>加载中</l-button>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 必填 |
|------|------|------|--------|------|
| variant | 按钮变体 | `primary` \| `secondary` \| `ghost` \| `danger` | `primary` | 否 |
| size | 按钮尺寸 | `sm` \| `md` \| `lg` | `md` | 否 |
| block | 是否为块级按钮 | `boolean` | `false` | 否 |
| disabled | 是否禁用 | `boolean` | `false` | 否 |
| loading | 是否加载中 | `boolean` | `false` | 否 |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| click | 点击按钮时触发 | - |

### 样式变量

组件使用全局 CSS 变量，可在 `app.wxss` 中自定义：

```css
page {
  --primary: #07C160;
  --error: #FF5252;
  --radius-md: 12rpx;
  --font-xs: 24rpx;
  --font-sm: 28rpx;
  --font-md: 32rpx;
}
```

## 注意事项

1. 按钮在 `disabled` 或 `loading` 状态下不会触发 `click` 事件
2. 块级按钮（`block`）会自动占满父容器宽度
3. 建议根据操作的重要性选择合适的变体：
   - 主要操作使用 `primary`
   - 次要操作使用 `secondary` 或 `ghost`
   - 危险操作使用 `danger`
