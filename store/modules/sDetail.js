import { getHouseDeatil } from "@/api"

const types = {
    HOUSE_DETAIL: 'HOUSE_DETAIL',
}
const store = {
    state: {
        houseDetail: {},
        imgs: [],
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
    },
    getters: {
        
    },
    mutations: {
        [types.HOUSE_DETAIL]: (state, data) => {
            state.houseDetail = data
        }
    },
    actions: {
        getDeatilInfo({ commit }, { projectId }){
            getHouseDeatil({ projectId }).then(data => {
				commit(types.HOUSE_DETAIL, data)
			})
        }
    }
}
export default store