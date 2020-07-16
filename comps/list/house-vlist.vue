<template>
	<view @click="toDetail" class="p-list">

		<ImgMask :house="house"></ImgMask>
		<view class="text-w">
			<view class="tit">{{house.name}}</view>
			
			<view class="local">
				<text class="txt">{{house.district}}</text>
				<text class="block">{{house.block}}</text>
			</view>
			<view class="lable">
				<text class="txt" v-for="(item,index) in labels " :style="{color:item.color,background:item.bg}" :key="index">{{item.title}}</text>
			</view>
		</view>
	</view>
</template>

<script>
import { houseMixin } from "./js/list-mixin"
import ImgMask from "./img-mask.vue"

export default {		
	mixins: [ houseMixin ],
	components: {
		ImgMask
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

				.txt {
					font-size: 23rpx;
					color: #555555;
				}

				.block {
					margin-left: 10rpx;
				}
			}

			.lable {
				.txt {
					margin-right: 10rpx;
					font-size: 20rpx;
					padding-left: 5rpx;
					padding-right: 5rpx;
				}
			}
		}
	}
</style>
