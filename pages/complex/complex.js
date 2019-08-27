Page({
  data:{
    count:2
  },
  plus() {
    this.setData({
      count: this.data.count + 1,
    })
  },
  navigateTo() {
    my.navigateTo({
      url: '/pages/table/table'
    })
  }
});
