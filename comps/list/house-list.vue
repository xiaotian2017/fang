<template>
	<view @click="toDetail" class="p-list">

		<ImgMask :house="house"></ImgMask>
		<view class="text-w">
			<view class="tit">{{house.name}}</view>
			<view class="pricearea">
				<text class="price">{{priceTxt}}</text>
				<text class="area">{{house.minArea}}-{{house.maxArea}}m²</text>
			</view>
			<view class="local">
				<text class="txt">{{house.district}}</text>
				<text class="block txt">{{house.block}}</text>
			</view>
			<view class="label">
				<text class="txt" v-for="(item,index) in labels " :style="{color:item.color,background:item.bg}" :key="index">{{item.title}}</text>
			</view>
			 <view class="desc">{{house.remark}}</view> 
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
				.txt {
					font-size: 23rpx;
					color: #555555;
				}
				.block {
					margin-left: 10rpx;
				}
			}

			.label {
				margin-top: 6rpx;
				.txt {
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
