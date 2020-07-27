<template>
    <view class="nav-list clearfix">
        <!--这里找四个icon-->
        <view class="n-list" v-for="(nav,ni) in navList" :key="ni" @tap="toHouseList(nav)">
            <uni-icons v-if="nav.icon" class="icon" color="#1296db" size="26" :type="nav.icon" />
            <view v-else class="number" :style="{borderColor: nav.color}">{{nav.name}}</view>
        </view>
    </view>
</template>

<script>
    
export default {
    data() {
        return {
            navList: [
                { name:'笋盘', number: '90', color: "#f34949", type: 'hot' },
                { name:'排行榜', number: '80', color: "#495df3d1", type: 'opening'},
                { name:'学区查询', number: '23', color: "#19be6b", type: 'showing'},
                { name:'优质学区', number: '36', color: '#beb219' , type: 'checking'}
            ]
        }
    },
    methods: {
        toHouseList(item) {
            let url = item.path
            if(item.type) {
                url = `/pages/house/house?type=${item.type}`
            }
            console.log(url)
            uni.navigateTo({
                url
            })
            
        },
    }
}
</script>

<style lang="scss" scoped>
.nav-list{
	margin-top: 40rpx; padding-bottom: 30rpx;
	.n-list{
		width: 25%; float:left;  text-align: center; margin: 12rpx 0;
		.icons{
			font-size: 20rpx;
		}
		.number{
			width: 120rpx; height: 80rpx; line-height: 80rpx; display: inline-block; 
            font-size: 26rpx; color: #333; font-weight: 500; 
            @include gray-shadow;
            border: 1px solid #ddd;
		}
		.tit{
			margin-top: 10rpx;
		}
	}
}
</style>


