<template>
	<view class="img-show-wrap fz">
		<scroll-view class="step-con fz" scroll-x="true" scroll-with-animation :show-scrollbar=false>
			<view class="tabs-con">
				<view class="tab-item" v-for="(item,i) in tabs" :key="i" @tap="onTabClick(i)" :class="{active:i==activeIndex}" :id="item.sid">
					<text>{{item.label}}</text>
				</view>
			</view>
		</scroll-view>
		<scroll-view class="main-con" @touchstart="mainTouch" id="main-con" scroll-y="true" scroll-with-animation :show-scrollbar=false @scroll="mainScroll" :scroll-into-view="scrollingId">
			<view class="img-item" v-for="(item,i) in tabs" :key="i" :class="{active:i==activeIndex}" :id="item.id">
				<text>{{item.label}}</text>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabs: [
					{ label: '云视频(2)', id: 'tab_0', sid: 'tab_11' },
					{ label: '楼盘概况(5)', id: 'tab_1', sid: 'tab_12' },
					{ label: '跑盘实拍(10)', id: 'tab_2' , sid: 'tab_13'},
					{ label: '地理交通(10)', id: 'tab_3' , sid: 'tab_14'},
				],
				activeIndex: 0,
				scrollingId: 'tab_11',
				isMainScroll: true
			};
		},
		methods: {
			mainTouch(){
				this.mainTouch = true
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
				this.mainTouch = false
			},
			//获取元素距离顶部的高度
			getScrollTop(selector) {
				return new Promise((resolve, reject) => {
					let query = uni.createSelectorQuery().in(this);
					query.select(selector + '').boundingClientRect(data => {
						resolve(data.top)
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
		onLoad(e) {
			uni.setNavigationBarTitle({
			　　title:'乐米选房-悦府'
			})
		},
		mounted() {
			this.getElementTop()
		}
	}
</script>

<style lang="scss">
.tabs-con{
	display: flex; text-align: center; height:70rpx; line-height: 70rpx; position:fixed; top:0; width: 100%;
	.tab-item{
		flex: 1; 
		text{
			padding: 0 10rpx; display: inline-block;  position:relative;
			&:after{
				position: absolute; height: 1px; background: $theme; content: ""; transition: all .5s ease;
				bottom:0; left:0; width: 0; left: 50%; transform: translateX(-50%);
			}
		}
		&.active text:after{
			width: 100%; 
		}
	}
}

.img-item{
	height: 700rpx;
}
.main-con{
	height: calc(100vh - 70rpx);margin-top: 70rpx;
}

</style>
