# Radio 单选框组件

用于单选选择的组件。

## 引入

```json
{
  "usingComponents": {
    "l-radio": "/components/base/radio/radio"
  }
}
```

## 代码演示

### 基础用法

```html
<l-radio 
  value="1" 
  label="选项一"
  checked="{{current === '1'}}"
  bind:change="handleChange"
/>
```

### 带描述

```html
<l-radio 
  value="agree"
  label="我已阅读并同意"
  description="《用户协议》和《隐私政策》"
  checked="{{agreed}}"
  bind:change="handleChange"
/>
```

### 禁用状态

```html
<l-radio 
  value="1" 
  label="禁用选项" 
  disabled 
  checked="{{true}}"
/>
```

### 组合使用（通常配合 radio-group）

```html
<l-radio 
  value="male" 
  label="男" 
  checked="{{gender === 'male'}}"
  bind:change="onGenderChange"
/>
<l-radio 
  value="female" 
  label="女" 
  checked="{{gender === 'female'}}"
  bind:change="onGenderChange"
/>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 必填 |
|------|------|------|--------|------|
| value | 单选框的值 | `string` | `''` | 是 |
| checked | 当前是否选中 | `boolean` | `false` | 否 |
| disabled | 是否禁用 | `boolean` | `false` | 否 |
| label | 标签文本 | `string` | `''` | 否 |
| description | 描述文本 | `string` | `''` | 否 |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| change | 选中状态变化时触发 | `{ value: string }` |

## 样式变量

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

1. `value` 为必填项，用于标识选中项
2. 选中时触发 `change` 事件
3. 描述文本显示在选项下方
4. 禁用状态下透明度降低

## 典型使用场景

### 性别选择
```javascript
Page({
  data: {
    gender: 'male'
  },
  onGenderChange(e) {
    this.setData({ gender: e.detail.value });
  }
});
```

```html
<l-radio 
  value="male" 
  label="男" 
  checked="{{gender === 'male'}}"
  bind:change="onGenderChange"
/>
<l-radio 
  value="female" 
  label="女" 
  checked="{{gender === 'female'}}"
  bind:change="onGenderChange"
/>
```

### 同意条款
```html
<l-radio 
  value="agree"
  label="我已阅读并同意"
  description="《用户协议》和《隐私政策》"
  checked="{{agreed}}"
  bind:change="onAgreeChange"
/>
```
