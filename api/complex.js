import { getAdv } from "./index"

const TYPE_MAP = {
    homeTop: 1,
    homeBot: 2,
    search: 3,
    hot: 4,
    detail: 5,
    //即将开盘
    opening: 6,
    //正在公示
    showing: 7,
    //正在登记
    checking: 8,
    //少了一个不限购 unlimitedPurchase
    swingSearch: 9,
    hand: 10
}

export const ADV_API =  {
    _getList(type) {
        return new Promise((resolve, reject) => {
            getAdv({query: type}).then(data => {
                resolve(data)
            })
        }) 
    },
    getHomeTop() {
        return this._getList(TYPE_MAP.homeTop)
    },
    getHomeBot() {
        return this._getList(TYPE_MAP.homeBot)
    },
    getSearch() {
        return this._getList(TYPE_MAP.search)
    },
    /*  获取页面的配置信息   
        页面类型 =》 banner类型  保持一致
    */
    getList(pageType) {
        return this._getList(TYPE_MAP[ pageType ])
    }
}