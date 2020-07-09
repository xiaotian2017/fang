<template>
	<view @click="toDetail" class="p-list">

		<ImgMask></ImgMask>
		<view class="text-w">
			<view class="tit">{{houseName}}</view>
			<view class="pricearea">
				<text class="price">{{price}}</text>
				<text class="area">{{area}}</text>
			</view>
			<view class="local">
				<text>{{location}}</text>
				<text class="block">{{block}}</text>
			</view>
			<view class="label">
				<text v-for="(item,index) in labels " :style="{color:item.color,background:item.bg}" :key="index">{{item.title}}</text>
			</view>
			<!-- <view class="desc">{{desc}}</view> -->
		</view>
	</view>
</template>

<script>
	import ImgMask from "./img-mask.vue"
	export default {
		data() {
			return {
				id:"999",
				houseName: "时代滨江悦府1",
				price: "30089-46788元/m²",
				area: "88-99m²",
				location: "滨江区",
				block: "高薪开发区",
				labels: [{
						title: "即将开盘",
						color: "#4cd961",
						bg: "rgba(76, 217, 97,0.2)"
					},
					{
						title: "意向登记表",
						color: "#4985c9",
						bg: "rgba(73, 133, 201,0.2)"
					},
					{
						title: "地铁口",
						color: "#999999",
						bg: "rgba(153, 153, 153,0.2)"
					},
					{
						title: "热门商圈",
						color: "#e64340",
						bg: "rgba(230, 67, 64,0.2)"
					}
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
