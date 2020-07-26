<template>
	<view class="main">
		<view class="pic-box">
			<banner :list="bannerList" />

			<view class="t-left">
				<view class="left-video">云视频</view>
				<view class="left-pic">图片</view>
			</view>

			<view class="t-right">
				<view class="right-video" @touchstart="toImgShow('video')">
					<view class="right-num">{{videoNum}}</view>
					<view class="right-num">视频</view>
				</view>
				<view class="right-pic" @touchstart="toImgShow('picture')">
					<view class="right-num">{{picNum}}</view>
					<view class="right-num">图片</view>
				</view>
			</view>
		</view>

		<wrap>
			<view class="info-box">
				<view class="tit">{{houseInfo.name}}</view>

				<view class="lable">
					<text class="txt" v-for="(item,index) in labels " :style="{color:item.color,background:item.bg}" :key="index">{{item.title}}</text>
				</view>
				<view class="location">
					<uni-icons class="address-icon" color="#1296db" size="14" type="location-filled" />
					<text @tap="toMap">{{houseInfo.address}}</text>
					<text>></text>
				</view>
			</view>

			<view class="house-block ">
				<view v-for="(item,index) in blocks " :key="index" @tap="onBlockTap(item)">
					<view class="block-icon" :style="{background:item.color}">
						<image class="abs img" :src="item.src" />
					</view>
					<view class="b-t">{{item.title}}</view>
				</view>
			</view>
		</wrap>
		
	</view>
</template>

<script>
import Banner from "@/comps/banner"
import { mapGetters } from "vuex"
import { concatLabels } from "common/js/util"
import { getHtmlTop } from "common/js/dom"
 
export default {
	data() {
		return {
			picNum:89,
			videoNum:77,
			blocks: [{
					title: "户型图",
					src: "../../../static/detail/hux.png",
					color: "#F0AD4E",
					path: '/pages/detail/buildingLayout'
				},
				{
					title: "楼盘动态",
					src: "../../../static/detail/dyment.png",
					color: "#4CD964",
					path: '/pages/detail/buildingTrends'
				},
				{
					title: "楼盘详情",
					src: "../../../static/detail/detail.png",
					color: " #007AFF",
					
				},
				{
					title: "一房一价",
					src: "../../../static/detail/calc.png",
					color: "#DD524D",
					path: '/pages/detail/buildingLayout?type=1'
				}
			],
		};
	},
	components: {
		Banner
	},
	onReady() {
		this._initData()
	},
	methods: {
		toMap() {
			uni.navigateTo({
				url: '/pages/detail/map'
			})
		},
		_initData() {
		},
		toImgShow(type) {
			uni.navigateTo({
				url: '/pages/detail/imgShow?id=1'
			})
		},
		onBlockTap(item) {
			if(item.path) {
				uni.navigateTo({
					url: item.path
				})
			}else{
				getHtmlTop('#house-detail-info').then(top => {
					uni.pageScrollTo({
						scrollTop: top
					})
				})
			}
		},
	},
	computed: {
		...mapGetters('sDetail',['bannerList','houseInfo']),
		labels() {
			let { saleStatus, tag } = this.houseInfo
			console.log( concatLabels(saleStatus, tag), saleStatus, this.houseInfo)
			return concatLabels(saleStatus, tag)
		}
	}

}
</script>

<style lang="scss">
	.pic-box {
		position: relative;
		.t-left {
			position: absolute;
			left: 30rpx;
			bottom: 30rpx;
			display: flex;
			flex-direction: row;
			background: rgba($color: #000, $alpha: 0.5);
			height: 40rpx;
			width: 160rpx;
			margin-top: 20rpx;
			border-radius: 20rpx;
			justify-content: space-between;

			.left-video {
				width: 100rpx;
				height: 40rpx;
				border-radius: 20rpx;
				font-size: 20rpx;
				background-color: #007AFF;
				text-align: center;
				color: #FFFFFF;
				line-height: 40rpx;
			}

			.left-pic {
				width: 100rpx;
				height: 40rpx;
				border-radius: 20rpx;
				font-size: 20rpx;
				color: #FFFFFF;
				text-align: center;
				line-height: 40rpx;
			}
		}

		.t-right {
			position: absolute;
			right: 40rpx;
			bottom: 30rpx;
			width: 200rpx;
			height: 80rpx;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			height: 80rpx;

			.right-video {
				width: 95rpx;
				border-radius: 10rpx;
				height: 80rpx;
				background-color: rgba($color: #fff, $alpha: 0.5);
			}

			.right-pic {
				width: 95rpx;
				border-radius: 10rpx;
				height: 80rpx;
				background-color: rgba($color: #fff, $alpha: 0.5);
			}
			.right-num{
				font-size: 28rpx;
				color: #333333;
				text-align: center;
				height: 40rpx;
				line-height: 40rpx;
			}

		}
	}

	.info-box {
		padding: 20rpx 0 30rpx; 
		.tit {
			font-size: 36rpx;
			color: #000;
			font-weight: bold;
		}
		.lable {
			.txt {
				margin-right: 10rpx;
				font-size: 24rpx;
				padding: 5rpx;
			}
		}
		.location {
			margin-top: 20rpx; font-size: 30rpx; color: #999; 
			.search-icon {
				position: absolute;
			}
		}
	}

	.house-block {
			margin-bottom: 30rpx;
			display: flex;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			text-align: center;

			.block-icon {
				width: 80rpx; display:inline-block;
				position: relative;
				height: 80rpx;
				border-radius: 30rpx;
				.img {
					width: 40rpx;
					height: 40rpx;
				}
			}

			.b-t {
				font-size: 24rpx;
				color: #333;
			}


		}
</style>
