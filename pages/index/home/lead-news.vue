<template>
	<view class="lead-news" v-if="newsList.length>0">
		<uni-icons  type="sound" color="#666" size="12" @click="close" />
		<views class="news-list" :style="{top: top+'rpx'}">
			<view class="new" v-for="(item, index) in newsList" :key="index" @tap="toArticle(item)">
				{{item.title}}
			</view>	
		</views>
	</view>
</template>

<script>
import { mapState } from 'vuex'
import { homeTopNews } from "@/api"

export default {
	data() {
		return {
			newsList: [],
			top: -80
		};
	},
	methods: {
		toArticle(item) {
			uni.navigateTo({
				url : `/pages/article/article?url=${item.redirectUrl}&title=${item.title}`
			}) 
		},
		scroll() {
			let len = this.newsList.length - 1

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
	computed: {
		...mapState([
			'shome'
		])
	},
	mounted() {
		
	},
	created() {
		homeTopNews().then(data => {
			this.newsList = data 
			this.$nextTick(() => {
				this.scroll()
			})
		})
	}
	
}
</script>

<style lang="scss">
.lead-news{
	height: 80rpx; overflow: hidden; line-height: 80rpx; background: #fff; padding-left:20rpx;
	border-radius: 4rpx; position: relative; margin-top: 30rpx; border-radius: 4px;
	.news-list{
		position: absolute; 
		.new{
			padding-left:20rpx; @include line(1);
		}
	}
}
</style>
