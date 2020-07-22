<template>
	<view class="detail-info">
		<view class="tabs-top">
			<view class="tab active" v-for="(tab, i) in lotteryGuides" :key="i" :class="{active: i==tabIndex}">{{tab.building}}</view>
		</view>
		<view class="tit ">摇号指南</view>
		<view class="guide-t">
			<view class="row">
				<text class="guide-title">所在模块：</text>
				<text class="guide-content">{{guideData.block}}</text>
			</view>
			<view class="row">
				<text class="guide-title">均 &nbsp;&nbsp; 价：</text>
				<text class="guide-content">{{guideData.priceRemark}}</text>
			</view>
			<view class="row">
				<text class="guide-title">楼 &nbsp;&nbsp; 栋：</text>
				<text class="guide-content">{{guideData.building}}</text>
			</view>
			<view class="row">
				<text class="guide-title">房源面积：</text>
				<text class="guide-content">{{guideData.areaRemark}}</text>
			</view>
			<view class="row">
				<text class="guide-title">摇号门槛：</text>
				<text class="guide-content">{{guideData.limitRemark}}</text>
			</view>
			<view class="row">
				<text class="guide-title">登记时间：</text>
				<text class="guide-content">{{guideData.regStartTime}}</text>
			</view>
		</view>

		<step />
		<view class="hr30" />
		<!--房源类型-->
		<simple-table :headers="houseTypeHeaders" :datas="houseTypeData" />

		<view class="btns">
			<button class="mbtn">公示方案</button>
			<button class="mbtn" @tap="toResult">摇号结果</button>
		</view>
	</view>
</template>

<script>
import Step from "./step.vue"
import SimpleTable from "./simple-table"
import { mapGetters } from "vuex"

export default {
	data() {
		return {
			tabIndex: 0,
			houseTypeHeaders: [],
			activeIndex: 0
		}
	},
	methods: {
		_initData() {
			this.houseTypeHeaders = [
				{ label: '房源类型', key: 'type' },
				{ label: '全部', key: 'all' },
				{ label: '人才', key: 'person' },
				{ label: '无房', key: 'hasnt' },
				{ label: '有房', key: 'has' },
			]
		},
		toResult() {
			uni.navigateTo({
				url:'/pages/detail/swingResult'
			})
		}
	},
	computed: {
		...mapGetters('sDetail', ['lotteryGuides']),
		guideData() {
			return this.lotteryGuides[this.tabIndex].guide
		},
		houseTypeData() {
			return [
				{ 	type: '房源套数', 
					all: this.guideData.totalHouseNum, 
					person: this.guideData.talentHouseNum, 
					has: this.guideData.secondHouseNum, 
					hasnt: this.guideData.firstHouseNum 
				}
			]
		},
		processTimes() {
			return [
				{ process: "预售", time: "待定", status: false, },
				{ process: "登记", time: "待定", status: false, },
				{ process: "补交资料", time: "待定", status: false, },
				{ process: "意向公示", time: "待定", status: false, },
				{ process: "摇号", time: "待定", status: false, },
				{ process: "选房", time: "待定", status: false, }
			]
		}
	},
	created() {
		this._initData()
	},
	components: {
		Step, SimpleTable
	}
}
</script>

<style lang="scss">
	.tabs-top{
		height: 70rpx; line-height: 70rpx; margin:0 -30rpx;
		font-size: 32rpx;
		display: flex;  text-align:center;
		.tab{ 
			flex: 1; border-right: 2rpx solid $border; 
			border-bottom: 1px solid $border;
			&:last-child{
				border-right: 0px none;
			}
			&.active{
				border-bottom-color: $theme; font-weight: bold; color: $theme;
			}
		}
	}
	.detail-info {
		// @include graybg; 
		padding: 0 $gap 30rpx;
		.tit{
			font-size: 34rpx; margin-top: 30rpx;
		}
		

		.guide-t {
			font-size: 26rpx;
			.row {
				margin-top: 10rpx;
				.guide-title {
					color: #999; width: 130rpx; display: inline-block;
				}

				.guide-content {
					margin-left: 10rpx;
					color: #333;
				}
			}
		}

		.tab-wrap {
			height: 100rpx;
			white-space: nowrap;
		}
	}
	.btns{
		margin-top: 20rpx;
		.mbtn{
			background: $theme; color: #fff;
			height: 60rpx; line-height: 60rpx; margin-right: 10rpx; padding:0 30rpx;
		}
	}
</style>
