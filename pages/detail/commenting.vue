<template>
    <view class="commenting">
        <view class="detail-tit">
            {{realatedId ? `回复${realtedName}` : `评论${houseInfo.name}`}}
            
        </view>
        <textarea placeholder="请输入评论" v-model="content" />

        <button class="detail-btn" @tap="onSubmit">提交</button>
    </view>
</template>

<script>
import { mapGetters, mapState } from "vuex"
import { addComment } from "@/api"

export default {
    data() {
        return {
            content: "",
            realatedId: null,
            realtedName: ""
        }
    },
    methods: {
        onSubmit() {
            let userInfo = uni.getStorageSync('userInfo'),
                { headImgUrl, id, type } = userInfo
            let params = {
                content: this.content,
                toId: this.projectId,
                fromId: id,
                realatedId: this.realatedId
            }
            
            addComment(params).then(data => {
               console.log(data)
            })
        }
    },
    onLoad(e) {
        let { realatedId,realtedName } = e

        this.realtedName = realtedName
        this.realatedId = realatedId
    },
    computed: {
        ...mapState('sDetail', ['projectId']),
        ...mapGetters('sDetail',['houseInfo'])
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
