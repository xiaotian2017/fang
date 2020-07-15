import { fetch } from "./fetch"

export const getAdv = fetch('advert/get', {
    detail: 'banner广告'
})
export const getAdviserList = fetch('adviser/list', {
    detail: '优秀顾问推荐列表--'
})
export const areaList = fetch('area/list', {
    detail: '区划列表'
})
export const getBrandList = fetch('brand/list', {
    detail: '优质开发商品牌'
})
export const getNewsDeatil = fetch('news/detail', {
    detail: '新闻详情'
})

export const getHouseDeatil = fetch('project/detail', {
    detail: '项目详情'
})
export const getHouseList = fetch('project/list', {
    detail: '项目列表'
})
export const getOneHouse = fetch('project/houses', {
    detail: '一房一价'
})
export const getHouseModel = fetch('project/models', {
    detail: '项目户型'
})
export const getHouseNews = fetch('project/news', {
    detail: '项目动态'
})
export const getHotList = fetch('project/hot/list', {
    detail: '大家热搜楼盘'
})

export const setAuth = fetch('user/auth', {
    detail: '授权'
})

export const homeTopNews = fetch('/news/top/list', {
    detail: '首页头条'
})
export const getNewsList = fetch('/news/list', {
    //projectId: 楼盘id
    detail: '文章列表'
})

export const getNewsType = fetch('/news/type/list', {
    detail: '文章列表数据字典'
})
