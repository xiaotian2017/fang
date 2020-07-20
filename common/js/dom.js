//获取元素距离顶部的高度
export const getHtmlTop = (selector) => {
    return new Promise((resolve, reject) => {
        let query = uni.createSelectorQuery();
        query.select(selector + '').boundingClientRect(data => {
            console.log(data, selector)
            resolve(data && data.top)
        }).exec();
    })
}