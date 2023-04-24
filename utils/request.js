
const baseUrl = 'https://eiom.totwoo.com'
module.exports = {
    request: (url, method, data) => {
        let token = wx.getStorageSync('token')
        let _url = `${baseUrl}${url}`;
        return new Promise((resolve, reject) => {
          let head = true
          if (url === "/api/member/login") head = false 
			wx.showLoading({
				title: '正在加载',
			});
            wx.request({
                url: _url,
                data: data,
                method: method,
                header: head ? {"authorization": token} : {'content-type':'application/x-www-form-urlencoded',},
                success: (res) => {
                    let { errorMsg } = res.data;
                    if(errorMsg==='success') {
                      resolve(res.data.data);
                      wx.hideLoading();
                    }else {
                      wx.showToast({
                        title: '数据请求错误',
                      })
                    }
                },
				fail() {
                      reject('接口有误，请检查')
				}
            });
			
        });
    },
}

