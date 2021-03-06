import { setAuth } from "@/api"
import { User_Info } from "@/api/storage"

export const dealAuth = () => {
    return new Promise((resolve, reject) => {

        if(User_Info.userInfo) {
            return 
        }
        
        uni.getUserInfo({
            provider:"weixin",
            success(e) {
                let { userInfo } = e
                // console.log(userInfo)
                wx.login({
                    success: (res) => {
                        getOpenId(res.code).then(openid => {
                            
                            setAuth({
                                ...userInfo, 
                                openId: openid
                            }).then(data => {
                                User_Info.userInfo = data
                            })
                        })
                    }
                })
            },
            fail(err) {
                reject()
            }
        })
    })
}

// 小程序 appSecret 小程序 appId去拿用户的    
function getOpenId(code) {
    let url = `https://api.weixin.qq.com/sns/jscode2session?appid=wxdab56edae7dea664&secret=b948cb0332d49225387ba48bf2c4f1de&js_code=${code}&grant_type=authorization_code`

    return new Promise((resolve, reject) => {
        uni.request({
            url:  url, 
            method: 'get',
            success: (res) => {
                resolve(res.data.openid)
            }
        })
    })
}
