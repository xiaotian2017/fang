<template>
	<view>


		<view>
			<view class="top">
				<view class="headimg" >
					<image class="my-img" :src="imgSrc"></image>
				</view>
				<view class="userinfo">
					<view>
						<text class="nikeName">{{nikeName}}</text>
					</view>
					<view class="edit-info">
						<text v-if="vipstatus" class="vip">ViP会员</text>
						<text v-if="vipstatus" class="vip-time">截止：</text>
						<text v-if="vipstatus" class="vip-time">{{viptime}}</text>
					</view>
				</view>
			</view>
			<view class="bottom">
			</view>
		</view>
		
		<view class="bot">
			<view class="pay">
				<text class="pay_tit">一个月咨询服务</text>
			</view>
		</view>
		
		

	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgSrc: "../../static/list/product2.png",
				nikeName: "小钟同学",
				vipstatus: true,
				viptime: "2020.09.09",
				desc: "乐米选房，选房更轻松。。。",

			}
		},
		methods: {
		
		},
		computed: {}
	}
</script>

<style lang="scss">
	.top {
		width: 100%;
		height: 250rpx;
		display: flex;
		align-items: center;
		flex-direction: row;
		background-color: #4DB0E4;

		.headimg {
			width: 200rpx;

			.my-img {
				display: block;
				margin: 0 auto;
				width: 150rpx;
				height: 150rpx;
				border-radius: 75rpx;
				box-shadow: 7rpx 5rpx 5rpx rgba($color: #000000, $alpha: 0.6);
			}
		}


		.userinfo {
			height: 120rpx;
			flex: 1;

			.nikeName {
				color: #FEFEFE;
				font-size: 32rpx;
			}

			.vip {
				color: #FFFF00;
				font-size: 32rpx;
				margin-left: 20rpx;
				margin: 10rpx;
			}

			.vip-time {
				color: #cccccc;
				font-size: 25rpx;
			}

			.edit-info {
				margin-top: 20rpx;

				.desc {
					display: inline-block;
					@include line(1);
					width: 430rpx;
					color: #AACCFA;
					font-size: 28rpx;
				}
			}
		}
	}

	.bottom {
		height: 30rpx;
		width: 100%;
		background-color: #4DB0E4;
		border-radius: 0 0 20rpx 20rpx;
		box-shadow: 0 8rpx 8rpx rgba($color: #000000, $alpha: 0.6);
	}
	.bot{
		display: flex;
		width: 100%;
		flex-direction: column;
		align-items: center;
		
		.pay{
			margin-top: 60rpx;
			padding: 15rpx;
			width: 300rpx;
			height: 200rpx;
			background-color:  #4DB0E4;
			box-shadow: 10rpx 10rpx 8rpx rgba($color: #000000, $alpha: 0.6);
			.pay_tit{
				color: #FEFEFE;
				font-size: 30rpx;
			}
		}
	}
	
	
</style>
