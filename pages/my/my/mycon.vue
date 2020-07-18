<template>
	<view>
		<view class="house-block ">
			<view v-for="(item,index) in blocks " :key="index">
				<view class="block-icon" :style="{background:item.color}">
					<uni-icons class="abs img" :type="item.type" size="50rpx" color="#ffffff"></uni-icons>
				</view>
				<view class="b-t">{{item.title}}</view>
			</view>
		</view>

		<view class="hl10 line" />


		<view class="house-block ">
			<view v-for="(item,index) in infoList " :key="index">
				<view class="block-icon2" :style="{background:item.color}">
					<view class="abs c-t">{{item.title}}</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				blocks: [{
						title: "我的关注",
						type: "heart-filled",
						color: "#F34949",
						path: '/pages/detail/buildingLayout'
					},
					{
						title: "我的问答",
						type: "chatboxes-filled",
						color: "#4CD964",
						path: '/pages/detail/buildingTrends'
					},
					{
						title: "我要续费",
						type: "shop",
						color: " #007AFF",

					}
				],
				infoList: [{
						title: "我要入驻",
						type: "heart-filled",
						color: "#36A9CE",
						path: '/pages/detail/buildingLayout'
					},
					{
						title: "我要反馈",
						type: "chatboxes-filled",
						color: "#36A9CE",
						path: '/pages/detail/buildingTrends'
					},
					{
						title: "官方公众号",
						type: "shop",
						color: " #36A9CE",

					}
				],
			}
		},
		methods: {},
		computed: {}
	}
</script>

<style lang="scss">
	.house-block {
		margin-top: 40rpx;
		display: flex;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		text-align: center;

		.block-icon {
			width: 80rpx;
			display: inline-block;
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

	.line {
		margin-top: 30rpx;
		margin-left: 10rpx;
		margin-right: 10rpx;
	}

	.block-icon2 {
		width: 80rpx;
		display: inline-block;
		position: relative;
		height: 80rpx;
		padding: 10rpx;
		border-radius: 5rpx;
		text-align: center;
		box-shadow: 8rpx 8rpx 5rpx rgba($color: #4DB0E4, $alpha: 0.6);

		.c-t {
			margin: auto auto;
			display: block;
			margin-top: 10rpx;
			color: #ffffff;
			font-size: 28rpx;
		}
	}
</style>
