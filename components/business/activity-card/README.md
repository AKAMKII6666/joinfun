# ActivityCard 活动卡片组件

用于展示活动信息的卡片组件。

## 引入

```json
{
  "usingComponents": {
    "l-activity-card": "/components/business/activity-card/activity-card",
    "l-image": "/components/base/image/image"
  }
}
```

## 代码演示

### 基础用法

```html
<l-activity-card 
  activity="{{activity}}"
  bind:click="handleClick"
/>
```

```javascript
Page({
  data: {
    activity: {
      id: '1',
      title: '周末聚餐',
      cover: 'https://example.com/cover.jpg',
      dateText: '12-09 周二 14:00~16:00',
      location: '保利国际影城',
      joinedCount: 5,
      maxCount: 20,
      status: 'ongoing'
    }
  },
  handleClick(e) {
    const { activity } = e.detail;
    wx.navigateTo({ url: `/pages/activity-detail/activity-detail?id=${activity.id}` });
  }
});
```

### 带默认封面

```html
<l-activity-card 
  activity="{{activity}}"
  defaultCover="/images/default-cover.png"
/>
```

## activity 对象结构

| 字段 | 说明 | 类型 |
|------|------|------|
| id | 活动ID | `string` |
| title | 活动标题 | `string` |
| cover | 封面图URL | `string` |
| dateText | 日期时间文本 | `string` |
| location | 地点 | `string` |
| locationName | 地点名称（可选） | `string` |
| joinedCount | 已报名人数 | `number` |
| maxCount | 最大人数 | `number` |
| status | 状态 | `pending` \| `ongoing` \| `completed` \| `cancelled` |
| organizer | 发起人信息 | `{nickname: string}` |

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 必填 |
|------|------|------|--------|------|
| activity | 活动数据对象 | `object` | `{}` | 是 |
| defaultCover | 默认封面图 | `string` | `''` | 否 |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| click | 点击卡片时触发 | `{ activity: object }` |

## 样式变量

```css
page {
  --bg-card: #FFFFFF;
  --border: #EEEEEE;
  --primary: #07C160;
  --text-primary: #212121;
  --text-secondary: #666666;
  --text-muted: #999999;
  --radius-md: 12rpx;
  --radius-sm: 8rpx;
  --shadow-sm: 0 2rpx 8rpx rgba(0, 0, 0, 0.04);
  --font-xs: 24rpx;
  --font-md: 32rpx;
}
```

## 注意事项

1. `activity` 为必填项
2. 封面图采用 16:9 比例
3. 标题最多显示2行，超出省略
4. 支持显示活动状态标签

## 典型使用场景

### 首页活动列表
```html
<view class="activity-list">
  <l-activity-card 
    wx:for="{{activities}}"
    wx:key="id"
    activity="{{item}}"
    bind:click="handleActivityClick"
  />
</view>
```

### 我发起的活动卡片
```javascript
activity: {
  id: '123',
  title: '周五下班聚餐',
  cover: 'https://example.com/food.jpg',
  dateText: '03-13 周五 18:00~20:00',
  location: '海底捞(大望路店)',
  joinedCount: 8,
  maxCount: 10,
  status: 'pending',
  organizer: { nickname: '小明' }
}
```
