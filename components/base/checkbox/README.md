# Checkbox 复选框组件

用于多选选择的组件。

## 引入

```json
{
  "usingComponents": {
    "l-checkbox": "/components/base/checkbox/checkbox"
  }
}
```

## 代码演示

### 基础用法

```html
<l-checkbox 
  value="agree"
  label="我同意"
  checked="{{isAgreed}}"
  bind:change="handleChange"
/>
```

### 带描述

```html
<l-checkbox 
  value="terms"
  label="我已阅读并同意"
  description="《用户协议》和《隐私政策》"
  bind:change="handleChange"
/>
```

### 禁用状态

```html
<l-checkbox 
  value="1" 
  label="禁用选项" 
  disabled 
  checked="{{true}}"
/>
```

### 组合使用（多选）

```html
<l-checkbox 
  value="reading"
  label="阅读"
  checked="{{hobbies.includes('reading')}}"
  bind:change="onHobbyChange"
/>
<l-checkbox 
  value="sports"
  label="运动"
  checked="{{hobbies.includes('sports')}}"
  bind:change="onHobbyChange"
/>
<l-checkbox 
  value="music"
  label="音乐"
  checked="{{hobbies.includes('music')}}"
  bind:change="onHobbyChange"
/>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 必填 |
|------|------|------|--------|------|
| value | 复选框的值 | `string` | `''` | 是 |
| checked | 当前是否选中 | `boolean` | `false` | 否 |
| disabled | 是否禁用 | `boolean` | `false` | 否 |
| label | 标签文本 | `string` | `''` | 否 |
| description | 描述文本 | `string` | `''` | 否 |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| change | 选中状态变化时触发 | `{ value: string, checked: boolean }` |

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

1. `value` 为必填项，用于标识选项
2. 选中/取消选中都会触发 `change` 事件
3. 描述文本显示在选项下方
4. 禁用状态下透明度降低

## 典型使用场景

### 兴趣选择
```javascript
Page({
  data: {
    hobbies: []
  },
  onHobbyChange(e) {
    const { value, checked } = e.detail;
    let hobbies = this.data.hobbies;
    if (checked) {
      hobbies.push(value);
    } else {
      hobbies = hobbies.filter(h => h !== value);
    }
    this.setData({ hobbies });
  }
});
```

```html
<l-checkbox 
  value="reading"
  label="阅读"
  checked="{{hobbies.includes('reading')}}"
  bind:change="onHobbyChange"
/>
<l-checkbox 
  value="sports"
  label="运动"
  checked="{{hobbies.includes('sports')}}"
  bind:change="onHobbyChange"
/>
<l-checkbox 
  value="music"
  label="音乐"
  checked="{{hobbies.includes('music')}}"
  bind:change="onHobbyChange"
/>
```

### 协议同意
```html
<l-checkbox 
  value="agree"
  label="我已阅读并同意"
  description="《用户协议》和《隐私政策》"
  checked="{{agreed}}"
  bind:change="onAgreeChange"
/>
```
