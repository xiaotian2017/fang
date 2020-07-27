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
					{{label.categoryName}}({{label.count}})
				</view>
			</view>

			<template v-if="tabIndex==2">
				<view class="more">
					<img-box class="img"  :src="layoutMore.imgUrl" />
					<view class="txt mt20">{{layoutMore.content}}</view>
				</view>
			</template>

			<view v-else class="layout-con">
				<view class="layout-list" v-for="(item, i) in listData" :key="i">
					<view class="img-w">
						<img-box :src="item.imgUrl" />
					</view>
					<template v-if="tabIndex==0">
						<ul class="txt-w">
							<li><text>户型名称：</text> {{item.name}}</li>
							<li><text>户型编号：</text>{{item.model}}</li>
							<li><text>房型：</text>{{item.houseType}}</li>
							<li><text>建筑面积：</text>{{item.area}}</li>
						</ul>
					</template>
					
					<template v-else-if="tabIndex==1">
						<ul class="txt-w">
							<li><text>登记时间：</text> {{item.regTime}}</li>
							<li><text>房源：</text>{{item.resource}}</li>
							<li><text>房源面积：</text>{{item.area}}</li>
							<li><text>均价：</text>{{item.averagePrice}}/㎡</li>
						</ul>
					</template>

					
				</view>
			</view>

		</wrap>
		<bot-btns />
	</view>
</template>

<script>
import BotBtns from "./detail/bot-btns"
import { getHouseModels, getHousePrice } from "@/api"
import { mapState, mapGetters } from "vuex"

export default {
	data() {
		return {
			tabIndex: -1,
			labelIndex: 0,
			tabList:[ '户型图', '一房一价', '更多'],
			labelList: [
				{ txt: '全部', num: 8 },
				{ txt: '一室', num: 1 },
				{ txt: '二室', num: 3 },
				{ txt: '三室', num: 4 }
			],
			listData: [],
		};
	},
	methods: {
		onTabChange(index) {
			this.tabIndex = index
		},
		onLabelChange(index) {
			this.labelIndex = index
			this.listData = []

			this.listData = this.layoutList[this.labelIndex].list
		},
		getLayouts() {
			this.listData = []
			if(!this.layoutList) {
				getHouseModels({ projectId: this.projectId || 1 }).then(data => {
					this.layoutList = data.list
					this.labelList = data.type
					this.listData = this.layoutList[this.labelIndex].list
				})
			}else{
				this.listData = this.layoutList[this.labelIndex].list
			}
		},
		getPriceList() {
			if(this.pageNum == 1)  this.listData = []
			
			getHousePrice({ 
				pageNum: this.pageNum,
				pageSize: 6,
				projectId: this.projectId || 1 
			}).then(data => {
				let { totalNum, pageSize, record } = data

                record = record || data
    
                if(!this.maxPages) this.maxPages = Math.ceil(totalNum/pageSize)
    
				this.listData = this.listData.concat(record)
			})
		}
	},
	onReachBottom() {
		if(this.tabIndex == 1) {
			if(this.pageNum < this.maxPages) {
				this.pageNum++
				this.getPriceList()
			}
		}
	},
	computed: {
		...mapState('sDetail', ['projectId','projectName']),
		...mapGetters('sDetail', ['layoutMore'])
	},
	watch: {
		tabIndex:{
			immediate: true,
			handler(val) {
				if(val == 1 ) {
					this.pageNum = 1
					this.getPriceList()
				}else if(val==0){
					this.getLayouts()
				}
			}
		}
	},
	onLoad(e) {
		this.tabIndex = e.type || 0

		

		uni.setNavigationBarTitle({
		　　title: this.projectName
		})
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
.more{
	.img{

	}
	.txt{

	}
}
</style>
