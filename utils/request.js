
const baseUrl = 'https://eiom.totwoo.com'
export default {
    request: (url, method, data) => {
        let _url = `${baseUrl}${url}`;
        console.log(_url);
        return new Promise((resolve, reject) => {
			wx.showLoading({
				title: '正在加载',
			});
            wx.request({
                url: _url,
                data: data,
                method: method,
                header: {
                    'content-type': 'application/x-www-form-urlencoded',
                    "authorization": wx.getStorageSync('token')
                },
                success: (res) => {
                    console.log('从接口获取到的数据', res);
					let { code } = res.data;
					if(code===0) {
						resolve(res.data);
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

