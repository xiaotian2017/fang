<template>
    <view class="recommend-layer">
        <view class="row">
            <view class="third full" @tap="toDeveloper">
                <view class="mask"></view>
                <view class="text">优质开发商品牌展</view>
                <image class="img" src="../../../static/list/product1.jpg" />
            </view>
            <view class="third" @tap="toList('yun')">
                <view class="mask"></view>
                <view class="text">乐米云看房</view>
                <image class="img" src="../../../static/list/product2.png" />
            </view>
        </view>
    
        <view class="row">
            <view class="third" @tap="toList('improve')">
                <view class="mask"></view>
                <view class="text"><view class="txt">乐米推荐</view>改善楼盘</view>
                <image class="img" src="../../../static/list/product1.jpg" />
            </view>
            <view class="third" @tap="toList('luxury')">
                <view class="mask"></view>
                <view class="text"><view class="txt">乐米推荐</view>顶级豪宅</view>
                <image class="img" src="../../../static/list/product1.jpg" />
            </view>
            <view class="third" @tap="toList('need')">
                <view class="mask"></view>
                <view class="text"><view class="txt">乐米推荐</view>刚需楼盘</view>
                <image class="img" src="../../../static/list/product2.png" />
            </view>
        </view>
        
    </view>
</template>

<script>
export default {
	methods: {
		toDeveloper() {
			uni.navigateTo({
				url : "/pages/index/excellentDeveloper",
			})
        },
        toList(type) {
            uni.navigateTo({
                url: `/pages/house/house?type=${type}`
            })
        }
	}
}
</script>
<style lang="scss" scoped>
.recommend-layer{
    margin: 20rpx -10rpx; 
    .row{
        display: flex; justify-content: space-between; 
        .third{
            position: relative;  margin: 0 10rpx 20rpx;; height: 140rpx; flex: 1;
        }
        .img{
            width: 100%; height: 100%; border-radius: 4px; 
        }
        
        .mask{
            background: rgba(0,0,0,0.3); position: absolute; height:100%; width: 100%; top:0; left:0; z-index:1;
        }
        .text{
            color: #fff; font-size:34rpx; font-weight: bold; position: absolute; @include top-center; z-index: 1;
            text-align: center; width: 100%;
            .txt{
                font-size: 28rpx; margin-bottom: 10rpx;
            }
        }
    }
}
</style>