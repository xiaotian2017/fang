<template>
    <view class="filter-box" :class="{open: showDropbox}">
        <view class="mask" @tap="showDropbox=false"></view>

        <view class="title">条件筛选</view>

        <view class="filter-con" :class="{hidden:!showDropbox}" >
            <filter-more  class=“filter-con-wrap” ref="filterLayout" :otherData=filterData />

            <view class="tab-btn">
                <button class="reset mbtn" @tap="reset">重置</button>
                <button class="confirm mbtn" @tap="confirm">确定</button>
            </view>
        </view>
    </view>
</template>

<script>
import FilterMore from "../house/filter/filter-more"

export default {
	props: {
		value: {}
	},
    data() {
		return {
			titIndex: -1,
			showDropbox: true,
			stationOpts: [],
			filterData: []
		}
	},
	methods: {
		confirm() {
			

			this.$emit('getFilterParmas', params)
			this.showDropbox = false
		},
		reset() {
			this.$refs.filterArea.reset()
			this.$refs.filterPrice.reset()
			this.$refs.filterLayout.reset()
			this.$refs.filterMore.reset()

			this.tabData = [
				{ key: 'area', name: '区域', },
				{ key: 'price', name: '价格', },
				{ key: 'layout', name: '户型'},
				{ key: 'more', name: '更多' }
			]
		},
		tabClick(tit, index) {
            this.showDropbox = true
			this.titIndex = index
		},
		_initData() {
			this.filterData = [
                 {
                    name: '区域',
                    options: [
                        { name: '50万', value: '0' },
                        { name: '50万', value: '0' },
                        { name: '50万', value: '0' },
                        { name: '50万', value: '0' },
                        { name: '50万', value: '0' },
                    ]
                },
                {
                    name: '总价',
                    options: [
                        { name: '50万', value: '0' },
                        { name: '50万', value: '0' },
                        { name: '50万', value: '0' },
                        { name: '50万', value: '0' },
                        { name: '50万', value: '0' },
                    ]
                },
                {
                    name: '单价',
                    options: [
                        { name: '50万', value: '0' },
                        { name: '50万', value: '0' },
                        { name: '50万', value: '0' },
                        { name: '50万', value: '0' },
                        { name: '50万', value: '0' },
                    ]
                },
                {
                    name: '面积',
                    options: [
                        { name: '50万', value: '0' },
                        { name: '50万', value: '0' },
                        { name: '50万', value: '0' },
                        { name: '50万', value: '0' },
                        { name: '50万', value: '0' },
                    ]
                },
                {
                    name: '户型',
                    options: [
                        { name: '50万', value: '0' },
                        { name: '50万', value: '0' },
                        { name: '50万', value: '0' },
                        { name: '50万', value: '0' },
                        { name: '50万', value: '0' },
                    ]
                },
                {
                    name: '户型',
                    options: [
                        { name: '50万', value: '0' },
                        { name: '50万', value: '0' },
                        { name: '50万', value: '0' },
                        { name: '50万', value: '0' },
                        { name: '50万', value: '0' },
                    ]
                }
            ]
		}
	},
	created() {
		this._initData()
	},
	watch: {
		// value: {
		// 	immediate: true,
		// 	handler(flag) {
		// 		this.showDropbox = flag
		// 	}
		// },
		// showDropbox(flag) {
		// 	this.$emit('input', flag)

		// 	if(!flag) {
		// 		this.titIndex = -1
		// 	}
		// }
	},
	components: {
		FilterMore
	}
}
</script>

<style lang="scss" >
.filter-box{
   position:relative; width: 100%;  font-size: $font;
    &.open{
        min-height: 100vh; position:fixed; z-index:10;
    }
	.title{
        height: 100rpx; line-height: 100rpx;
    }
	.filter-con{
		background: $bg; position: relative;
		&.hidden{
			display: none;
		}
	}
	.first-item, .second-item, .third-item, .tit{
		&.active{
			color: $theme;
		}
	}
	.tab-btn{
		display: flex; padding: $gap; 
		@include gray-shadow;background: #fff;
		.mbtn{
			height: 90rpx; line-height:90rpx; font-size: 34rpx;
		}
		.reset{
			width: 200rpx; display: inline-block; margin-right: $gap;
		}
		.confirm{
			flex: 1;background: $theme; color: #fff; display: inline-block; border: 0px none;
		}
    }
    .mask{
        width: 100%; height:100%; background: rgba(0,0,0,0.1);position:absolute; top:0;left:0;
    }
}

.filter-con-wrap{
    &.hidden{
        display: none;
    }
    /deep/ .filter-tab-con{
        height: 800rpx; overflow: auto; 
    }
}

</style>>
