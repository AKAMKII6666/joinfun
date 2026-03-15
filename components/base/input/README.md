# Input 输入框组件

基于 TDesign t-input 封装的单行输入组件。

## 引入

```json
{
  "usingComponents": {
    "l-input": "/components/base/input/input"
  }
}
```

## 代码演示

### 基础用法

```html
<l-input placeholder="请输入内容" />
```

### 输入框类型

```html
<!-- 文本输入（默认） -->
<l-input type="text" placeholder="文本输入" />

<!-- 数字输入 -->
<l-input type="number" placeholder="数字输入" />

<!-- 密码输入 -->
<l-input type="password" placeholder="密码输入" />

<!-- 身份证/银行卡输入 -->
<l-input type="digit" placeholder="身份证/银行卡" />
```

### 禁用状态

```html
<l-input disabled placeholder="禁用状态" />
```

### 只读状态

```html
<l-input readonly value="只读内容" />
```

### 错误状态

```html
<l-input 
  error 
  errorMessage="请输入有效的手机号"
  placeholder="请输入手机号"
/>
```

### 带清空按钮

```html
<l-input clearable placeholder="可清空输入" />
```

### 限制长度

```html
<l-input maxlength="11" placeholder="最多输入 11 个字符" />
```

### 自定义前后缀

```html
<l-input placeholder="搜索">
  <text slot="prefix-icon">🔍</text>
</l-input>

<l-input placeholder="请输入金额">
  <text slot="suffix-icon">¥</text>
</l-input>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 必填 |
|------|------|------|--------|------|
| type | 输入框类型 | `text` \| `number` \| `password` \| `digit` | `text` | 否 |
| value | 输入框的值 | `string` | `''` | 否 |
| placeholder | 占位符 | `string` | `'请输入'` | 否 |
| maxlength | 最大长度 | `number` | `-1`（不限制） | 否 |
| disabled | 是否禁用 | `boolean` | `false` | 否 |
| readonly | 是否只读 | `boolean` | `false` | 否 |
| clearable | 是否显示清空按钮 | `boolean` | `false` | 否 |
| error | 是否显示错误状态 | `boolean` | `false` | 否 |
| errorMessage | 错误提示信息 | `string` | `''` | 否 |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| input | 输入内容变化时触发 | `{ value: string }` |
| change | 输入内容变化时触发 | `{ value: string }` |
| focus | 获得焦点时触发 | `event` |
| blur | 失去焦点时触发 | `event` |
| clear | 点击清空按钮时触发 | `event` |

### Slot

| 名称 | 说明 |
|------|------|
| prefix-icon | 前缀图标内容 |
| suffix-icon | 后缀图标内容 |

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

1. 输入框高度固定为 `80rpx`
2. 错误提示会显示在输入框下方
3. 聚焦时边框颜色会变为主题色（`--primary`）
4. 错误状态时边框颜色变为红色（`--error`）
5. `type="number"` 和 `type="digit"` 的区别：
   - `number`：可输入数字和小数点
   - `digit`：只能输入整数（适合身份证、手机号等）
