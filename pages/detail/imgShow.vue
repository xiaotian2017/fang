<template>
	<view class="img-show-wrap fz">
		<scroll-view class="tabs-con" scroll-x="true" scroll-with-animation :show-scrollbar=false>
			<view class="tabs-con">
				<view class="tab-item" v-for="(item,i) in tabs" :key="i" @tap="onTabClick(i)" :class="{active:i==activeIndex}" :id="item.sid">
					<text>{{item.label}}</text>
				</view>
			</view>
		</scroll-view>
		<scroll-view class="main-con" 
					@touchstart="mainTouch" 
					id="main-con" 
					scroll-y="true" 
					scroll-with-animation 
					:show-scrollbar=false
					@scroll="mainScroll" 
					scroll-into-view="scrollingId">
			<wrap>
				<view class="img-item" v-for="(item,i) in tabs" :key="i" :class="{active:i==activeIndex}" :id="item.id">
					<text class="tit">{{item.label}}</text>
					<view class="item-box">
						<image v-for="(img, ii) in item.list" :key="ii" @tap="onImgTap(ii)" :src="img.mediaUrl" />
						<view class="clear" />
					</view>
				</view>
			</wrap>
		</scroll-view>

		<!--图片放大-->
		<img-swiper ref="imgs" current=1 />
		
		<bot-btns />
	</view>
</template>

<script>
import ImgSwiper from "./imgShow/img-swiper"
import BotBtns from "./detail/bot-btns"
import { mapGetters } from "vuex"

export default {
	data() {
		return {
			// tabs: [
			// 	{ label: '云视频(2)', id: 'tab_0', sid: 'tab_11' },
			// 	{ label: '楼盘概况(5)', id: 'tab_1', sid: 'tab_12' },
			// 	{ label: '跑盘实拍(10)', id: 'tab_2' , sid: 'tab_13'},
			// 	{ label: '地理交通(10)', id: 'tab_3' , sid: 'tab_14'},
			// ],
			// imgList: [
			// 	{ src: '../../static/list/product1.jpg' },
            //     { src: '../../static/list/adv.png' },
            //     { src: '../../static/list/product2.png' },
			// 	{ src: '../../static/list/adv.png' },
			// 	{ src: '../../static/list/product2.png' },
			// 	{ src: '../../static/list/product1.jpg' },
			// ],
			activeIndex: 0,
			scrollingId: 'tab_0',
			isMainScroll: true
		};
	},
	methods: {
		onImgTap(index) {
			this.$refs.imgs.init({
				current: index,
				listes: this.imgList
			})
		},
		mainTouch(){
			this.isMainScroll = true
		},
		mainScroll(e) {
			if (!this.isMainScroll) {
				return;
			}
			let top = e.detail.scrollTop;
			let index = -1;

			if (top >= this.topArr[this.topArr.length - 1]) {
				index = this.topArr.length - 1;
			} else {
				index = this.topArr.findIndex((item, index) => {
					return this.topArr[index + 1] >= top;
				});
			}
			this.activeIndex = (index < 0 ? 0 : index);
		},
		onTabClick(i) {
			this.activeIndex = i
			this.scrollingId = `tab_${i}`
			this.isMainScroll = false
		},
		//获取元素距离顶部的高度
		getScrollTop(selector) {
			return new Promise((resolve, reject) => {
				let query = uni.createSelectorQuery().in(this);
				query.select(selector + '').boundingClientRect(data => {
					resolve(data && data.top)
				}).exec();
			})
		},
		/* 获取元素顶部信息 */
		async getElementTop() {
			let p_arr = [];
		
			for (let i = 0; i < this.tabs.length; i++) {
				const resu = await this.getScrollTop(`#tab_${i}`)
				p_arr.push(resu)
			}

			/* 减掉主区域滚动容器的顶部距离 */
			this.getScrollTop("#main-con").then(res => {
				/* 所有节点信息返回后调用该方法 */
				this.topArr = p_arr.map(item => item-=res);
			})
		},
	},
	computed: {
		...mapGetters('sDetail',['medias']),
		tabs() {
			let ret = []
			if(this.medias) {
				this.medias.forEach((item,i) =>{ 
					ret.push({
						label: `${item.categoryName}(${item.list.length})`,
						id: `tab_${i}`,
						sid: `tan_1${i+1}`,
						list: item.list
					})
				})
			}

			this.$nextTick(() => {
				this.getElementTop()
			})

			console.log(ret)

			return ret
		}
	},
	onLoad(e) {
		uni.setNavigationBarTitle({
		　　title:'乐米选房-悦府'
		})
	},
	mounted() {
		
	},
	components: {
		ImgSwiper, BotBtns
	}
}
</script>

<style lang="scss">
.tabs-con{
	text-align: center;  line-height: 70rpx; position:fixed; top:0; width: 100%; font-size: 30rpx; white-space: nowrap; height:70rpx; 
	.tab-item{
		display:inline-block; margin: 0 10rpx;
		text{
			padding: 0 10rpx; display: inline-block;  position:relative;
			&:after{
				position: absolute; height: 1px; background: $theme; content: ""; transition: all .5s ease;
				bottom:0; left:0; width: 0; left: 50%; transform: translateX(-50%);
			}
		}
		&.active {
			font-weight: bold; color: $theme;
			text:after{
				width: 100%; 
			}
		}
	}
}

.img-item{
	line-height: 80rpx;
	.item-box{
		margin: 10rpx -5rpx 0; 
	}
	image{
		width:25%; padding: 0 5rpx; float:left; height: 150rpx; box-sizing: border-box; margin-bottom: 10rpx;
	}
}
.main-con{
	height: calc(100vh - 70rpx);margin-top: 70rpx;
}

</style>
