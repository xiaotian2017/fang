<template>
	<scroll-view v-if="steps.length>0" class="step-con fz" scroll-x="true" scroll-with-animation :show-scrollbar=false>
		<view 	class="step-item" 
				v-for="(item, i) in steps" 
				:class="{'active':i==curIndex, 'ed':i<curIndex}"
				:key="i">
			<view class="tit">{{item.process}}</view>
			<view class="time">{{item.time}}</view>
		</view>
	</scroll-view>
</template>

<script>
export default {
	props: {
		steps: {
			default: () => []
		}
	},
	data() {
		return {
			opts: [
				{
					title: "预售",
					desc: "2020.06.10",
					status: true,
				},
				{
					title: "登记",
					desc: "2020.06.10",
					status: true,
				},
				{
					title: "补交资料",
					desc: "2020.06.10",
					status: false,
				},
				{
					title: "意向公示",
					desc: "06.10-06.25",
					status: false,
				},
				{
					title: "摇号",
					desc: "2020.06.10",
					status: false,
				},
				{
					title: "选房",
					desc: "待定",
					status: false,
				}
			]
		}
	},
	computed: {
		curIndex() {
			let ret = 0

			this.steps.find((item, index) => {
				if(item.status ==1) {
					ret = index
					return true
				}
			})

			console.log(ret)
			return ret
		}
	}
}	
</script>

<style lang="scss">
	
$ing: rgba(102, 102, 102, 1);
$ing_bg: rgba(102, 102, 102, 0.2);
$cur: rgba(103, 194, 58, 1);
$cur_bg: rgba(103, 194, 58, 0.2);
$ed: rgba(64,158,255,1);
$ed_bg: rgba(64,158,255,0.2);

.step-con{
	white-space: nowrap; margin-top: 20rpx;
	.step-item{
		width: 150rpx; height: 100rpx; background: $ing_bg; color: $ing;
		display: inline-block; margin-right: 30rpx; position:relative;
		text-align:center; 
		
		&:before{
			width: 0; position:absolute; right:-20rpx; content:"";
			height: 0;
			border-left: 20rpx solid $ing_bg;
			border-top: 50rpx solid transparent;
			border-bottom: 50rpx solid transparent;
		}
		&.active{
			background: $cur_bg; color: $cur;
			&:before{
				border-left-color: $cur_bg;
			}
		}
		&.ed{
			background: $ed_bg; color: $ed;
			&:before{
				border-left-color: $ed_bg;
			}
		}
		.tit{
			padding-top: 15rpx;
		}
	}
}
</style>
