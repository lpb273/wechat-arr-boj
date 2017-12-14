//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    arrObj:[
      {
        name:'张三',
        index:0
      },
      {
        name: '李四',
        index: 1
      },
      {
        name: '王五',
        index: 2
      },
      {
        name: '老刘',
        index: 3
      },
    ]
  },
  changeAll(){
    for (var i = 0; i < this.data.arrObj.length;i ++){
      var changeValue = 'arrObj[' + i +'].name';
      this.setData({
        [changeValue] : '全部改变'
      })
    }
  },
  changeOne(){
    var changeValue = 'arrObj[' + 0 + '].name';
    this.setData({
      [changeValue]:'改变第一个'
    })
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
    
  }
})
