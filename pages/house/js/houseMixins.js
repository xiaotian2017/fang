import ListMixins from "common/js/listMixins"
import { getHouseList } from "@/api"

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
		this.pageType = type
		this.addParams = {
			pageType: LIST_TYPE[type],
		}
		this._getList()

		this.getAdv && this.getAdv()
    }
}