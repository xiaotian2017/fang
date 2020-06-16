<template>
	<view class="lead-news"  >
		<uni-icons  type="sound" color="#666" size="12" @click="close" />
		<views class="news-list" :style="{top: top+'rpx'}">
			<view class="new" v-for="(item, index) in news" :key=index >
				{{item.txt}}
			</view>	
		</views>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				news: [
					{ txt: '新城区低门槛上新，总价300万，基础产业' },
					{ txt: '主城区低门槛上新，总价300万，基础产业' },
					{ txt: '老城区低门槛上新，总价300万，基础产业' },
					{ txt: '新城区低门槛上新，总价300万，基础产业' },
					{ txt: '主城区低门槛上新，总价300万，基础产业' }
				],
				top: -80
			};
		},
		methods: {
			scroll() {
				let len = this.news.length - 1

				this.timer = setInterval(() => {
					if(this.top <= - 80*len) {
						this.top = 0
					}else{
						let val = this.top - 80
						
						this.animate(val)
					}
				}, 3000);
			},
			animate(val) {
				this.t = setInterval(() => {
					this.top--
					if(this.top < val) {
						clearInterval(this.t)
					}
				}, 10)
			}
		},
		mounted() {
			
			this.scroll()
		}
		
	}
</script>

<style lang="scss">
.lead-news{
	height: 80rpx; overflow: hidden; line-height: 80rpx; background: #fff;
	border-radius: 4rpx; position: relative;
	.news-list{
		position: absolute; 
		.new{
			padding-left:40rpx;
		}
	}
}
</style>
