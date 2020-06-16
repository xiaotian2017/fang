<template>
    <view class="recommend-layer">
        <view class="list">
            <view class="full">
                <view class="mask"></view>
                <view class="text">乐米云看房</view>
                <image src="../../static/list/product1.jpg"></image>
            </view>
        </view>
        <view class="list">
            <view class="half">
                <view class="mask"></view>
                <view class="text"><view>优质开发</view>商品牌展</view>
                <image src="../../static/list/product2.png"></image>
            </view>
            <view class="half">
                <view class="mask"></view>
                <view class="text"><view>乐米推荐</view>刚需楼盘</view>
                <image src="../../static/list/product2.png"></image>
            </view>
        </view>
        <view class="list">
            <view class="half">
                <view class="mask"></view>
                <view class="text"><view>乐米推荐</view>改善楼盘</view>
                <image src="../../static/list/product1.jpg"></image>
            </view>
            <view class="half">
                <view class="mask"></view>
                <view class="text"><view>乐米推荐</view>顶级豪宅</view>
                <image src="../../static/list/product1.jpg"></image>
            </view>
        </view>
        
    </view>
</template>

<style lang="scss" scoped>
.recommend-layer{
    display: flex; justify-content: space-between; margin: 20rpx -10rpx; 
    .list{
        flex: 1; margin: 0 10rpx; 
        image{
            width: 100%; height: 100%; border-radius: 4px; 
        }
        .full{
            height: 300rpx; 
        }
        .half{
            height: 140rpx; 
            &:first-child{
                margin-bottom: 21rpx;
            }
        }
        .full,.half{
            position: relative;
        }
        .mask{
            background: rgba(0,0,0,0.3); position: absolute; height:100%; width: 100%; top:0; left:0; z-index:1;
        }
        .text{
            color: #fff; font-size:34rpx; font-weight: bold; position: absolute; @include top-center; z-index: 1;
            text-align: center; width: 100%;
            view{
                font-size: 28rpx; margin-bottom: 10rpx;
            }
        }
    }
}
</style>