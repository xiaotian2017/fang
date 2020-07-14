import { setAuth } from "@/api"

export const dealAuth = () => {
    return new Promise((resolve, reject) => {
        uni.getUserInfo({
            provider:"weixin",
            success(e) {
                let { userInfo } = e
                wx.login({
                    success: (res) => {
                        setAuth({
                            ...userInfo, 
                            code: res.code
                        }).then(data => {
                            console.log(data)
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