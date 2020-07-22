<template>
    <view class="swing-list fz gap">
        <view class="row row1">
            <view class="title">{{listdata.projectName}}</view>
            <view class="price">{{listdata.priceRemark}}</view>
        </view>
        <view class="row">
            <text>摇号范围：</text> {{listdata.limitRemark}}
        </view>
        <view class="row">
            <view>
                <text>摇号时间：</text> {{date}}
            </view>
            <view>
                <text>建面：</text> {{listdata.areaRemark}}
            </view>
        </view>
        <view class="row row-last">
            <view>总套数：{{listdata.houseNum}}</view>
            <view>摇中率： 无房：{{listdata.firstRate}} &nbsp;&nbsp;有房：{{listdata.secondRate}}</view>
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
                    title: '城北万象城',
                    price: '20000元/m2',
                    rang: "1-4, 10-20",
                    date: '2020-09-10',
                    area: '97-140m2',
                    sum: '30',
                    noneRate: '3%',
                    hasRate: '1.2%'
                }
            }
        }
    },
    computed: {
        date() {
            return getFormatDate(this.listdata.lotteryTime, "yyyy-MM-dd")
        }
    }
}
</script>

<style lang="scss" scoped>
.swing-list{
    line-height: 50rpx; margin-bottom: 30rpx;
    .row{
        display:flex; justify-content: space-between; font-size: 25rpx;
    }
    .row1{
        font-size: 32rpx; font-weight: bold; line-height: 70rpx; 
        .price{
            color: $orange;  
        }
    }
    .row-last{
        height: 60rpx; line-height: 60rpx; background: $orange_bg; color: #fff; padding:0 10rpx; color: $orange; margin-top: 10rpx;
    }
    
}
</style>
