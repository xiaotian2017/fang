import { getAdv, getBrandList, getNewsList } from "@/api"

const types = {
    BANNER_SEARCH: 'BANNER_SEARCH',
}
const store = {
    state: {
        searchKey: '',
        bannerList: [],
        brandList: [],
        newsList: []
    },
    getters: {
        
    },
    mutations: {
        [types.BANNER_SEARCH]: (state, {searchKey, bannerList}) => {
            state.searchKey = searchKey
            state.bannerList = bannerList
        }
    },
    actions: {
        getHomeAdv({ commit, state }){
            if(state.searchKey)  return 
            
            getAdv().then(data => {
				commit(types.BANNER_SEARCH, {
                    searchKey: data.serachbar.projectName,
                    bannerList: data.adverts, 
                } )
			})
        },
        getHomeBrandList({ commit, state }) {
            if(state.brandList.length != 0) return
            getBrandList().then(data => {

            })
        },
        getNewsList({ commit, state }) {
            if(state.newsList.length != 0) return

            getNewsList().then(data => {
                console.log(data)
            })
        }
    }
}
export default store