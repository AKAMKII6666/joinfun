# EmptyState 空状态组件

用于显示列表为空等场景的提示。

## 引入

```json
{
  "usingComponents": {
    "l-empty-state": "/components/business/empty-state/empty-state"
  }
}
```

## 代码演示

### 基础用法

```html
<l-empty-state 
  icon="📭"
  title="暂无活动"
  subtitle="快去发布一个活动吧"
/>
```

### 带按钮

```html
<l-empty-state 
  icon="🎉"
  title="未报名活动"
  buttonText="免费发布"
  bind:click="handlePublish"
/>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| icon | 图标 | `string` | 📭 |
| title | 标题 | `string` | '' |
| subtitle | 副标题 | `string` | '' |
| buttonText | 按钮文字 | `string` | '' |

### Events

| 事件名 | 说明 |
|--------|------|
| click | 点击按钮时触发 |
