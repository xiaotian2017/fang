<template>
	<view>
		<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
			<swiper-item>
				<image src="../static/list/product1.jpg"></image>
			</swiper-item>
			<swiper-item>
				<image src="../static/list/product2.png"></image>
			</swiper-item>
			<swiper-item>
				<image src="../static/list/product1.jpg"></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500
			}
		},
		methods: {

		}
	}
</script>

<style>

</style>
