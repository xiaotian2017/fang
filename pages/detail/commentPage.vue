<template>
    <view class="comment-page">
        <house-list />
        <view class="hr10"></view>
        <view class="comment-con">
            <comment-list />
            <comment-list />
            <comment-list />
            <comment-list />
        </view>

        <button class="detail-btn" @tap="toCommenting">我要评论</button>
    </view>
</template>

<script>
import CommentList from "./comment/comment-list.vue"
import HouseList from "@/comps/list/house-list"

export default {
    methods: {
        toCommenting() {
            uni.navigateTo({
                url: '/pages/detail/commenting'
            })
        }
    },
    components: {
        CommentList,HouseList
    }
}
</script>

<style lang="scss" scoped>
.comment-page{
    padding: 0 $gap;
    .comment-con{
        padding-top: 40rpx;
    }
    .detail-btn{
        position: fixed; bottom: 30rpx; width: 690rpx;
    }
}
</style>

