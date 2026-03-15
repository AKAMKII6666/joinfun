# UserInfo 用户信息组件

用于展示用户基本信息的组件，组合头像+昵称+描述。

## 引入

```json
{
  "usingComponents": {
    "l-user-info": "/components/business/user-info/user-info"
  }
}
```

## 代码演示

### 基础用法

```html
<l-user-info 
  avatar="{{user.avatar}}"
  nickname="{{user.nickname}}"
/>
```

### 带描述

```html
<l-user-info 
  avatar="{{user.avatar}}"
  nickname="{{user.nickname}}"
  description="加入我们吧！"
/>
```

### 可点击

```html
<l-user-info 
  avatar="{{user.avatar}}"
  nickname="{{user.nickname}}"
  clickable
  showArrow
  bind:click="handleClick"
/>
```

### 小尺寸头像

```html
<l-user-info 
  avatar="{{user.avatar}}"
  nickname="{{user.nickname}}"
  size="sm"
/>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 必填 |
|------|------|------|--------|------|
| avatar | 头像地址 | `string` | `''` | 否 |
| nickname | 昵称 | `string` | `''` | 是 |
| description | 描述/简介 | `string` | `''` | 否 |
| size | 头像尺寸 | `sm` \| `md` \| `lg` | `md` | 否 |
| showArrow | 是否显示箭头 | `boolean` | `false` | 否 |
| clickable | 是否可点击 | `boolean` | `false` | 否 |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| click | 点击时触发 | - |

## 样式变量

```css
page {
  --text-primary: #212121;
  --text-muted: #999999;
  --font-xs: 24rpx;
  --font-sm: 28rpx;
}
```

## 注意事项

1. `nickname` 为必填项
2. 头像尺寸支持 sm(64rpx) / md(96rpx) / lg(128rpx)
3. 描述为可选，通常用于展示个人简介或个性签名
4. `clickable=true` 时整个区域可点击

## 典型使用场景

### 活动详情页发起人信息
```html
<l-user-info 
  avatar="{{activity.organizer.avatar}}"
  nickname="{{activity.organizer.nickname}}"
  description="发起人"
  clickable
  showArrow
  bind:click="handleOrganizerClick"
/>
```

### 评论列表用户信息
```html
<l-user-info 
  wx:for="{{comments}}"
  avatar="{{item.user.avatar}}"
  nickname="{{item.user.nickname}}"
  description="{{item.timeAgo}}"
  size="sm"
/>
```

### 个人中心用户信息
```html
<l-user-info 
  avatar="{{userInfo.avatar}}"
  nickname="{{userInfo.nickname}}"
  description="查看并编辑个人资料"
  clickable
  showArrow
  bind:click="handleProfileClick"
/>
```
