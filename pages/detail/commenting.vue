<template>
    <view class="commenting">
        <view class="detail-tit">万象城</view>
        <textarea placeholder="请输入评论" />

        <button class="detail-btn">提交</button>
    </view>
</template>

<style lang="scss" scoped>

.commenting {
    padding: 40rpx 0; position: relative; margin:0 $gap;
    textarea {
        border: 1px solid $border;
        margin-top: 30rpx; padding: 20rpx; line-height: 60rpx;
    }
    .detail-btn{
        position: fixed; bottom: 30rpx; width: 690rpx;
    }
}
</style>
