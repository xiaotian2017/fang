<template>
	<view class="gap">
		<input class="inp" maxlength="12" placeholder="输入用户昵称(12个字)" value="小钟同学" />
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
		height: 100rpx;
		padding-left: 15rpx;
		padding-right: 15rpx;
		margin-top: 10rpx;
		background-color: #EEEEEE;
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
