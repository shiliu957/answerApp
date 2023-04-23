
const baseUrl = 'https://eiom.totwoo.com'
module.exports = {
    request: (url, method, data) => {
        let _url = `${baseUrl}${url}`;
      console.log(_url,method,data,"fasongzhiqian");
        return new Promise((resolve, reject) => {
          let head = true
          if (url === "/api/member/login") head = false 
          console.log(head,"zhenjia");
			wx.showLoading({
				title: '正在加载',
			});
            wx.request({
                url: _url,
                data: data,
                method: method,
                header: head ? {

                  "authorization": wx.getStorageSync('token')
                } : {                  'content-type':'application/x-www-form-urlencoded',},
                success: (res) => {
                    console.log('从接口获取到的数据', res);
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

