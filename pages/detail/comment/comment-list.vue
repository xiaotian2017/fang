<template>
    <view class="comment-list fz">
        <view class="avatar">
            <img-box mode="scaleToFill" class="img" status='radius' />
        </view>
        <view class="word">
            <view class="nick">用户昵称</view>
            <view class="text-1">
                第一层评论，第一层评论，第一层评论，第一层评论，第一层评论，
                第一层评论，第一层评论，第一层评论，第一层评论，
                <view class="text-2">
                    <!-- <text class="nick">用户A：</text> -->
                    <text class="nick">用户A 回复 用户B：</text>
                    第二层评论，第二层评论，第二层评论，
                </view>
            </view>
        </view>
    </view>
</template>



<script>
// 回复某人样式不一样
// 自己不能回复自己
// 多的时候查看更多

export default {
    
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
		
	}
}
</style>
