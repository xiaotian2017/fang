<template>
	<view @click="toDetail" class="p-list">

		<ImgMask></ImgMask>
		<view class="text-w">
			<view class="tit">{{houseName}}</view>
			
			<view class="local">
				<text>{{location}}</text>
				<text class="block">{{block}}</text>
			</view>
			<view class="lable">
				<text v-for="(item,index) in labels " :style="{color:item.color,background:item.bg}" :key="index">{{item.title}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	import ImgMask from "./img-mask.vue"
	export default {
		data() {
			return {
				id:"",
				houseName: "时代滨江悦府",
				location: "滨江区",
				block: "高薪开发区",
				labels: [{
						title: "即将开盘",
						color: "#4cd961",
						bg: "rgba(76, 217, 97,0.2)"
					},
					{
						title: "地铁口",
						color: "#999999",
						bg: "rgba(153, 153, 153,0.2)"
					},
				],
				desc: "好山好水好分光，這又是一處美麗的樓盤，臨近地鐵口，熱門商圈，不可錯過的好家圓。",
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
		}
	}
</script>

<style lang="scss">
	.p-list {
		// width: 210rpx;

		.text-w {
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

			.lable {
				text {
					margin-right: 10rpx;
					font-size: 20rpx;
					padding-left: 5rpx;
					padding-right: 5rpx;
				}
			}
		}
	}
</style>
