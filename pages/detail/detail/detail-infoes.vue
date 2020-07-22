<template>
    <view class="detail-info">
        <view class="detail-tit">楼盘详细信息</view>
        <view class="item" v-for="(item, i) in infoes" :key="i">
            <text>{{item.label}}</text>{{item.val}}
        </view>
    </view>
</template>

<script>
import { mapGetters } from "vuex"

const DETAIL_MAP = {
    address: '楼盘详情区域：',
    deliveryTime: '显示交房时间：',
    propertyCompany: '物业公司：',
    propertyPrice: '物业费用：',
    decorateStatus: '装修状态：',
    buildingArea: '建筑面积：',
    floorAreaRate: '容积率：',
    parkingUnitPercent: '车位比：',
    houseNum: '总户数：'
}
export default {
    computed: {
        ...mapGetters('sDetail',['houseInfo']),
        infoes() {
            let ret = [
                { label: '楼盘详情区域：', val: '开发区' },
				{ label: '显示交房时间：', val: '2020' },
				{ label: '物业类型：', val: '某某物业' },
				{ label: '建筑类别：', val: '高层' },
				{ label: '装修情况：', val: '精装' },
				{ label: '建筑层高：', val: '30' },
				{ label: '车位比：', val: '1:1.1' },
				{ label: '物业公司：', val: '某某公司' },
				{ label: '物业费用：', val: '1.8/m2' },
				{ label: '总户数：', val: '100' },
            ]

            ret = []
            for(let key in DETAIL_MAP) {
                ret.push({ label: DETAIL_MAP[key], val: this.houseInfo[key] })
            }
            return ret
        }
	},
}
</script>

<style lang="scss" scoped>
.detail-info{
	padding: 0 $gap 20rpx; font-size: 30rpx; color: #333;
	.item{
		margin-bottom: 10rpx; line-height: 50rpx; 
		text{
			display: inline-block; width: 250rpx; margin-right: 20rpx; color: #666; text-align: right;
		}
	}
}
</style>