const baseUrl = 'http://47.111.155.35:8081/lmhouse/api/'
const IS_TEST = false

export const fetch = (url, opts) => {
    return params => { 
        if(IS_TEST) {
            params = { 
                type: 1
            }
        }else{
            params = { ...params, type: 1 }
        }
        return new Promise((resolve, reject) => {
            uni.request({
                url:  baseUrl+url, //仅为示例，并非真实接口地址。
                data: params,
                method: 'POST',
                success: (res) => {
                    if(res.statusCode == 200 ) {
                        if(res.data.code==200) {
                            resolve(res.data.data)
                        }else{
                            reject(res)
                        }
                    }else{
                        reject(res)
                    }
                },
                fail: (err) => {
                    reject(err)
                }
            });
        })
    }
}