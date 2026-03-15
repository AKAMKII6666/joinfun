Component({
  data: {
    selected: 0,
    list: [
      {
        pagePath: "/pages/index/index",
        text: "首页",
        icon: "/images/tabbar/home.svg",
        selectedIcon: "/images/tabbar/home_selected.svg",
      },
      {
        pagePath: "/pages/my-activities/my-activities",
        text: "我发起的",
        icon: "/images/tabbar/list.svg",
        selectedIcon: "/images/tabbar/list_selected.svg",
      },
      {
        pagePath: "/pages/profile/profile",
        text: "我的",
        icon: "/images/tabbar/user.svg",
        selectedIcon: "/images/tabbar/user_selected.svg",
      }
    ]
  },

  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.redirectTo({ url })
    }
  },

  attached() {
    const pages = getCurrentPages()
    const currentPage = pages[pages.length - 1]
    const route = '/' + currentPage.route
    
    const index = this.data.list.findIndex(item => item.pagePath === route)
    if (index !== -1) {
      this.setData({ selected: index })
    }
  },

  show() {
    const pages = getCurrentPages()
    if (pages.length) {
      const currentPage = pages[pages.length - 1]
      const route = '/' + currentPage.route
      const index = this.data.list.findIndex(item => item.pagePath === route)
      if (index !== -1) {
        this.setData({ selected: index })
      }
    }
  }
})
