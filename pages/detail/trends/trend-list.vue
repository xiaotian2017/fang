<template>
    <view class="trend-list fz" >
            <view class="dot"></view>
            <view class="data-wrod">{{date}} 置业顾问{{listdata.author}}</view>
            <view class="content">
                <view class="title">{{listdata.title}}</view>
                <view class="desc">{{listdata.content}}</view>
            </view>
            <view class="img-w">
                <img-box :src="listdata.imgUrl"  />
            </view>
    </view>
    
</template>

<script>
import { getFormatDate } from "common/js/util"

export default {
    props: {
        listdata: {
            default: () => {
                return {
                    dateWord: '2020年2月20日 置业顾问-静静',
                    title: '悦府交付在即',
                    title: '即将交付啦'
                }
            }
        }
    },
    computed: {
        date() {
            if(this.listdata) {
                return getFormatDate(this.listdata.publishTime, 'yyyy年MM月dd日')
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
    .content{
        
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

