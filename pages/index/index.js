//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    view: '1',
    text: '初始化数据data',
    array: [{ msg: '列表渲染1' }, { msg: '列表渲染2' }],
    templateData: { name: 'templateName1', id: 1 }
  },
  //事件处理函数
  bindViewTap: function () {
    console.log("响应点击事件")
  },
  
  ok:function(){

  },
  onShareAppMessage: function () {

    return {
      title: '自定义转发标题',
      path: app.getCurrentPageUrl()
    }
  }
})