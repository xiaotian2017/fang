<template>
    <view class="article-comment gap">
        <view class="detail-tit">
            乐米评盘
        </view>
        <view class="list-con">
            <article-list type="time" v-for="(item, i) in articleList" :key="i" :listdata=item />
        </view>
    </view>
</template>

<script>
import ArticleList from "@/comps/list/article-list"
import { getLmppList } from "@/api"
import { mapState } from "vuex"

export default {
    data() {
        return {
            articleList: []
        }
    },
    created() {
        getLmppList({
            pageNum:1,
            pageSize:10,
            projectId: this.projectId
        }).then(data => {
            this.articleList = data.record
        })
    },
    computed: {
        ...mapState('sDetail', ['projectId']),
    },
    components: {
        ArticleList
    }
}
</script>

