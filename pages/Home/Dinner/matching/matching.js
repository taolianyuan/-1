// pages/Home/Dinner/matching/matching.js


const app = getApp();
var globalData = getApp().globalData;

import {
  getmtcheddegree
} from '../../../../api/api.js';


Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    that.getmtcheddegree()
  },
 

  getmtcheddegree: function () {
    var that = this;
    getmtcheddegree({
      success: function (res) {
        if (res.data.code == 1) {
          // console.log(res.data.data)
          // that.setData({
          //   list: res.data.data
          // })
        }
        console.log(res, "22222222222")
      }
    })
  },

  



  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  // 返回主页
  bthome: function () {
    wx.navigateTo({
      url: "/pages/Home/Dinner/Choice/Choice",
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    var that = this
    if (res.from === 'button') {
      that.data.shareBtn = true;
    } else {
      //来自右上角转发
      that.data.shareBtn = false;
    }
    return {
      title: '自定义转发标题',
      path: 'pages/Home/Dinner/Details/Details?id=' + 1,
    }
  }


})