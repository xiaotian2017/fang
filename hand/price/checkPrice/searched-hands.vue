<template>
    <view class="searched-handlist" :class="{isHidden:!query}">
        <view class="hand-list" v-for="(item, i) in arr" :key="i" @tap="toHandDetail(item)">
            <view class="row1">楼盘名称：{{temp.name}}</view>
            <view class="row2" :class="{good:temp.isGood}">{{temp.blockName}}</view>
            <view class="row3">对口中学：{{temp.school}}</view>
            <view class="row4">成交均价：
                {{isVip?temp.dealPrice:"****"}}
                &nbsp;&nbsp;挂牌均价
                {{isVip?temp.showPrice:'****'}}</view>
        </view>
    </view>
</template>

<script>
import { User_Info } from "@/api/storage"

export default {
    props: {
        query: {
            
        },
        temp: {
            default: () => {
                return {
                    name: '某某楼盘',
                    showPrice: '53212元/m²',
                    dealPrice: '53212元/m²',
                    blockName: '某某优质学区',
                    school: '希望中学',
                    isGood: true,
                }
            }
        }
    },
    data() {
        return {
            arr: [0,0,0,0],
            isVip: User_Info.isVip
        }
    },
    methods: {
        toHandDetail(item) {
            uni.navigateTo({
                url: '/hand/detail/detail'
            })
        }
    },
    watch: {
        query: {
            immediate: true,
            handler(val) {
                console.log(val)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.searched-handlist{
    padding: 20rpx $gap 30rpx; position: fixed; top:100rpx; width: 100%; height: 100%;
    background: #fff;
    &.isHidden{
        display: none;
    }
    .hand-list{
        font-size: 26rpx; line-height: 40rpx; padding: 20rpx 0; border-bottom: 1px solid #eee; 
        .row1, .row2{
            font-weight: bold; font-size: 30rpx; margin: 10rpx 0;
            &.good{
                color: $theme;
            }
        }
    }
}
</style>


