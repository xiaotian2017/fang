<template>
    <uni-popup ref="popup" type="dialog" class="dialog">
        <view class="auth-box">
            <text>请授权登录小程序</text>
            <view class="tips">取消则会退出小程序</view>
            <view class="bot-btns">
                <navigator class="btn" target="miniProgram" open-type="exit">取消</navigator>
                <button class="btn" open-type="getUserInfo" @click="loginMP">确认</button>
            </view>
        </view>
    </uni-popup>
</template>

<script>
import uniPopup from '@/components/uni-popup/uni-popup.vue'
import uniPopupMessage from '@/components/uni-popup/uni-popup-message.vue'
import uniPopupDialog from '@/components/uni-popup/uni-popup-dialog.vue'

export default {
    methods: {
        loginMP() {
            this.$refs.popup.close()
            dealAuth().catch(() => {
				this.$refs.popup.open()
			})
        }
    },
    mounted() {
        this.$refs.popup.open()
    }, 
    components: {
        uniPopup, uniPopupDialog
    }
}
</script>

<style lang="scss" scoped>
.auth-box{
    width: 500rpx;  border-radius: 20rpx; background: #fff;
    text-align:center; padding-top: 40rpx; 
    text{
        display: inline-block; font-size: 36rpx; 
    }
    .tips{
        color: #999; margin-top: 10rpx;
    }
    .bot-btns{
        height: 100rpx; display: flex; margin-top: 40rpx; border-top: 1px solid $gray;
        .btn{
            height: 100rpx;  text-align:center; line-height: 100rpx;
            font-size: 30rpx; flex: 1; 
            &:after{
                border: 0px none;
            }
        }

    }
}
</style>


