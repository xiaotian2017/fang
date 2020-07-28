export const User_Info =  {
    getUserId() {
        return this
    }
}

Object.defineProperty(User_Info, 'userInfo', {
    set(obj) {
        setInfo(obj)
    },
    get() {
        return getInfo()
    },
})

Object.defineProperty(User_Info, 'id', {
    // set(id) {
    //     setInfo({ id: id })
    //     return temp
    // },
    get() {
        return getInfo('id')
    }
})
Object.defineProperty(User_Info, 'isVip', {
    // set(id) {
    //     setInfo({ id: id })
    //     return temp
    // },
    get() {
        return getInfo('isVip')
    }
})

function setInfo(obj) {
    let temp = uni.getStorageSync('userInfo')
            
    if(temp) {
        obj = { ...temp, ...obj }
    }
    uni.setStorageSync('userInfo', obj)
}
function getInfo(key) {
    let temp = uni.getStorageSync('userInfo')
    return temp[key] || temp
}