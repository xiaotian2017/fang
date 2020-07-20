<template>
    <view class="commenting">
        <view class="detail-tit">万象城</view>
        <textarea placeholder="请输入评论" v-model="content" />

        <button class="detail-btn" @tap="onSubmit">提交</button>
    </view>
</template>

<script>
import { mapState } from "vuex"
import { addComment } from "@/api"

export default {
    data() {
        return {
            content: ""
        }
    },
    methods: {
        onSubmit() {
            let params = {
                content: this.content,
                projectId: this.projectId
            }
           addComment(params).then(data => {
               console.log(data)
           })
        }
    },
    computed: {
        ...mapState('sDetail', ['projectId'])
    },
}
</script>

<style lang="scss" scoped>

.commenting {
    padding: 40rpx 0; position: relative; margin:0 $gap;
    textarea {
        border: 1px solid $border;
        margin-top: 30rpx; padding: 20rpx; line-height: 60rpx;
    }
    .detail-btn{
        position: fixed; bottom: 30rpx; width: 690rpx;
    }
}
</style>
