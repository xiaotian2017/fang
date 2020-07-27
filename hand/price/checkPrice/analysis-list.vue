<template>
    <view class="quotes">
        <view class="quote-list" v-for="(quote, i) in dataList" :key="i">
            <view>
                <text class="txt">{{quote.val}}</text>{{quote.unit}}
            </view>
            <view class="label">{{quote.title}}</view>
        </view>
    </view>
</template>

<script>
export default {
    props: {
        dataList: {}
    }
}
</script>

<style lang="scss" scoped>
.quotes{
    margin: 30rpx 0 30rpx 0; display: flex; 
    .quote-list{
        float:left; border-right: 1px solid $theme; flex: 1; text-align:center;
        .txt{
            font-size: 30rpx; font-weight: bold;
        }
        .label{
            font-size: 24rpx;
        }
        &:last-child{
            border-right: 0px none;
        }
        
    }
}
</style>


