function http(url, callback, type) {
    wx.request({
        url: url,
        header: {
            'content-type': 'application/json' 
        },
        success(res) {
            console.log(res);
            callback(res.data, type);
        }
    })
}
function cutTitle(title) {
    if (title.length > 12) {
        return title.substring(0, 12) + "..."
    }
    else {
        return title
    }
}
function detailTitle(title) {
    if (title.length > 14) {
        return title.substring(0, 14) + "..."
    }
    else {
        return title
    }
}
module.exports = {
    http: http,
    cutTitle: cutTitle,
    detailTitle: detailTitle
}