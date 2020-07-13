<template>
	<view @click="toDetail" class="p-list">

		<ImgMask></ImgMask>
		<view class="text-w">
			<view class="tit">{{house.name}}</view>
			<view class="pricearea">
				<text class="price">{{house.minPrice}}-{{house.maxPrice}}元/m²</text>
				<text class="area">{{house.minArea}}-{{house.maxArea}}m²</text>
			</view>
			<view class="local">
				<text>{{house.district}}</text>
				<text class="block">{{house.block}}</text>
			</view>
			<view class="label">
				<text v-for="(item,index) in labels " :style="{color:item.color,background:item.bg}" :key="index">{{item.title}}</text>
			</view>
			 <view class="desc">{{house.remark}}</view> 
		</view>
	</view>
</template>

<script>
import ImgMask from "./img-mask.vue"
import { HOUSE_STATUS } from "common/js/config"

const COLOR_MAP = {
	green: { color: '#4cd961', bg: 'rgba(76, 217, 97,0.2)' },
	blue: { color: '#4985c9', bg: 'rgba(73, 133, 201,0.2)' } ,
	gray: { color: '#999999', bg: 'rgba(153, 153, 153,0.2)' } ,
	red: { color: '#e64340', bg: 'rgba(230, 67, 64,0.2)' } ,
}

export default {		
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
	components: {
		ImgMask
	},
	methods: {
		toDetail() {
			uni.navigateTo({
				url: `../../pages/detail/detail?id=${this.id}`,
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
</script>

<style lang="scss">
	.p-list {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		padding: 30rpx 0; font-size: $font; border-bottom: 1px solid $border;

		.text-w {
			flex: 2;
			margin-left: 30rpx;

			.tit {
				font-size: 30rpx;
				color: #000;
				font-weight: bold;
			}

			.pricearea {
				margin-top: 8rpx;

				.price {
					font-size: 28rpx;
					color: #f00;
					font-weight: bold;
				}

				.area {
					margin-left: 15rpx;
					font-size: 28rpx;
					color: #4CD964;
					font-weight: bold;
				}
			}

			.local {
				text {
					font-size: 23rpx;
					color: #555555;
				}
				.block {
					margin-left: 10rpx;
				}
			}

			.label {
				margin-top: 6rpx;
				text {
					margin-right: 10rpx;
					font-size: 22rpx;
					padding-left: 5rpx;
					padding-right: 5rpx;
				}
			}

			.desc {
				font-size: 20rpx;
				color: #808080;
			}
		}
	}
</style>
