<template>
	<view class="search-box">
		<uni-icons class="search-icon" color="#999999" size="18" type="search" />
		<input class="search-input uni-input" confirm-type="search" />
		<view class="map-con">
			<uni-icons class="address-icon" color="#1296db" size="16" type="location-filled" />
			地图找房
		</view>
	</view>
</template>

<script>
import uniIcons from "@/components/uni-icons/uni-icons.vue";
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {

		},
		methods: {
			search(val) {
				console.log(val)
			}
		},
		components: {
			uniIcons	
		}
	}
</script>

<style lang="scss">
$bColor: #ddd;
$hei: 70rpx;
$top: 30rpx;

.search-box{
	height:$hei; position:relative; margin-top: $top; border-radius: 4rpx; box-shadow: 0 0 6rpx 0 rgba(0,0,0,.2);
	.search-box{
		line-height: $hei;
	}
	.search-icon{
		position: absolute; left:20rpx; @include top-center;
	}
	.search-input{
		padding: 15rpx 0 10px 60rpx; 
	}
	.map-con{
		position: absolute; z-index:1; right: 0; width: 180rpx; font-size:26rpx; top:0; color: #1296db; line-height: $hei; letter-spacing: 2rpx; font-weight: 300; text-align: center;
		&::before{
			content: ""; width:1px; height: 30rpx; background: #ccc; position: absolute; top: 0; left:0; bottom:0; margin: auto 0;
		}
	}
}
</style>
