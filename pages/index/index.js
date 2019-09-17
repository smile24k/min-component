/*
 * @Author: WTL
 * @LastEditors: WTL
 * @Date: 2019-09-17 13:32:14
 * @LastEditTime: 2019-09-17 13:32:14
 * @Description: 
 */


const pageOptions = {
  change(e) {
    console.log(e)
  }
};
wx.getSystemInfo({
  success: function (res) {
    console.log(res);

  }
})

Page(pageOptions);