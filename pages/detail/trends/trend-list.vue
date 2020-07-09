<template>
    <view class="trend-list fz" >
            <view class="dot"></view>
            <view class="data-wrod">{{temp.dateWord}}</view>
            <view class="title">{{temp.title}}</view>
            <view class="desc">{{temp.title}}</view>
            <view class="img-w">
                <img-box  />
            </view>
    </view>
    
</template>

<script>
export default {
    props: {
        temp: {
            default: () => {
                return {
                    dateWord: '2020年2月20日 置业顾问-静静',
                    title: '悦府交付在即',
                    title: '即将交付啦'
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.trend-list{
    padding-bottom: 30rpx; position:relative; padding-left: 40rpx; position: relative;
    .dot{ 
        width: 20rpx;height:20rpx; border-radius:100%;background: $theme;
        position: absolute;top:10rpx; left:0; 
    }
    .data-word{
        color: #666; 
    }
    .title{
        color: #333; font-size: 32rpx; margin: 10rpx 0;
    }
    .desc{
        color: #666; margin-bottom: 20rpx;
    }
    .img-w{
        max-width: 240rpx;
    }

    &:before{
        content: ""; width:2rpx; background: #eee; position:absolute;
        left:8rpx; height: 70%; top:50%; transform: translateY(-50%);
    }
}
</style>

