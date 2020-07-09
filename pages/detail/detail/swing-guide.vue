<template>
	<view class="detail-info">
		<view class="tabs-top">
			<view class="active">1#</view>
			<view>2#</view>
		</view>
		<view class="tit ">摇号指南</view>
		<view class="guide-t">
			<view>
				<text class="guide-title">所在模块：</text>
				<text class="guide-content">{{guideData.block}}</text>
			</view>
			<view>
				<text class="guide-title">均 &nbsp;&nbsp; 价：</text>
				<text class="guide-content">{{guideData.price}}</text>
			</view>
			<view>
				<text class="guide-title">楼 &nbsp;&nbsp; 栋：</text>
				<text class="guide-content">{{guideData.buildNum}}</text>
			</view>
			<view>
				<text class="guide-title">房源面积：</text>
				<text class="guide-content">{{guideData.area}}</text>
			</view>
			<view>
				<text class="guide-title">摇号门槛：</text>
				<text class="guide-content">{{guideData.allowIn}}</text>
			</view>
			<view>
				<text class="guide-title">登记时间：</text>
				<text class="guide-content">{{guideData.registerTime}}</text>
			</view>
		</view>

		<step />
		<view class="hr30" />
		<!--房源类型-->
		<simple-table :headers="houseTypeHeaders" :datas="houseTypeData" />

		<view class="btns">
			<button>公示方案</button>
			<button @tap="toResult">摇号结果</button>
		</view>
	</view>
</template>

<script>
import Step from "./step.vue"
import SimpleTable from "./simple-table"

export default {
	data() {
		return {
			houseTypeHeaders: [],
			houseTypeData: [],
			guideData: {
				block: "之江",
				price: "53619元/m² (含5500元/m²装修标准)",
				buildNum: "14#",
				area: "166-186m²",
				allowIn: "首套300万 ,二套500万",
				registerTime: "2020年05月16-18日"
			},
			processTimes: [
				{
					process: "预售",
					time: "2020.06.10",
					status: true,
				},
				{
					process: "登记",
					time: "2020.06.10",
					status: true,
				},
				{
					process: "补交资料",
					time: "2020.06.10",
					status: false,
				},
				{
					process: "意向公示",
					time: "2020.06.10-06.25",
					status: false,
				},
				{
					process: "摇号",
					time: "2020.06.10",
					status: false,
				},
				{
					process: "选房",
					time: "待定",
					status: false,
				}
			],
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
			this.houseTypeData = [
				{ type: '房源套数', all: '40', person: '8', hasnt: '8', has: '24' }
			]
		},
		toResult() {
			uni.navigateTo({
				url:'/pages/detail/swingResult'
			})
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
		view{ 
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
			view {
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

		.proce-w {
			display: flex;
			flex-direction: row;
			flex-wrap: nowrap;

			.proce {
				padding-left: 15rpx;
				padding-right: 15rpx;
				padding-top: 10rpx;
				padding-bottom: 10rpx;
				margin-right: 20rpx;
				background-color: #FCFCFC;
				height: 100rpx;
				view {
					color: #000;
					height: 40rpx;
					line-height: 40rpx;
				}
			}
			.proce-sel {
				background-color: #FFDF25;
			}
		}

	}
	.btns{
		margin-top: 20rpx;
		button{
			background: $theme; color: #fff;
			height: 60rpx; line-height: 60rpx; margin-right: 10rpx; padding:0 30rpx;
		}
	}
</style>
