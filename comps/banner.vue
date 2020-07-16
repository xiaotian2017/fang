<template>
	<view class="banner-box">
		<swiper class="swiper" :style="{height: imgHei}" :circular=true :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
			<swiper-item v-for="(item, i) in listes" :key="i">
				<image class="img" :src="item.imgUrl" :style="{height: imgHei}"  @tap="toPage"></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		props: {
			list: {
				default: () => []
			},
			height: {},
			type: {}
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
			toPage() {
				uni.navigateTo({url: '/pages/article/article'})
			}
		},
		computed: {
			imgHei() {
				if(this.height) {
					return this.height+'rpx' 
				}
				return this.type == "adv" ? '130rpx' : '350rpx'
			},
			listes() {
				if(this.list.length > 0) {
					return this.list
				}
				if(this.type == "adv") {
					return [
						{ src: '../static/list/adv.png' },
						{ src: '../static/list/adv.png' }
					]
				}else{
					return [
						{ src: '../static/list/product1.jpg' },
						{ src: '../static/list/product2.png' },
						{ src: '../static/list/product1.jpg' },
					]
				}
			}
		}
	}
</script>

<style lang="scss">
.banner-box{
	.img{
		height: 300rpx; width: 100%;
	}
}
</style>
