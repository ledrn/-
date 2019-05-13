// pages/detail/detail.js
var utils = require("../../utils/util.js")
Page({

    /**
     * 页面的初始数据
     */
    data: {
        musicList:[],
        musicPic:""
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var url = "";
        switch (options.type) {
            case "newSong":
                url = "http://www.wwtliu.com/sxtstu/music/baidu/list.php?type=1&count=20&offset=0";
                break;
            case "hotSong":
                url = "http://www.wwtliu.com/sxtstu/music/baidu/list.php?type=2&count=20&offset=0";
                break;
            case "movieSong":
                url = "http://www.wwtliu.com/sxtstu/music/baidu/list.php?type=14&count=20&offset=0";
                break;
            case "classicSong":
                url = "http://www.wwtliu.com/sxtstu/music/baidu/list.php?type=22&count=20&offset=0";
                break;
            case "westernSong":
                url = "http://www.wwtliu.com/sxtstu/music/baidu/list.php?type=21&count=20&offset=0";
                break;

        }
        utils.http(url, this.callback, options.type);
        // console.log(this.data.songlist);
    },
    callback: function (data) {
        var songlist = [];
        for (var i = 0; i < data.song_list.length; i++) {
            
            data.song_list[i].title = utils.detailTitle(data.song_list[i].title);
           var temp={
                song: data.song_list[i].title,
                singer: data.song_list[i].author,
                songid: data.song_list[i].song_id
            }
            songlist.push(temp);
        }
        
        this.setData({
            musicList: songlist,
            musicPic: data.billboard.pic_s210
        })
        console.log(this.data);
    },
    playHandler:function(event){
        var mid = event.currentTarget.dataset.songid;
        console.log(mid);
        wx.navigateTo({
            url: '../play/play?mid=' + mid,
        })
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
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