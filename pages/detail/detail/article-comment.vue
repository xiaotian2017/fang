<template>
    <view class="article-comment gap">
        <view class="detail-tit">
            乐米评盘
        </view>
        <view class="list-con">
            <article-list type="time" />
            <article-list type="time" />
            <article-list type="time" />
            <article-list type="time" />
        </view>
    </view>
</template>

<script>
import ArticleList from "@/comps/list/article-list"
export default {
    components: {
        ArticleList
    }
}
</script>

