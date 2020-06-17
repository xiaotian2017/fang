<template>
	<view class="banner-box">
		<swiper class="swiper" :style="{height: imgHei}" :circular=true :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
			<swiper-item v-for="(item, i) in list" :key="i">
				<image :src="item.src" :style="{height: imgHei}"></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		props: {
			list: {},
			height: {
				default: 350
			}
		},
		data() {
			return {
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500
			}
		},
		methods: {

		},
		computed: {
			imgHei() {
				return this.height+'rpx'
			}
		}
	}
</script>

<style lang="scss">
.banner-box{
	margin-top: 20rpx;
	image{
		height: 300rpx; width: 100%;
	}
}
</style>
