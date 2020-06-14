<template>
	<view class="layer">
		<search />
	</view>
</template>

<script>
import Search from "../../components/search"
	export default {
		data() {
			return {
				title: 'Hello world'
			}
		},
		onLoad() {

		},
		methods: {

		},
		components: {
			Search
		}
	}
</script>

<style lang="less">
@import url("../../common/less/common.less");
.layer{
	padding: 0 @gap;
}
</style>
