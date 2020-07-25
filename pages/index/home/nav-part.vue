<template>
    <view class="nav-list clearfix">
        <!--这里找四个icon-->
        <view class="n-list" v-for="(nav,ni) in navList" :key="ni" @tap="toHouseList(nav)">
            <uni-icons v-if="nav.icon" class="icon" color="#1296db" size="26" :type="nav.icon" />
            <view v-else class="number" :style="{background: nav.color}">{{nav.number}}</view>
            <view class="tit">{{nav.name}}</view>
        </view>
    </view>
</template>

<script>
    
export default {
    data() {
        return {
            navList: [
                { name:'热门楼盘', number: '90', color: "#f34949", type: 'hot' },
                { name:'即将开盘', number: '80', color: "#495df3d1", type: 'opening'},
                { name:'正在公示', number: '23', color: "#19be6b", type: 'showing'},
                { name:'正在登记', number: '36', color: '#beb219' , type: 'checking'},

                { name:'摇号查询', icon: 'contact', type: 'swingSearch' },
                { name:'二手房查价', icon: 'contact' , path: '/hand/price/checkPrice'},
                { name:'不限购房产', icon: 'contact' , type: 'unlimitedPurchase'},
                
                { name:'乐米文章', icon: 'contact' },
                { name:'乐米家居', icon: 'contact' },
                { name:'乐米金融', icon: 'contact' },
                { name:'乐米生活', icon: 'contact' },
                { name:'我要加群', icon: 'contact' },
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
	margin-top: 40rpx;
	.n-list{
		width: 25%; float:left;  text-align: center; margin: 12rpx 0;
		.icons{
			font-size: 20rpx;
		}
		.number{
			width: 100rpx; height: 100rpx; line-height: 100rpx; border-radius: 100%;  display: inline-block; 
			font-size: 40rpx; color: #fff; font-weight: 500;
		}
		.tit{
			margin-top: 10rpx;
		}
	}
}
</style>


