import { getHouseList } from "@/api"

const types = {
    HOUSE_LIST: 'LIST',
}
const store = {
    state: {
        houselist: '',
    },
    getters: {
        
    },
    mutations: {
        [types.HOUSE_LIST]: (state, list) => {
            state.searchKey = searchKey
            state.bannerList = bannerList
        }
    },
    actions: {
        getHouseList({ commit, state }, params){
            getHouseList().then(data => {
				commit(types.HOUSE_LIST, data)
			})
        }
    }
}
export default store