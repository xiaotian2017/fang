<template>
    <view class="article-list">
        <view class="img-w">
            <image class="full" src="../../static/list/product1.jpg" />
        </view>
        <view class="text-w">
            <view class="sub-tit">我是文章标我是是文章标题我是文章标题我我是文章</view>
            <view class="sub-p">
                {{type=='time'?"2020-05-05":'我是小标题呀'}}
            </view>
        </view>
    </view>
</template>

<script>
export default {
    props: {
        type: {}
    }
}
</script>

<style lang="scss" scoped>
.article-list{
    display: flex; background: #fff; margin-bottom: 30rpx;
    .img-w{
        width: 200rpx; height: 140rpx; 
    }
    .text-w{
        flex: 1; padding: 10rpx 20rpx; color: #666;
        .sub-tit{
            font-size: 28rpx; line-height: 40rpx; color: #333; @include line(2); height: 80rpx; margin-bottom:10rpx;
        }

    }
}
</style>