// pages/top/top.js
var utils = require("../../utils/util.js");
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
        utils.http("http://www.wwtliu.com/sxtstu/music/baidu/list.php?type=1&count=3&offset=0",this.callback,"newSong");
        utils.http("http://www.wwtliu.com/sxtstu/music/baidu/list.php?type=2&count=3&offset=0", this.callback,"hotSong");
        utils.http("http://www.wwtliu.com/sxtstu/music/baidu/list.php?type=14&count=3&offset=0", this.callback,"movieSong");
        utils.http("http://www.wwtliu.com/sxtstu/music/baidu/list.php?type=22&count=3&offset=0", this.callback,"classicSong");
        utils.http("http://www.wwtliu.com/sxtstu/music/baidu/list.php?type=21&count=3&offset=0", this.callback,"westernSong");
    },
    callback: function (data, type){
        var songdata = {};
        var songlist = [];
        for (var i = 0; i < data.song_list.length;i++){
            data.song_list[i].title = utils.cutTitle(data.song_list[i].title);
            songlist.push(data.song_list[i].title);
        }
        songdata[type] = {
            songlist: songlist,
            songImg: data.billboard.pic_s192,
            type: type
        }
        this.setData(songdata);
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    viewMoreHandler:function(event){
        var type = event.currentTarget.dataset.type;
        wx.navigateTo({
            url: '../detail/detail?type=' + type
        })
        
        
    },
    onReady: function () {

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

    }
})