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
export const getBrandList = fetch('/decoration/brand/list', {
    detail: '优质开发商品牌'
})
export const getNewsDeatil = fetch('news/detail', {
    detail: '新闻详情'
})

///api/project/model/list
export const getHouseDeatil = fetch('project/detail', {
    detail: '项目详情'
})
export const getHouseNews = fetch('project/news/list', {
    detail: '楼盘动态'
})
export const getHouseModels = fetch('project/model/list', {
    detail: '楼盘户型'
})
export const getHousePrice = fetch('project/price/list', {
    detail: '一房一价'
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
export const getHotList = fetch('project/hot/list', {
    detail: '大家热搜楼盘'
})
export const getSwingLog = fetch('project/lottery/log/list', {
    detail: '历时摇号'
})
export const getSwingResult = fetch('project/lottery/record/list', {
    detail: '摇号结果'
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
export const getLmppList = fetch('/news/lmpp/list', {
    detail: '乐米评盘'
})

export const getAdviseres = fetch('/adviser/list', {
    detail: '优秀顾问推荐列表'
})

export const addComment = fetch('/user/comment/add', {
    detail: '新增评论'
})
export const getCommentList = fetch('/user/comment/list', {
    detail: '获取评论列表'
})
export const zanComment = fetch('/user/comment/thumbup', {
    detail: '评论点赞'
})
export const getAreaList = fetch('/area/list', {
    detail: '获取区域信息'
})
export const getTrafficRoutes = fetch('/traffic/routes', {
    detail: '地铁线路'
})
export const getTrafficStations = fetch('/traffic/stations', {
    detail: '地铁站点'
})
export const addConcern = fetch('/user/concern/add', {
    detail:'关注'
})
export const deleteConcern = fetch('/user/concern/delete', {
    detail:'取消关注'
})
export const getGroups = fetch('/wx/group/list', {
    detail:'获取微信群'
})



