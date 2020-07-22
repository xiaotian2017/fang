<template>
    <view class="article-list" @tap="toArticle">
        <view class="img-w">
            <image class="full" :src="listdata.iconImgUrl" />
        </view>
        <view class="text-w">
            <view class="sub-tit">{{listdata.title}}</view>
            <view class="sub-p">
                {{type=='time'?listdata.publishTime:'我是小标题呀'}}
            </view>
        </view>
    </view>
</template>

<script>
export default {
    props: {
        type: {},
        listdata:{}
    },
    methods: {
        toArticle(item) {
			uni.navigateTo({
				url : `/pages/article/article?url=${item.redirectUrl}&title=${item.title}`
			}) 
		}
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