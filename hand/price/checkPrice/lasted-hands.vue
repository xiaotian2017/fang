<template>
    <view class="lasted-handlist">
        <view class="hand-title">最近成交</view>
        <view class="hand-list" v-for="(item, i) in arr" :key="i">
            <view class="row1">{{temp.name}}</view>
            <view class="row2">{{temp.area}}&nbsp;&nbsp;{{temp.floor}}</view>
            <view class="row2">总价：{{temp.totalPrice}}&nbsp;&nbsp;单价：{{temp.price}}</view>
            <view class="row3">成交时间：{{temp.dealTime}}</view>
        </view>
    </view>
</template>

<script>
export default {
    props: {
        temp: {
            default: () => {
                return {
                    area: "97m²",
                    name: '某某楼盘',
                    floor: '6/7F',
                    totalPrice: '500万',
                    price: '53212元/m²',
                    dealTime: '2020-06-22'
                }
            }
        }
    },
    data() {
        return {
            arr: [0,0,0,0]
        }
    }
}
</script>

<style lang="scss" scoped>
.lasted-handlist{
    padding: 20rpx 0 30rpx;
    .hand-list{
        font-size: 26rpx; line-height: 40rpx; padding: 20rpx 0; border-bottom: 1px solid #eee; 
        .row1{
            font-weight: bold; font-size: 30rpx; margin: 10rpx 0;
        }
    }
}
</style>


