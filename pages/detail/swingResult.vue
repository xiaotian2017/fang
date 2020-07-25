<template>
	<view class="swing-result fz">
		<uni-search-bar :radius="100" class="search-bar" @cancel="search" @confirm="search" placeholder="请输入身份证号后四位、登记号、编号查询" ></uni-search-bar>
		<view class="result-con">
			<view class="result-list" v-for="(item, i) in dataList" :key="i">
				<view class="item">
					<text class="txt">选房顺序：</text>{{item.sortNo}}
				</view>
				<view class="item">
					<text class="txt">姓名：</text>{{item.name}}
				</view>
				<view class="item">
					<text class="txt">身份证号：</text>{{item.idCardNo}}
				</view>
				<view class="item">
					<text class="txt">摇号时间：</text>{{item.lotteryTime}}
				</view>
				<view class="item">
					<text class="txt">摇号编码：</text>{{item.lotteryNo}}
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
import uniSearchBar from '@/components/uni-search-bar/uni-search-bar'
import { getSwingResult } from "@/api"
import ListMixins from "common/js/listMixins"
import { mapState } from "vuex"

export default {
	data() {
		return {
			arr: [0,0,0,0,0],
			temp: {
				order: '第一位',
				name: "张*华",
				ID: "360428*****2908",
				NO: 'ZTV89462'
			},
			listApi: getSwingResult
		};
	},
	mixins: [ ListMixins ],
	methods: {
		search(query) {
			this.pageNum = 1
			this.addParams = {
				keyword: query.value
			}
			this._getList()
		}
	},
	computed: {
		...mapState('sDetail', ['projectId'])
	},
	onLoad() {
		this.addParams = { projectId: this.projectId || 1 }
		this._getList()
	},
	components: {
		uniSearchBar
	}
}
</script>

<style lang="scss">
.swing-result{
	.search-bar{
		line-height: 55rpx; margin-top: 20rpx; 
	}
	.result-con{
		padding: 0 $gap; 
		.result-list{
			border-bottom: 1px solid $gray; padding: 20rpx 0;
			.item{
				position:relative;  line-height: 60rpx; padding-left: 160rpx;
				.txt{
					width: 150rpx; display:inline-block; color: #666;
					position: absolute; left:0; text-align:right;
				}
			}
		}
	}
}
</style>
