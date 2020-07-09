<template>
    <view class="swing-list fz gap">
        <view class="row row1">
            <view class="title">{{temp.title}}</view>
            <view class="price">{{temp.price}}</view>
        </view>
        <view class="row">
            <text>摇号范围：</text> {{temp.rang}}
        </view>
        <view class="row">
            <view>
                <text>摇号时间：</text> {{temp.date}}
            </view>
            <view>
                <text>建面：</text> {{temp.area}}
            </view>
        </view>
        <view class="row row-last">
            <view>总套数：{{temp.sum}}</view>
            <view>摇中率： 无房：{{temp.noneRate}} &nbsp;&nbsp;有房：{{temp.hasRate}}</view>
        </view>
    </view>
</template>

<script>
export default {
    props: {
        temp: {
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
    }
}
</script>

<style lang="scss" scoped>
.swing-list{
    line-height: 50rpx; margin-bottom: 30rpx;
    .row{
        display:flex; justify-content: space-between;
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
