import { getAdv } from "./index"

const TYPE_MAP = {
    homeTop: 1,
    homeBot: 2,
    search: 3,
    hotHouse: 4,
    detail: 5,
    //即将开盘
    opening: 6,
    //正在公示
    showing: 7,
    //正在登记
    checking: 8,
    swing: 9,
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
    }
}