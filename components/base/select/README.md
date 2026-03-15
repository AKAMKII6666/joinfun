# Select 下拉选择组件

基于 TDesign t-select 封装的下拉选择组件。

## 引入

```json
{
  "usingComponents": {
    "l-select": "/components/base/select/select"
  }
}
```

## 代码演示

### 基础用法

```html
<l-select 
  options="{{[
    { label: '选项一', value: '1' },
    { label: '选项二', value: '2' },
    { label: '选项三', value: '3' }
  ]}}" 
  placeholder="请选择"
  bind:change="handleChange"
/>
```

### 带有标题

```html
<l-select 
  title="请选择活动类型"
  options="{{activityTypes}}"
  value="{{selectedType}}"
  bind:change="handleChange"
/>
```

### 禁用状态

```html
<l-select 
  options="{{options}}"
  disabled
  value="1"
/>
```

### 错误状态

```html
<l-select 
  options="{{options}}"
  error
  errorMessage="请选择一项"
  bind:change="handleChange"
/>
```

### 自定义图标

```html
<l-select options="{{options}}" placeholder="请选择">
  <text slot="prefix-icon">🏷️</text>
</l-select>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 必填 |
|------|------|------|--------|------|
| options | 选项列表 | `Array<{label, value, disabled}>` | `[]` | 是 |
| value | 当前选中的值 | `string` | `''` | 否 |
| placeholder | 占位符 | `string` | `'请选择'` | 否 |
| title | 弹窗标题 | `string` | `''` | 否 |
| disabled | 是否禁用 | `boolean` | `false` | 否 |
| error | 是否显示错误状态 | `boolean` | `false` | 否 |
| errorMessage | 错误提示信息 | `string` | `''` | 否 |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| change | 选中选项时触发 | `{ value: string, label: string }` |
| select | 选中选项时触发（同 change） | `{ value: string, label: string }` |

### Slot

| 名称 | 说明 |
|------|------|
| prefix-icon | 前缀图标内容 |
| suffix-icon | 后缀图标内容 |

### options 数组项结构

| 字段 | 说明 | 类型 |
|------|------|------|
| label | 显示文本 | `string` |
| value | 值 | `string` |
| disabled | 是否禁用该选项 | `boolean` |

## 样式变量

组件使用全局 CSS 变量，可在 `app.wxss` 中自定义：

```css
page {
  --bg-card: #FFFFFF;
  --bg-page: #F5F5F5;
  --border: #EEEEEE;
  --primary: #07C160;
  --error: #FF5252;
  --text-primary: #212121;
  --text-muted: #999999;
  --radius-md: 12rpx;
  --space-sm: 20rpx;
  --space-xs: 12rpx;
  --font-sm: 28rpx;
  --font-xs: 24rpx;
}
```

## 注意事项

1. `options` 为必填项，必须传入
2. 支持禁用单个选项（`disabled: true`）
3. 弹窗选项高度最大 60vh，超出可滚动
4. 选中后会关闭弹窗并触发 `change` 事件
5. 错误提示显示在组件下方

## 典型使用场景

### 活动类型选择
```javascript
Page({
  data: {
    activityTypes: [
      { label: '聚餐', value: 'meal' },
      { label: '运动', value: 'sports' },
      { label: '娱乐', value: 'entertainment' },
      { label: '学习', value: 'study' },
      { label: '其他', value: 'other' }
    ]
  },
  handleChange(e) {
    console.log('选中:', e.detail.value);
  }
});
```

```html
<l-select 
  title="选择活动类型"
  options="{{activityTypes}}"
  placeholder="请选择活动类型"
  bind:change="handleChange"
/>
```

### 人数选择
```html
<l-select 
  options="{{[
    { label: '1人', value: '1' },
    { label: '2人', value: '2' },
    { label: '3-5人', value: '3-5' },
    { label: '6-10人', value: '6-10' },
    { label: '10人以上', value: '10+' }
  ]}}"
  placeholder="请选择参与人数"
  bind:change="handleChange"
/>
```
