
import {
  getDraftsList
} from '../../../api/api.js';


Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgDomain: getApp().globalData.imgDomain,
    businessKey: wx.getStorageSync('businessKey'),
    dishList: [],
    sauceList: [],
    objectId: 0,
    currentPage: 0,
    un_finished: '../../../img/un_finished.png',
    un_passed: '../../../img/un_passed.png',
    menuList: [
      {
        title: '菜谱',
        isChecked: true
      },
      {
        title: '酱汁',
        isChecked: false
      },
      // {
      //   title: '其他',
      //   id: 2
      // }
    ],
    status_dish: 0,
    status_sauce: 0,
    status_all: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  onShow: function () {
    this.getDraftsList();
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



  swiperChange: function (e){

    var index = e.currentTarget.dataset.index;
    var menuList = this.data.menuList;

    menuList[index].isChecked = true;

    for (var i = 0; i < menuList.length; i++) {
      if (i != index) {
        menuList[i].isChecked = false;
      }
    }

    this.setData({
      currentPage: index,
      menuList: menuList
    })
  },

  bindchange: function (e) {
    
    if (e.detail.source == 'touch') {
      var index = e.detail.current;
      var menuList = this.data.menuList;

      menuList[index].isChecked = true;

      for (var i = 0; i < menuList.length; i++) {
        if (i != index) {
          menuList[i].isChecked = false;
        }
      }

      this.setData({
        currentPage: index,
        menuList: menuList
      })
    }
  },



  getDraftsList: function () {
    var that = this;
    getDraftsList({
      data: {
        "businessKey": wx.getStorageSync('businessKey'),
        "currentPage": 1,
        "size": 10
      },
      success: function (res) {
        
        console.log(that.data.businessKey)
        console.log(res)

        if (res.data.code == 1) {
          var status_sauce = res.data.data.sauces.length == 0 ? 2 : 1;
          var status_dish = res.data.data.dishes.length == 0 ? 2 : 1;

          that.setData({
            status_all: 1,
            status_sauce: status_sauce,
            status_dish: status_dish,
            dishList: res.data.data.dishes,
            sauceList: res.data.data.sauces
          })

          console.log(that.data.dishList);
          console.log(that.data.sauceList);
        }
      }, 
      fail: function () {
        that.setData({
          status_all: 2
        })
      }
    }) 
  },


  goDetail: function (e) {

    var objectId = e.currentTarget.dataset.id;
    var objectType = e.currentTarget.dataset.type;

    console.log(objectId);
    console.log(objectType);
    wx.navigateTo({
      url: '../../Piazza/DynamicDetail/DynamicDetail?isFrom=drafts&objectId=' + objectId + '&objectType=' + objectType
    })
  },


  confirmEvent: function () {
    this.getDraftsList();
  },





})














