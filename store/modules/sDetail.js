import { getHouseDeatil,getHouseNews } from "@/api"

const types = {
    HOUSE_DETAIL: 'HOUSE_DETAIL',
    HOUSE_NEWS: 'HOUSE_NEWS',
    PROJECT_ID: 'PROJECT_ID'
}
/**
 *   imgs: [],
        videos: []
        medias: [],
        //楼盘媒介类型
        mediasType: [],
        advisers: [],
        concern: 0,
        //摇号指南
        lotteryGuide: {},
        //摇号记录
        lotteryLog: [],
        //摇号结果
        lotteryRecord: [],
        //楼盘详细信息
        info: {},
        //楼盘群组
        wxGroups: []
 */
const store = {
    namespaced: true,
    state: {
        projectId: null,
        houseDetail: null,
        houseNews: [],
    },
    getters: {
        bannerList(state) {
            let ret = []
            if(state.houseDetail) {
                ret = state.houseDetail.videos.concat(state.houseDetail.imgs)
            }
            return ret
        },
        medias(state) {
            let ret = []
            if(state.houseDetail) {
                ret = state.houseDetail.medias
            }
            return ret
        },
        houseInfo(state) {
            let ret = {}
            if(state.houseDetail) {
                ret = state.houseDetail.project
            }
            return ret
        },
        advisers(state) {
            let ret = {}
            if(state.houseDetail) {
                ret = state.houseDetail.advisers
            }
            return ret
        },
        lotteryGuides(state) {
            let ret = {}
            if(state.houseDetail) {
                ret = state.houseDetail.lotteryGuides
            }
            return ret
        }
    },
    mutations: {
        [types.PROJECT_ID]: (state, data) => {
            state.projectId = data
        },
        [types.HOUSE_DETAIL]: (state, data) => {
            state.houseDetail = data
        },
        [types.HOUSE_NEWS]: (state, data) => {
            state.houseNews = state.houseNews.concat(data)
        },
    },
    actions: {
        async getDeatilInfo({ commit }, projectId){
            commit(types.PROJECT_ID, projectId)

            await getHouseDeatil({ projectId }).then(data => {
                commit(types.HOUSE_DETAIL, data)
			})
        },
        getHouseNews({ commit,state }, {pageNum}) {
            let params = {
                projectId: state.projectId,
                pageNum,
                pageSize: 10
            }
            getHouseNews(params).then(data => {
                commit(types.HOUSE_NEWS, data.record)
            })
        }
    }
}
export default store