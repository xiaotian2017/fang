<template>
    <view class="bot-btns">
        <template v-for="(item, i) in list" >
            <view class="focus" v-if="item.type=='focus'" :key="i" @tap="toggleFocus" :class="{focused: isFocus}">
                <uni-icons :type="focusConfig.type" size="16" :color="focusConfig.color" />
                <view>{{focusConfig.txt}}</view>
            </view>
            <button class="consult mybtn" v-if="item.type=='consult'" @tap="toConsult" :key="i">咨询顾问</button>
            <button class="share mybtn" v-if="item.type=='share'" open-type="share" :key="i" @tap="onShare">我要分享</button>
        </template>
    </view>
</template>

<script>
import { mapState, mapActions } from "vuex"
import { addConcern, deleteConcern } from "@/api"
import { CONCERN_API } from "@/api/complex"

export default {
    props: {
        list: {
            default: () => [
                { type: 'focus' },
                { type: 'consult' },
                { type: 'share' }
            ]
        },
    },
    data() {
        return {
            //isFocus: false
        }
    },
    methods: {
        toggleFocus() {
            //this.isFocus = !this.isFocus
            console.log(this.houseInfo)
            if(!this.isFocus) {
                CONCERN_API.focusProject(this.projectId, this.houseDetail.project.name).then(data => {
                    this.setConcernStatus(1)
                })
            }else{
                CONCERN_API.cancelFocusProject(this.projectId).then(data => {
                    this.setConcernStatus(0)
                })
            }
        },
        toConsult() {
            uni.navigateTo({
                url: '/pages/detail/consultantList'
            })
        },
        onShare() {
            uni.share({
                provider: "weixin",
                scene: "WXSceneSession",
                type: 1,
                summary: "我正在使用HBuilderX开发uni-app，赶紧跟我一起来体验！",
                success: function (res) {
                    console.log("success:" + JSON.stringify(res));
                },
                fail: function (err) {
                    console.log("fail:" + JSON.stringify(err));
                }
            });
        },
        ...mapActions('sDetail', ['setConcernStatus'])
    },
    computed: {
        focusConfig() {
            let flag = this.isFocus == true, ret = {}

            if(!flag) {
                ret = {
                    type: 'heart',
                    color: '#666',
                    txt: '关注'
                }
            }else{
                ret = {
                    type: 'heart-filled',
                    color: 'red',
                    txt: '取消关注'
                }
            }
            return ret
        },
        isFocus() {
            return this.houseDetail.project.concern
        },
        ...mapState('sDetail', ['houseDetail','projectId'])
    },
    mounted() {
        //this.isFocus = this.houseDetail.concern
    }
}
</script>

<style lang="scss" scoped>
.bot-btns{
	position:fixed; width: 100%;  display: flex; bottom: 0rpx;  left: 0;
    background: #fff; padding: 15rpx 15rpx; box-sizing:border-box;
    @include gray-shadow;
	.mybtn{
		flex: 1; margin: 0 5px; height: 80rpx; line-height: 80rpx; color: #fff;font-size: 30rpx;
		&.consult{
			background: $orange;
		}
		&.share{
			background: $green;
		}
    }
    .focus{
        width: 114rpx; text-align:center; font-size: 28rpx;
        &.focused{
            color: red;
        }
    }
}
</style>
