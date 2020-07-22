<template>
    <!-- 具体品牌展点进去，显示该开发商下的所有楼盘列表。点击搜索框直接在本页面搜索，不跳转到搜索页面了，楼盘列表优先按照热门楼盘排行，其余按照点击量排序（所有楼盘排序页面都参照此规则） -->
    <view class="developer-show fz">
        <view class="index-tit">优质开发商推荐</view>
        <view class="list-con clearfix">
            <view class="list" v-for="(item, i) in arr" :key="i">
                <view class="list-inner">
                    <image :src="temp.url" />
                    <text>{{temp.txt}}</text>
                </view>
            </view>
        </view>
    </view>
</template>
<script>
export default {
    data() {
        return {
            arr: [ 0,0,0,0,0,0,],
            temp: { url: '../../static/list/product1.jpg', txt: '品牌名称，品牌展' }
        }
    }
}
</script>
<style lang="scss" scoped>
.developer-show{
    padding: 30rpx $gap 20rpx;
    .list-con{
        margin: 10rpx -10rpx;
       .list{
           width: 50%;  float: left; margin-bottom: 30rpx;
           .list-inner{
               padding: 0 10rpx;
           }
           image{
               width: 100%; height: 200rpx;
           }
       }
    }
}
</style>