<template>
	<view class="gap">
		<textarea class="inp" maxlength="50" placeholder="输入个性签名(50个字)" value="小钟同学" />
		<button class="bt" type="primary">保存</button>
		
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

<style>
	.inp{
		display: block;		
		height: 300rpx;
		padding: 15rpx;	
		margin-top: 10rpx;
		background-color: #EEEEEE;
		box-sizing: border-box;
		line-height: 70rpx;
		border-radius: 5rpx;
		font-size: 30rpx;
	}
	.bt{
		margin-top: 20rpx;
		display: block;
		width: 100%;
		height: 70rpx;
	}

</style>
