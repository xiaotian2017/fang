import { concatLabels } from "common/js/util"

export const houseMixin = {
    data() {
		return {}
	},
	props:{	
		house:{
			type: Object,
			default: () => {
				return {
					id:0,//	integer($int64)
					name:"",//	string	楼盘名称
					nameEn:"",//	string 	楼盘名称（英文）
					averagePrice:0	,//number	平均单价
					maxPrice:0,//number		最高单价
					minPrice:0,//number		最低单价
					
					buildingArea:"",//	integer($int32)	建筑面积
					maxArea:"",//number	最大户型面积
					minArea:"",//number	最小户型面积
					
					district:"",//	string	区
					block:"",//	string	板块
					remark:"",//string	备注（短评）
					tag:"",//	string	楼盘标签（逗号隔开
					saleStatus: "" //等等
				}
			}
		}
	},
	methods: {
		toDetail() {
			uni.navigateTo({
				url: `../../pages/detail/detail?id=${this.house.id}`,
				animationDuration:300,
				animationType:'pop-in'
			})
		},
	},
	computed: {
		//楼盘状态 + 楼盘表情
		labels() {
			let { saleStatus, tag } = this.house
				
			return concatLabels(saleStatus, tag)
		}
	}
}