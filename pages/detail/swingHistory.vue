<template>
    <view class="swing-history">
        <swing-list v-for="(item, i) in dataList" :listdata=item :key="i" />
    </view>
</template>

<script>
import SwingList from "./swing/swing-list"
import { getSwingLog } from "@/api"
import listMixins from "common/js/listMixins"
import { mapState } from "vuex"

export default {
    data() {
        return {
            arr: new Array(10),
            listApi: getSwingLog
        }
    },
    mixins: [ listMixins ],
    method: {
       
    },
    computed: {
        ...mapState('sDetail', [ 'projectId' ])
    },
    onLoad(){
        this.addParams = {
            projectId: this.projectId
        }
        this._getList()
    },
    components: {
        SwingList
    }
}
</script>

<style lang="scss" scoped>
.swing-history{
    padding-top: 30rpx;
}
</style>


