import { getAdv } from "./index"

export const ADV_API =  {
    TYPE_MAP:  {
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
     
        // hand: 11,
    
        // unlimitedPurchase: 10,
        // need: 11, 
        // improve: 12,
        // luxury: 13,
        // station: 14,
        // finding: 15,
        // yun: 16
    },
    _getList(type) {
        return new Promise((resolve, reject) => {
            getAdv({type: type}).then(data => {
                resolve(data)
            })
        }) 
    },
    getHomeTop() {
        return this._getList(this.TYPE_MAP.homeTop)
    },
    getHomeBot() {
        return this._getList(this.TYPE_MAP.homeBot)
    },
    getSearch() {
        return this._getList(this.TYPE_MAP.search)
    },
    /*  获取页面的配置信息   
        页面类型 =》 banner类型  保持一致
    */
    getList(pageType) {
        return this._getList(this.TYPE_MAP[ pageType ] || 1)
    }
}

export const CONCERN_API = {
    concernType: {
        project: 0,
        const
    }
}