<template>
    <view class="filter-box" :class="{open: showDropbox}">
        <view class="mask" @touchstart="showDropbox=false"></view>

        <view class="filter-tab" >
            <view class="tit" v-for="(tit, i) in tabData" :key="i" :class="{active: i==titIndex}" @tap="tabClick(tit, i)" >
                {{tit.name}}
                <uni-icons class="icon" color="#666" size="14" type="arrowdown" />
            </view>
        </view>

        <view class="filter-con" v-if="showDropbox" >
            <filter-area  class=“filter-con-wrap”  :class="{hidden:titIndex!=0}" ref="filterArea" />
            <filter-price class=“filter-con-wrap”  :class="{hidden:titIndex!=1}" ref="filterArea" />
            <filter-more  class=“filter-con-wrap”  :class="{hidden:titIndex!=2}" ref="filterLayout" :otherData=otherData />
            <filter-more  class=“filter-con-wrap”  :class="{hidden:titIndex!=3}" ref="filterMore" :otherData=otherData />

            <view class="tab-btn">
                <button class="reset mbtn" @tap="reset">重置</button>
                <button class="confirm mbtn" @tap="confirm">确定</button>
            </view>
        </view>

        
    </view>
</template>

<script>
import { getAreaList } from "@/api"
import FilterArea from "./filter/filter-area"
import FilterPrice from "./filter/filter-price"
import FilterMore from "./filter/filter-more"

export default {
    data() {
		return {
			titIndex: 0,
			showDropbox: true,
			tabData: [
				{ key: 'area', name: '区域', },
				{ key: 'price', name: '价格', },
				{ key: 'layout', name: '户型'},
				{ key: 'more', name: '更多' }
			],
			stationOpts: [],
			otherModel: {
                houseType: null,
                type: null,
                decorateStatus: null
            }
		}
	},
	methods: {
		confirm() {
            this.areaModel = this.$refs.filterArea.getModel()

            console.log(this.otherModel)
		},
		reset() {

		},
		tabClick(tit, index) {
            this.showDropbox = true
			this.titIndex = index
		},
		_initData() {
			
			
		}
	},
	watch: {
		titIndex(newVal, oldVal) {
			this.storageStatus[oldVal] = this.firstIndex

			let existFindex = this.storageStatus[newVal]

			console.log(existFindex)
			if(existFindex) {
				this.firstIndex = existFindex
			}else{
				this.firstIndex = 0
			}
			
		}
	},
	computed: {
		isMoreType() {
			return this.titIndex > 1
        },
        otherData() {
            if(this.titIndex == 2) {
                return [
                    { name: '房屋户型',key: 'houseType', options: [
                        { name: '一室', value: 0 },
                        { name: '二室', value: 1  },
                        { name: '三室', value: 2 },
                        { name: '四室', value: 3 },
                        { name: '四室以上', value: 4  },
                    ] }
                ]
            }
            if(this.titIndex == 3) {
                return [
                    { name: '类型', key: 'type', options: [
                        { name: '住宅', value: 0 },
                        { name: '公寓', value: 1 },
                        { name: '别墅', value: 2 },
                        { name: '商业', value: 3},
                    ] },
                    { name: '装修', key: 'decorateStatus', options: [
                        { name: '毛坯', value: 0 },
                        { name: '精装', value: 1}
                    ] }
                ]
            }
        }
	},
	created() {
		this._initData()

		this.storageStatus = {}
	},
	components: {
		FilterArea, FilterPrice, FilterMore
	}
}
</script>

<style lang="scss" >
.filter-box{
   position:relative; width: 100%;  font-size: $font;
    &.open{
        height: 100vh; position:fixed; top: 100rpx; z-index:10;
    }
	.filter-tab{
		display: flex; align-items: center; justify-content: center; text-align:center;
		background: #fff; position: relative; border-bottom: 1px solid $border;
		.tit{
			flex:1; height: 80rpx; line-height: 80rpx;
		}
	}
	.filter-con{
		background: $bg; position: relative;
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

.filter-con-wrap.hidden{
    display: none !important;
}

</style>>
