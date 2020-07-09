<template>
    <view class="simple-table fz">
        <view class="headers">
            <view class="row">
                <view class="item pr clearfix" >
                    <view v-for="(header, index) in headers" :key="index">{{header.label}}</view>
                </view>
            </view>
        </view>
        <view class="tbody">
            <view class="row" v-for="(item, index) in datas"  :key="index">
                <view class="item pr clearfix" >
                    <view v-for="(header, keyIndex) in headers" :key="keyIndex">{{item[header.key]}}</view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    props: {
        datas: {},
        headers: {}
    }
}
</script>


<style lang="scss" scoped>
$border: 1px solid #eee;

.simple-table{
        border-left:$border;border-top:$border;
        .row{
            position:relative;height: 60rpx; line-height: 60rpx;
            .item{
                display:flex;text-align:center;height:100%;
                >view{
                    flex: 1;border-right:$border;border-bottom:$border;height:100%;padding: left 10rpx;
                }
            }
            i{
                position:absolute;font-size:14px;right: -30px;width:30px;text-align:center;top:0;color:#fff;cursor:pointer;
            }
        }
        .tbody{
           height:auto !important;
        }
    }
</style>
