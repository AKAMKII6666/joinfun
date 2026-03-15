# TabBar 顶部切换组件

用于页面顶部 Tab 切换的组件，完全自研。

## 引入

```json
{
  "usingComponents": {
    "l-tab-bar": "/components/base/tab-bar/tab-bar"
  }
}
```

## 代码演示

### 基础用法

```html
<l-tab-bar 
  tabs="{{tabs}}" 
  current="{{current}}"
  bind:change="handleChange"
/>
```

```javascript
Page({
  data: {
    current: 0,
    tabs: [
      { title: '已报名' },
      { title: '最近浏览' }
    ]
  },
  handleChange(e) {
    this.setData({ current: e.detail.index });
  }
});
```

### 带图标

```javascript
tabs: [
  { title: '首页', icon: '🏠', iconText: '🏠' },
  { title: '我的', icon: '👤', iconText: '👤' }
]
```

### 禁用某个 Tab

```javascript
tabs: [
  { title: '已报名', key: 'joined' },
  { title: '最近浏览', key: 'recent', disabled: true }
]
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 必填 |
|------|------|------|--------|------|
| tabs | Tab 列表 | `Array<{title, icon, iconText, key, disabled}>` | `[]` | 是 |
| current | 当前选中的索引 | `number` | `0` | 否 |

### tabs 数组项结构

| 字段 | 说明 | 类型 |
|------|------|------|
| title | Tab 标题 | `string` |
| icon | 图标（可选） | `string` |
| iconText | 图标文字（emoji用） | `string` |
| key | 唯一标识 | `string` |
| disabled | 是否禁用 | `boolean` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| change |  | `{ index: number, tab: object }` |

## 样式变量切换 Tab 时触发

```css
page {
  --primary: #07C160;
  --bg-card: #FFFFFF;
  --border: #EEEEEE;
  --text-muted: #999999;
  --font-sm: 28rpx;
}
```

## 注意事项

1. `tabs` 为必填项
2. 激活态显示绿色文字 + 底部指示条
3. 支持禁用单个 Tab
4. 点击当前 tab 不会触发 change 事件

## 典型使用场景

### 首页 Tab 切换
```javascript
Page({
  data: {
    current: 0,
    tabs: [
      { title: '已报名', key: 'joined' },
      { title: '最近浏览', key: 'recent' }
    ]
  },
  handleChange(e) {
    const { index, tab } = e.detail;
    this.setData({ current: index });
    // 根据 tab key 加载不同数据
    this.loadData(tab.key);
  }
});
```

### 订单状态筛选
```javascript
tabs: [
  { title: '全部', key: 'all' },
  { title: '待支付', key: 'pending' },
  { title: '进行中', key: 'ongoing' },
  { title: '已完成', key: 'completed' }
]
```
