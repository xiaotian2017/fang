<template>
	<view class="img-w">
		<image src="../../static/list/product2.png"></image>
		<view class="mask"></view>
		<view class="eye-num">
			<uni-icons class="icon" color="#cccccc" size="15" type="eye" />
			<text>191.7w</text>
		</view>
	</view>
</template>


<style lang="scss">
	.img-w {
		width: 217rpx;
		height: 170rpx;
		position: relative;

		image {
			border-radius: 10rpx;
			width: 100%;
			height: 100%;
		}

		.mask {
			border-radius: 10rpx;
			position: absolute;
			box-shadow: 0rpx 0rpx 30rpx rgba($color: #000000, $alpha: 0.5) inset;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
		}

		.eye-num {
			position: absolute;
			bottom: 10rpx;
			left: 10rpx;

			text {
				font-size: 15rpx;
				color: #cccccc;
				margin-left: 5rpx;
			}
		}
	}
</style>
