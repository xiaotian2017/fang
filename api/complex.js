import { getAdv, addConcern, deleteConcern } from "./index"
import { User_Info } from "@/api/storage"

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
        // 楼盘
        project: 0,
        // 顾问
        consultant: 1,
        // 文章
        article: 2,
        // 品牌
        brand: 3
    },
    addConcern({ type, id, name}) {
        let params = {
            concernId: id,
            concernName: name,
            type: this.concernType[type],
            userId: User_Info.id,
        }
        return addConcern(params).then(data => {

        })
    },
    cancelConcern({ type, id }) {
        let params = {
            concernId: id,
            type: this.concernType[type],
            userId: User_Info.id,
        }
        return deleteConcern(params)
    },
    focusProject(id, name) {
        return this.addConcern({ type: 'project', id, name  })
    },
    cancelFocusProject(id) {
        return this.cancelConcern({ type:'project', id })
    }
}