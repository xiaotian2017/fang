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
export const getNewsList = fetch('news/list', {
    detail: '头条新闻列表'
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