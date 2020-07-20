<template>
    <view class="bot-btns">
        
        <template v-for="(item, i) in list" >
            <view class="focus" v-if="item.type=='focus'" :key="i" @tap="toggleFocus" :class="{focused: isFocus}">
                <uni-icons :type="focusConfig.type" size="16" :color="focusConfig.color" />
                <view>{{focusConfig.txt}}</view>
            </view>
            <button class="consult mybtn" v-if="item.type=='consult'" @tap="toConsult" :key="i">咨询顾问</button>
            <button class="share mybtn" v-if="item.type=='share'" :key="i">我要分享</button>
        </template>
    </view>
</template>

<script>
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
            isFocus: false
        }
    },
    methods: {
        toggleFocus() {
            console.log('is')
            this.isFocus = !this.isFocus
        },
        toConsult() {
            uni.navigateTo({
                url: '/pages/detail/consultantList'
            })
        }
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
        }
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
        width: 110rpx; text-align:center; font-size: 28rpx;
        &.focused{
            color: red;
        }
    }
}
</style>
