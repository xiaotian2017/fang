<template>
	<view class="swing-result fz">
		<uni-search-bar :radius="100" class="search-bar" @confirm="search" @input="input" placeholder="请输入身份证号后四位、登记号、编号查询" ></uni-search-bar>
		<view class="result-con">
			<view class="result-list" v-for="(item, i) in arr" :key="i">
				<view class="item">
					<text>选房顺序：</text>{{temp.order}}
				</view>
				<view class="item">
					<text>姓名：</text>{{temp.name}}
				</view>
				<view class="item">
					<text>身份证号：</text>{{temp.ID}}
				</view>
				<view class="item">
					<text>摇号编码：</text>{{temp.NO}}
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
import uniSearchBar from '@/components/uni-search-bar/uni-search-bar'

export default {
	data() {
		return {
			arr: [0,0,0,0,0],
			temp: {
				order: '第一位',
				name: "张*华",
				ID: "360428*****2908",
				NO: 'ZTV89462'
			}
		};
	},
	methods: {
		search() {

		},
		input() {

		}
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
				text{
					width: 150rpx; display:inline-block; color: #666; line-height: 60rpx;
				}
			}
		}
	}
}
</style>
