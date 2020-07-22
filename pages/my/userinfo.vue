<template>
	<view>
		<view class="border gap"  @tap="selectImg">
			<text class="txt">头像</text>
			<image class="my-img" :src="headSrc"  ></image>
			<uni-icons class="arrowright" type="arrowright" size="50rpx" color="#000"></uni-icons>
		</view>
		
		<view class="border2 gap" @tap="modifyNikeName">
			<text class="txt">昵称</text>
			<text class="textRight">{{nikeName}}</text>
			<uni-icons class="arrowright" type="arrowright" size="50rpx" color="#000"></uni-icons>
		</view>
		
		<view class="border2 gap" @tap="modifyNote">
			<text class="txt">个性签名</text>
			<text class="textRight">{{presonNote}}</text>
			<uni-icons class="arrowright" type="arrowright" size="50rpx" color="#000"></uni-icons>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				headSrc:"../../static/list/product2.png",
				nikeName:"小钟同学",
				presonNote:"乐米选房，选房更轻松。。。",
			}
		},
		methods: {
			selectImg(){
				
			},
			modifyNikeName(){
				uni.navigateTo({
					url:"/pages/my/modifyNikeName",
					animationDuration:300,
					animationType:'pop-in'
				})
			},
			modifyNote(){
				uni.navigateTo({
					url:"/pages/my/modifyNote",
					animationDuration:300,
					animationType:'pop-in'
				})
			}
			
		}
	}
</script>

<style lang="scss">
	
	
	
	.border{
		margin-top: 20rpx;
		display: flex;
		flex-direction: row;
		align-items: center;	
		.txt{
			flex: 1;
			font-size: 30rpx;
		}
		.my-img {
			margin: 0 auto;
			width: 80rpx;
			height: 80rpx;
			border-radius: 40rpx;
			box-shadow:7rpx 5rpx 5rpx rgba($color: #000000, $alpha: 0.6) ;
		}
		.arrowright{
			margin-left: 10rpx;
		}
	}
	
	.border2{
		margin-top: 50rpx;
		display: flex;
		flex-direction: row;
		align-items: center;	
		.txt{
			flex: 1;
			font-size: 30rpx;
		}
		.textRight{
			color: #818181;
		}
		.arrowright{
			margin-left: 10rpx;
		}
	}

</style>
