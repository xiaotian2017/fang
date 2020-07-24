<template>
    <view class="commenting">
        <view class="detail-tit">
            {{fromName ? `回复${fromName}` : `评论${houseInfo.name}`}}
            
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
            fromName: null
        }
    },
    methods: {
        onSubmit() {
            let userInfo = uni.getStorageSync('userInfo'),
                { headImgUrl, id, type } = userInfo,
                realatedId = parseInt(this.realatedId)

            let params = {
                content: this.content,
                fromId: id,
            }

            if(realatedId) {
                params = {
                    ...params,
                    //一级评论的id
                    relatedId: parseInt(this.realatedId),
                    //评论的评论 的用户id
                    toId: parseInt(this.fromId)
                }
            }else{
                params = {
                    ...params,
                    toId: this.projectId
                }
            }
            
            addComment(params).then(data => {
                uni.showToast({
                    title: '标题',
                    duration: 2000,
                    icon: 'success'
                });
                uni.navigateBack()
            }).catch(err => {
                uni.showToast({
                    title: '错误信息',
                    duration: 2000,
                    icon: 'success'
                });
            })
        }
    },
    onLoad(e) {
        let{ fromId, fromName, realatedId } = e

        this.fromName = fromName
        this.fromId = fromId
        this.realatedId = realatedId
        console.log(fromId,fromName,realatedId)
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
