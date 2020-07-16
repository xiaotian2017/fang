<template>
	<view class="img-w">
		<image class="img" :src="house.iconImgUrl" />
		<view class="mask"></view>
		<view class="eye-num">
			<uni-icons class="icon" color="#cccccc" size="15" type="eye" />
			<text class="txt">{{house.browseNum}}</text>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		house: {
			default: () => {
				return {
					iconImgUrl: '../../static/list/product2.png',
					browseNum: '192.2w'
				}
			}
		}
	}
}
</script>


<style lang="scss">
	.img-w {
		width: 217rpx;
		height: 170rpx;
		position: relative;

		.img {
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

			.txt {
				font-size: 15rpx;
				color: #cccccc;
				margin-left: 5rpx;
			}
		}
	}
</style>
