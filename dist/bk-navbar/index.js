/*
 * @Author: WTL
 * @LastEditors: WTL
 * @Date: 2019-09-17 14:28:57
 * @LastEditTime: 2019-09-17 15:22:15
 * @Description: 
 */
const sysinfo = wx.getSystemInfoSync();
Component({

    properties: {
        text: {
            type: String,
            value: 'Wechat'
        },
        background: {
            type: String,
            value: '#333'
        },
        back: {
            type: Boolean,
            value: false
        },
        home: {
            type: Boolean,
            value: false
        }
    },
    data: {
        statusBarHeight: sysinfo.statusBarHeight + 'px',
        navigationBarHeight: (sysinfo.statusBarHeight + 44) + 'px'
    },

    methods: {
        backHome: function () {
            let pages = getCurrentPages()
            wx.navigateBack({
                delta: pages.length
            })
        },
        back: function () {
            wx.navigateBack({
                delta: 1
            })
        }
    }
})