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
            let userInfo = uni.getStorageSync('userInfo'),
                { headImgUrl, id, type } = userInfo
            let params = {
                content: this.content,
                projectId: this.projectId,
                createTime: new Date(),
                fromIcon:  headImgUrl,
                fromId: id,
                fromType: 1,
                //评论他人回复时候
                relatedId: null,
            }
            /**
             * thumbupNum	integer($int32)
                点赞数量

                toIcon	string
                被评论者icon

                toId	integer($int64)
                被评论者id

                toName	string
                被评论者名称

                toType	integer($int32)
                被评论者类型（0：楼盘；1：用户；2：官方；3：置业顾问）
             */

            console.log(params)
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
