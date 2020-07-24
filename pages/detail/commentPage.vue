<template>
    <view class="comment-page">
        <house-list :house="houseInfo" />
        <view class="hr10"></view>
        <view class="comment-con">
            <comment-list v-for="(item,i) in dataList" :key="i" :listdata=item />
        </view>

        <button class="detail-btn" @tap="toCommenting">我要评论</button>
    </view>
</template>

<script>
import CommentList from "./comment/comment-list.vue"
import HouseList from "@/comps/list/house-list"
import { mapGetters, mapState } from "vuex"
import { getCommentList, zanComment} from "@/api"
import ListMixin from "common/js/listMixins"

export default {
    data() {
        return {
            listApi: getCommentList
        }
    },
    mixins: [ ListMixin ],
    methods: {
        toCommenting() {
            uni.navigateTo({
                url: '/pages/detail/commenting'
            })
        },
    },
    computed: {
        ...mapGetters('sDetail', ['houseInfo']),
        ...mapState('sDetail', ['projectId']),
    },
    onShow() {
        this.pageNum = 1
        
        this._getList()
    },
    onLoad() {
        this.addParams = {
            projectId: 1
        }
    },
    components: {
        CommentList,HouseList
    }
}
</script>

<style lang="scss" scoped>
.comment-page{
    padding: 0 $gap;
    .comment-con{
        padding-top: 40rpx;
    }
    .detail-btn{
        position: fixed; bottom: 30rpx; width: 690rpx;
    }
}
</style>

