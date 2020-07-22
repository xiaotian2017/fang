<template>
	<view class="detail-wrap fz pb120" v-if="!loading">
		<detail-top></detail-top>
		<view class="hl10" />
		<!--摇号指南-->
		<swing-guide></swing-guide>

		<view class="hl10" />
		
		<view class="short-comment">
			<view class="detail-tit">乐米短评</view>
			<view class="word">{{houseInfo.remark}}</view>
		</view>
		<view class="hl10" />
		<!--优秀置业顾问-->
		<excellent-consultant />
		<view class="hl10" />

		<detail-infoes id="house-detail-info" />

		<view class="hl10" />

		<view class="trends-box">
			<view class="detail-tit">
				楼盘动态
				<view class="more fr" @tap="toMoreTrends">更多></view>
			</view>
			
			<view class="clear"></view>
			<trend-list :listdata="houseNews[0]" />
			<button class="detail-btn" @tap="toMoreTrends">更多楼盘动态</button>
		</view>

		<view class="hl10" />
		
		<view class="swing-box">
			<view class="detail-tit gap">
				历史摇号
				<view class="more fr" @tap="toMoreSwing">更多></view>
			</view>
			<view class="clear"></view>
			<swing-list :listdata="houseDetail.lotteryLog" />
			<view class="more-txt" @tap="toMoreSwing">更多历史摇号 >></view>
		</view>
		<view class="hl10" />
		<comment-box />

		<view class="hl10" />

		<view class="gap mt30 mb30	">
			<img-box type="qun.jpg" @tap="toGroup" />
		</view>

		<view class="hl10" />

		<article-comment />
		
		<bot-btns />
	</view>
</template>

<script>
import DetailTop from "./detail/detail-top.vue"
import SwingGuide from "./detail/swing-guide.vue"
import DetailInfoes from "./detail/detail-infoes"
import ExcellentConsultant from "./detail/excellent-consultant"
import TrendList from "./trends/trend-list"
import SwingList from "./swing/swing-list"
import CommentBox from "./detail/comment-box"
import ArticleComment from "./detail/article-comment"
import BotBtns from "./detail/bot-btns"
import { mapActions, mapState, mapGetters } from "vuex"


export default {
	data() {
		return {
			houseId:"0",
			loading: true,
		}
	},
	methods: {
		toMoreTrends() {
			uni.navigateTo({
                url: '/pages/detail/buildingTrends'
            })
		},
		toMoreSwing() {
			uni.navigateTo({
                url: '/pages/detail/swingHistory'
            })
		},
		toGroup() {
			uni.navigateTo({
                url: '/pages/detail/joinGroup'
            })
		},
		_initData() {
			this.infoes = [
				{ label: '楼盘详情区域：', val: '开发区' },
				{ label: '显示交房时间：', val: '2020' },
				{ label: '物业类型：', val: '某某物业' },
				{ label: '建筑类别：', val: '高层' },
				{ label: '装修情况：', val: '精装' },
				{ label: '建筑层高：', val: '30' },
				{ label: '车位比：', val: '1:1.1' },
				{ label: '物业公司：', val: '某某公司' },
				{ label: '物业费用：', val: '1.8/m2' },
				{ label: '总户数：', val: '100' },
			]
		},
		...mapActions('sDetail',[ 'getDeatilInfo', 'getHouseNews' ])
	},
	computed: {
		...mapState('sDetail', ['houseNews','houseDetail']),
		...mapGetters('sDetail', ['houseInfo'])
	},
	onLoad(option) {
		console.log(" option ",option.id)
		this.houseId = option.id || 1;

		this._initData()

		this.getDeatilInfo(1).then(() => {
			this.loading = false
		})
		this.getHouseNews({pageNum:1})
	},
	components:{
		DetailTop,  DetailInfoes,
		SwingGuide, 
		ExcellentConsultant,
		TrendList,
		SwingList,
		CommentBox, ArticleComment, BotBtns
	},
}
</script>

<style lang="scss" scoped>
.short-comment{
	padding: 0 $gap 30rpx;
	.word{
		text-indent:50rpx; font-size: 28rpx; color: #999; line-height: 50rpx;
	}
}

.trends-box{
	padding: 0 $gap; margin-bottom: 30rpx;
}
.swing-box{
	margin-bottom: 30rpx;
	.more-txt{
		color: $theme; text-align:center; line-height: 70rpx;
	}
}
.commenting{
	input{
		height: 100
	}
}


</style>
