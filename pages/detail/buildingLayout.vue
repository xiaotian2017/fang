<template>
	<view class="house-layout fz">
		<view class="top-tabs">
			<view v-for="(tab, i) in tabList" :key="i" @tap="onTabChange(i)" :class="{active: i==tabIndex}">
				{{tab}}
			</view>
		</view>
		<wrap>
			<view class="label-tabs"  v-if="tabIndex==0">
				<view v-for="(label, i) in labelList" :key="i" @tap="onLabelChange(i)" :class="{active: i==labelIndex}">
					{{label.txt}}({{label.num}})
				</view>
			</view>

			<view class="layout-con">
				<view class="layout-list" v-for="(item, i) in tabList" :key="i">
					<view class="img-w">
						<img-box />
					</view>
					<ul class="txt-w" v-if="tabIndex==0">
						<li><text>户型名称：</text> 一室一厅一卫</li>
						<li><text>户型编号：</text>：A1</li>
						<li><text>房型：</text>高层</li>
						<li><text>建筑面积：</text>60㎡</li>
					</ul>

					<ul class="txt-w" v-else>
						<li><text>登记时间：</text> 2020：05：16</li>
						<li><text>房源：</text>：</li>
						<li><text>房源面积：</text>260㎡</li>
						<li><text>均价：</text>29000元/㎡</li>
					</ul>
				</view>
			</view>

		</wrap>
		<bot-btns />
	</view>
</template>

<script>
import BotBtns from "./detail/bot-btns"
export default {
	data() {
		return {
			tabIndex: 0,
			labelIndex: 0,
			tabList:[ '户型图', '一房一价', '更多'],
			labelList: [
				{ txt: '全部', num: 8 },
				{ txt: '一室', num: 1 },
				{ txt: '二室', num: 3 },
				{ txt: '三室', num: 4 }
			]
		};
	},
	methods: {
		onTabChange(index) {
			this.tabIndex = index
		},
		onLabelChange(index) {
			this.labelIndex = index
		}
	},
	onLoad(e) {
		uni.setNavigationBarTitle({
		　　title:'悦府-户型图'
		})
		if(e.type == 1 ) {
			this.tabIndex = 1
		}
	},
	components: {
		BotBtns
	}
}
</script>

<style lang="scss">
.house-layout{
	.top-tabs{
		display: flex; justify-content: space-around; font-size: 32rpx; line-height: 80rpx;
		view.active{
			color:$theme;
		}
	}
	.label-tabs{
		margin-top: 10rpx;
		view{
			display: inline-block; padding: 15rpx 20rpx; background: $gray; margin-right:20rpx;
			&.active{
				color: $theme; 
			}
		}
	}
}
.layout-con{
	margin-top: 10rpx;
	.layout-list{
		margin-top: 30rpx; display: flex;
		.img-w{
			width: 200rpx;
			image{
				width: 100%;
			}
		}
		.txt-w{
			flex:1; margin-left: 20rpx; line-height: 40rpx;
			text{
				color: #999;width: 140rpx; display: inline-block;
			}
		}
	}
}
</style>
