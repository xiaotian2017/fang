<template>
    <view class="excellent-consultant fz">
        <view class="detail-tit fl">优秀置业顾问</view>
        <view class="more fr" @tap="toMore">更多置业顾问></view>

        <view class="clear"></view>
        <view class="consultant-con">
            <view class="consultant-list" v-for="(item, i) in arr" :key="i">
                <img-box class="avatar" mode="aspectFill" />
                <view class="name">张珩</view>
                <button class="btn" @tap="toContact">咨询</button>
            </view>
        </view>
    </view>
</template>
<script>
export default {
    data() {
        return {
            arr: [0,0,0]
        }
    },
    methods:{
        toContact() {
            uni.navigateTo({
                url: '/pages/detail/contactConsultant'
            })
        },
        toMore() {
            uni.navigateTo({
                url: '/pages/detail/consultantList'
            })
        }
    },
}
</script>
<style lang="scss" scoped>
.excellent-consultant{
    padding: 0 $gap; 
    .more{
        margin-top: 20rpx; 
    }
}

.consultant-con{
    display: flex;  justify-content: space-around; margin-top: 10rpx;
    .consultant-list{
        text-align:center;
        .avatar{
            width: 110rpx; height: 110rpx;display: block;
            /deep/ image{
                 border-radius: 100%;
            }
        }
        .btn{
            padding:0;
            width: 80rpx; height: 50rpx; line-height: 50rpx; margin: 15rpx 0 30rpx;
        }
        
    }
}
</style>


