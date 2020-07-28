<template>
    <view class="excellent-consultant fz" v-if="advisers&&advisers.length>0">
        <view class="detail-tit fl">优秀置业顾问</view>
        <view class="more fr" @tap="toMore">更多置业顾问></view>

        <view class="clear"></view>
        <view class="consultant-con">
            <view class="consultant-list" v-for="(item, i) in advisers" :key="i">
                <img-box class="avatar" mode="aspectFill" status="radius" :src="item.headImgUrl" />
                <view class="name">{{item.name}}</view>
                <button class="btn" @tap="toContact(item)">咨询</button>
            </view>
        </view>
    </view>
</template>
<script>
import { mapGetters } from "vuex"

export default {
    data() {
        return {
            arr: [0,0,0]
        }
    },
    methods:{
        toContact(item) {
            uni.navigateTo({
                url: `/pages/detail/contactConsultant?item=${JSON.stringify(item)}`
            })
        },
        toMore() {
            uni.navigateTo({
                url: '/pages/detail/consultantList'
            })
        }
    },
    computed: {
        ...mapGetters('sDetail', [ 'advisers' ])
    }
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
            /deep/ .img{
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


