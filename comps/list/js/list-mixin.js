import { HOUSE_STATUS } from "common/js/config"

const COLOR_MAP = {
	green: { color: '#4cd961', bg: 'rgba(76, 217, 97,0.2)' },
	blue: { color: '#4985c9', bg: 'rgba(73, 133, 201,0.2)' } ,
	gray: { color: '#999999', bg: 'rgba(153, 153, 153,0.2)' } ,
	red: { color: '#e64340', bg: 'rgba(230, 67, 64,0.2)' } ,
}

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
			let { saleStatus, tag } = this.house,
				ret = tag && tag.split(',') || [],
				{ green, gray } = COLOR_MAP

			ret = ret.map(item => {
				return { 
					color: gray.color, 
					title: item, 
					bg: gray.bg 
				}
			})
			
			ret.unshift({ 
				title: HOUSE_STATUS[ saleStatus ], 
				color: green.color, 
				bg: green.bg 
			})
			return ret
		}
	}
}