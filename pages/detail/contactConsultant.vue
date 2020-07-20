<template>
	<view class="contact-consultant layer">
		<view class="main-box">
			<view class="name">{{adviserInfo.name}}</view>
			<view class="item"><text>电话：</text>{{adviserInfo.phone}}</view>
			<view class="item"><text>主营楼盘：</text>{{adviserInfo.projectName}}</view>
			<view class="qr">加他微信：</view>
	
			<img-box type="qrcode.jpg" class="qrcode" />
		</view>
	
		<bot-btns :list="botbtns" />

	</view>
</template>

<script>
import BotBtns from "./detail/bot-btns"

export default {
	data() {
		return {
			botbtns: [
                { type: 'focus' },
                { type: 'share' }
			],
			adviserInfo: {},
			listApi: getAdviseres
		};
	},
	onLoad(e) {
		let { item } = e

		this.adviserInfo = JSON.parse(item)
	},
	components: {
		BotBtns
	}
}
</script>

<style lang="scss">
.contact-consultant{
	.main-box{
		line-height: 60rpx; font-size: 30rpx; padding-top: 50rpx;
		.name{
			font-size: 34rpx; font-weight: bold; color: #333;
		}
		.qrcode{
			width: 500rpx; margin: 30rpx auto; height: 500rpx; display: block;
		}
	}
	
}
</style>
