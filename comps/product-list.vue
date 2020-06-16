<template>
	<view class="layer">
		<view class="p-list">
			<view class="img-w">
				<image src="../static/list/product2.png"></image>
				<view class="eye-num" >
					<uni-icons  class="icon" color="#cccccc" size="15" type="eye" />
					<text>191.7w</text>
				</view>
			</view>
			<view class="text-w">
							
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.p-list {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		height: 200rpx;
		.img-w{
			flex: 1;
			height: 200rpx;
			position: relative;
			image{
				border-radius: 10rpx;
				width: 100%;
				height: 200rpx;
			}
			.eye-num{
				position:absolute;
				bottom: 10rpx;
				left: 10rpx;
				text{
					font-size: 15rpx;
					color: #cccccc;
					margin-left: 5rpx;
				}
			}
		}
		.text-w {
			flex: 2;
			height: 200rpx;
		}
	}

	
</style>
