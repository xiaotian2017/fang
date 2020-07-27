import ListMixins from "common/js/listMixins"
import { getHouseList } from "@/api"
import { LIST_TYPE } from "common/js/config"

export default {
    data() {
        return {
            filterDownVisible: false,
            listApi: getHouseList
        }
    },
    mixins: [ ListMixins ],
    methods: {
        getAdv() {
			this.$ADV_API.getList(this.pageType).then(data => {
				this.bannerList = data.adverts
				this.searchKey = data.serachbar.projectName
			})
		},
        getFilterParmas(params) {
			this.pageNum = 1
            this.addParams = {
                pageType: this.pageType,
                ...params
            }
			this._getList()
		},
    },
    onLoad(e) {
        let { type } = e

        if(type) {
            this.pageTypeStr = type
        }
        let temp =  LIST_TYPE[this.pageTypeStr]

        

        if(temp) {
            this.pageType = temp[0]

            this.addParams = {
                pageType: this.pageType
            }
            this._getList()
            
            uni.setNavigationBarTitle({
                title:`乐米选房-${temp[1]}`
            })
    
            this.getAdv && this.getAdv()
        } 
    }
}