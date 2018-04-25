// map.js

Page({
  data: {
    markers: [
      {
      // iconPath: "/resources/meishushe.png",
      id: 0,
      latitude: 22.3458600000,
      longitude: 113.5305100000,
      width: 50,
      height: 50,
      callout: {
        content: '我是这个气泡',
        fontSize: 14,
        color: '#ffffff',
        bgColor: '#000000',
        padding: 8,
        borderRadius: 4,
        boxShadow: '4px 8px 16px 0 rgba(0)'
      }
    },
      {
        // iconPath: "/resources/meishushe.png",
        id: 1,
        latitude: 22.3465035302,
        longitude: 113.5269856453,
        width: 50,
        height: 50,
        callout: {
          content: '我是这个气泡',
          fontSize: 14,
          color: '#ffffff',
          bgColor: '#000000',
          padding: 8,
          borderRadius: 4,
          boxShadow: '4px 8px 16px 0 rgba(0)'
        }
      }
    ],
    polyline: [{
      points: [{
        latitude: 22.3458600000,
        longitude: 113.5305100000,
      }, {
        latitude: 22.3465035302,
        longitude: 113.5269856453,
      }],
      color: "#FF0000DD",
      width: 2,
      dottedLine: true
    }],
    controls: [{
      id: 1,
      iconPath: '/resources/meishushe.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  },
  chooseLoc :function(){

    wx.chooseLocation({
      success: function (res) {
          that.setData()
       },
      fail: function (res) { },
      complete: function (res) { },
    })
  }
  
  ,
  getMapMarkers : function(){
    var that = this
    wx.request({
      url: 'http://172.20.10.3:8762/getMarkers',
      data: '',
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        console.log(res);
        // console.log(that.data)
        that.setData({
          'markers[0].latitude': res.data[0].latitude,
          'markers[0].longitude': res.data[0].longitude,
                 })

        // console.log(that.data.markers)
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  }
  ,
  getNowLocation : function(){
    var that = this; 
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        console.log(res)
        var latitude = res.latitude
        var longitude = res.longitude
        that.setData({
          markers : [
            {
              // iconPath: "/resources/meishushe.png",
              id: 0,
              latitude: 22.3630543044,
              longitude: 113.5386800766,
              width: 50,
              height: 50,
              callout: {
                content: '我是这个气泡',
                fontSize: 14,
                color: '#ffffff',
                bgColor: '#000000',
                padding: 8,
                borderRadius: 4,
                boxShadow: '4px 8px 16px 0 rgba(0)'
              }
            },{
              // iconPath: "/resources/meishushe.png",
              id: 1,
              latitude: 22.3492025916,
              longitude: 113.5372209549,
              width: 50,
              height: 50,
              callout: {
                content: '我是这个气泡',
                fontSize: 14,
                color: '#ffffff',
                bgColor: '#000000',
                padding: 8,
                borderRadius: 4,
                boxShadow: '4px 8px 16px 0 rgba(0)'
              }
            }]
          }
        )
        // wx.openLocation({
        //   latitude: latitude,
        //   longitude: longitude,
        //   scale: 28
        // })
        // wx.chooseLocation({
        //   success: function(res) {
        //     console.log(res)
        //   },
        // })
      }
    })
  }
})