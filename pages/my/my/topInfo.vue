<template>
	<view>
		<view class="top">
			<view class="headimg" @tap="goInfo">
				<image class="my-img" :src="imgSrc"  ></image>
			</view>
			<view class="userinfo"  @tap="goInfo">
				<view>
					<text class="nikeName">{{nikeName}}</text>
					<text v-if="vipstatus" class="vip">ViP会员</text>
					<text v-if="vipstatus" class="vip-time">截止：</text>
					<text v-if="vipstatus" class="vip-time">{{viptime}}</text>
				</view>
				<view class="edit-info">
					<text class="desc">{{desc}}</text>
				</view>
			</view>
		</view>
		<view class="bottom"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgSrc: "../../../static/list/product2.png",
				nikeName: "小钟同学",
				vipstatus: true,
				viptime: "2020.09.09",
				desc:"乐米选房，选房更轻松。。。",
				
			}
		},
		methods: {
			goInfo(){
				console.log("goInfo。。。。。。。。。。。。。。。。。。。。。。。。。。。")
				uni.navigateTo({
					url:"/pages/my/userinfo",
					animationDuration:300,
					animationType:'pop-in'
				})
			},
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
				box-shadow:7rpx 5rpx 5rpx rgba($color: #000000, $alpha: 0.6) ;
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
	.bottom{
		height: 30rpx;
		width: 100%;
		background-color:#4DB0E4;
		border-radius: 0 0 20rpx 20rpx;
		box-shadow:0 8rpx 8rpx rgba($color: #000000, $alpha: 0.6) ;
	}
</style>
