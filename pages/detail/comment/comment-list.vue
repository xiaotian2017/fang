<template>
    <view class="comment-list fz">
        <view class="avatar">
            <img-box mode="scaleToFill" class="img" status='radius' />
        </view>
        <view class="word">
			<view >
				<text class="nick">{{listdata.fromName}}</text>
				<text>{{listdata.createTime}}</text>
				<view class="fr">
					<uni-icons type="heart" :color="zanIconColor" @tap="onZan" size="16" />
					<template v-if="listdata.thumbupNum">
						({{listdata.thumbupNum}}) 
					</template>
					<!-- v-if="userId!=listdata.fromId" -->
					<uni-icons type="compose"  @tap="toCommenting" color="#666" size="16" class="icon-comment" />
				</view>
			</view>
            
            <view class="text-1">
				{{listdata.content}}
                <view class="text-2" v-for="(item, i) in listdata.list" :key="i" @tap="toCommenting(item)">
                    <!-- <text class="nick">用户A：</text> -->
                    <text class="nick">{{item.fromName}} 回复 {{item.toName}}：</text>
                    {{item.content}}
                </view>
            </view>
        </view>
    </view>
</template>



<script>
// 回复某人样式不一样
// 自己不能回复自己
// 多的时候查看更多

import { zanComment } from "@/api"

export default {
    props: {
		listdata: {}
	},
	data() {
		return {
			userId: uni.getStorageSync('userInfo').id,
			zanStatus: 0
		}
	},
	methods: {
		onZan() {
			zanComment({
				id: this.listdata.id,
				userId: this.userId
			}).then(() => {
				this.zanStatus = this.zanStatus == 0 ? 1 : 0
			})
		},
		toCommenting(item) {
			let { id } = this.listdata
			if(item) {
				var { fromId, fromName } = item
			}else{
				var { fromId, fromName } = this.listdata
			}
			
			uni.navigateTo({
                url: `/pages/detail/commenting?fromId=${fromId}&fromName=${fromName}&realatedId=${id}`
            })
		}
	},
	watch: {
		listdata(obj){
			this.zanStatus = obj.thumbupStatus
		}
	},
	created() {
		this.zanStatus = this.listdata.thumbupStatus
	},
	computed: {
		zanIconColor() {
			return this.zanStatus == 0 ? '#666' : 'red'
		}
	}
}
</script>

<style lang="scss" scoped>
.comment-list{
	margin-bottom: $mgap; display:flex; padding-bottom: 40rpx; border-bottom: 1px solid #eee;
	.avatar{
		width: 60rpx; margin-right: 20rpx;
		.img{
			width: 60rpx; height:60rpx;  display:block;
		}
	}
	.word{
		width: 100%;
		.nick{
			font-size: 32rpx;
		}
		.text-1{
			line-height: 40rpx; margin-top: 10rpx;
			.text-2{
				background: #eee; padding: 10rpx; margin-top: 10rpx;
				.nick{
					font-size: 30rpx;
					
				}	
			}
		}
		.icon-comment{
			margin-right: 20rpx; display: inline-block;
		}
		
	}
}
</style>
