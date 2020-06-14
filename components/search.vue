<template>
	<view class="search-box">
		<input class="search-input" focus placeholder="九天龙" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello world'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="less">
@bColor: #ddd;
@hei: 60rpx;

.search-box{
    border: 1px solid #dddddd; height: @hei; 
    .search-input{
        line-height: @hei;
    }
}
</style>
