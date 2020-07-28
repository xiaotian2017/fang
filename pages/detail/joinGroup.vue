<template>
    <view class="join-group gap">
        <text>
            乐米投资目前已有11个微信群。现为了方便各位进群，设立了一个长期保持人数在100人以下的中转群。
            有意向进群的观众可以通过下方二维码进中转群，并私聊乐米助手，请他拉你进正式群。
            目前十一个群按照：主群，顶配客户为主，有极高资产要求（3000万房产以及上）。一群，高端客户为主，有较高资产要求（2000万房产及以上）。二群，以中端改善为主，有一定资产要求（1000万房产及以上）。三群，以首改和二次改善为主。刚需群，以年轻人及刚需为主。
            根据每一位的个人情况，我们会分配到不同的群。每个群会有不同的楼盘推荐倾向。所以在私聊乐米助手的同时，请备注自己的个人住房情况，或是进群意向。
            乐米助手会审核并拉你进最适合你的群。进群以后请自觉退中转群，谢谢合作。
        </text>

        <img-box :src="qrCode" class="img-box" />
    </view>
</template>

<script>
import { getGroups } from "@/api"

export default {
    data() {
        return {
            qrCode: "",
            txt: ""
        }
    },
    created() {
        getGroups().then(data => {
            this.qrCode = data[0].wxQrcodeUrl
        })
    }
}
</script>


<style lang="scss" scoped>
.join-group{
    padding-top: 30rpx; line-height: 50rpx;
    .img-box{
        width: 400rpx; display:block; margin: 20rpx auto;
    }
}
</style>

