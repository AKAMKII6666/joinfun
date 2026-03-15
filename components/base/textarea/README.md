# Textarea 多行输入框组件

基于 TDesign t-textarea 封装的多行输入组件，支持字数统计。

## 引入

```json
{
  "usingComponents": {
    "l-textarea": "/components/base/textarea/textarea"
  }
}
```

## 代码演示

### 基础用法

```html
<l-textarea placeholder="请输入内容" />
```

### 字数统计

```html
<!-- 显示字数 -->
<l-textarea 
  show-count 
  placeholder="请输入内容（显示字数）"
/>

<!-- 限制字数并显示 -->
<l-textarea 
  show-count 
  maxlength="200"
  placeholder="最多输入 200 字"
/>
```

### 禁用状态

```html
<l-textarea disabled placeholder="禁用状态" />
```

### 只读状态

```html
<l-textarea readonly value="只读内容" />
```

### 错误状态

```html
<l-textarea 
  error 
  errorMessage="请输入至少 10 个字"
  placeholder="请输入活动说明"
/>
```

### 固定高度

```html
<!-- 默认自动增高（autoSize=true） -->
<l-textarea auto-size="{{true}}" />

<!-- 固定高度 -->
<l-textarea auto-size="{{false}}" />
```

### 限制长度

```html
<l-textarea 
  maxlength="500" 
  placeholder="最多输入 500 个字符"
/>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 必填 |
|------|------|------|--------|------|
| value | 输入框的值 | `string` | `''` | 否 |
| placeholder | 占位符 | `string` | `'请输入内容'` | 否 |
| maxlength | 最大长度 | `number` | `-1`（不限制） | 否 |
| disabled | 是否禁用 | `boolean` | `false` | 否 |
| readonly | 是否只读 | `boolean` | `false` | 否 |
| autoSize | 是否自动增高 | `boolean` | `true` | 否 |
| showCount | 是否显示字数统计 | `boolean` | `false` | 否 |
| error | 是否显示错误状态 | `boolean` | `false` | 否 |
| errorMessage | 错误提示信息 | `string` | `''` | 否 |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| input | 输入内容变化时触发 | `{ value: string }` |
| change | 输入内容变化时触发 | `{ value: string }` |
| focus | 获得焦点时触发 | `event` |
| blur | 失去焦点时触发 | `event` |

### 样式变量

组件使用全局 CSS 变量，可在 `app.wxss` 中自定义：

```css
page {
  --bg-card: #FFFFFF;
  --border: #EEEEEE;
  --primary: #07C160;
  --error: #FF5252;
  --text-primary: #212121;
  --text-muted: #999999;
  --radius-md: 12rpx;
  --font-sm: 28rpx;
  --font-xs: 24rpx;
}
```

## 注意事项

1. 默认最小高度为 `160rpx`（约 8 行文字）
2. 默认开启自动增高（`autoSize=true`）
3. 字数统计显示在右下角
4. 超过最大长度时，字数显示为红色
5. 错误提示会显示在组件下方
6. 聚焦时边框颜色变为主题色
7. 错误状态时边框颜色变为红色

## 典型使用场景

### 活动说明输入
```html
<l-textarea 
  placeholder="请详细描述活动内容、流程、注意事项等"
  maxlength="1000"
  show-count
  auto-size="{{true}}"
/>
```

### 意见反馈
```html
<l-textarea 
  placeholder="请告诉我们您的使用体验和改进建议"
  maxlength="500"
  show-count
/>
```

### 备注/留言
```html
<l-textarea 
  placeholder="请输入备注信息（选填）"
  maxlength="200"
  show-count
/>
```
