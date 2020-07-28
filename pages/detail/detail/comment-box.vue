<template>
    <view class="comments" v-if="houseDetail.userComment">
        <view class="detail-tit">
            评论
            <view class="more" @tap="toCommentPage">更多评论></view>
        </view>
        <comment-list :listdata="houseDetail.userComment" />

        <button class="detail-btn" @tap="toCommenting">评论</button>
    </view>
</template>

<script>
import CommentList from "../comment/comment-list.vue"
import { getCommentList } from "@/api"
import { mapState } from "vuex"

export default {
    methods: {
        toCommenting() {
            uni.navigateTo({
                url: '/pages/detail/commenting'
            })
        },
        toCommentPage() {
            uni.navigateTo({
                url: '/pages/detail/commentPage'
            })
        }
    },
    computed: {
        ...mapState('sDetail', ['projectId','houseDetail']),
       
    },
    created() {
    },
    components: {
        CommentList
    }
}
</script>

<style lang="scss" scoped>
.comments{
    margin-bottom: 30rpx; padding:0 $gap;
}
</style>
