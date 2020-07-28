<template>
    <!--二手房查价-->
    <view class="check-price">
        <wrap>
            <check-top @searchHandList="searchHandList" />
            <!-- <chart /> -->
            <nav-part />
        </wrap>
        
        <view class="hl10"></view>
        <wrap>
            <real-quote />
        </wrap>

        <view class="hl10"></view>
        <wrap>
            <lasted-hands />
        </wrap>

        <searched-hands :query="query" />
    </view>
</template>

<script>
import Chart from "./checkPrice/chart"
import NavPart from "./checkPrice/nav-part"
import RealQuote from "./checkPrice/real-quote"
import LastedHands from "./checkPrice/lasted-hands"
import SearchedHands from "./checkPrice/searched-hands"
import CheckTop from "./checkPrice/check-top"

export default {
	data() {
		return {
            query: ''
		}
	},
	methods: {
        searchHandList(query) {
            this.query=query
        }
	},
    mounted() {
		
    },
    components: {
       Chart, NavPart, RealQuote, LastedHands, CheckTop, SearchedHands
    }
}
</script>

<style lang="scss" scoped>

</style>
<style lang="scss">
.hand-title{
    font-size: 34rpx; color: $theme; font-weight: bold; margin: 20rpx 0;
}
</style>


