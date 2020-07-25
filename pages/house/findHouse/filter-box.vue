<template>
    <view class="filter-box" :class="{open: showDropbox}">
        <wrap>
			<top-search :searchKey=searchKey class="mt20" />
            <view class="title">
                条件筛选<view class="fr" @tap="showDropbox=!showDropbox">{{showDropbox?'关闭':'展开'}}</view>
            </view>
		</wrap>

        <view class="filter-con" :class="{hidden:!showDropbox}" >
            <view class="gap">
                <banner type='adv' :list=bannerList />
            </view>

            <filter-more  class=“filter-con-wrap” ref="filter" find="find" :otherData=filterData />

            <view class="tab-btn">
                <button class="reset mbtn" @tap="reset">重置</button>
                <button class="confirm mbtn" @tap="confirm">确定</button>
            </view>
        </view>
    </view>
</template>

<script>
import FilterMore from "../house/filter/filter-more"
import { getAreaList } from "@/api"
import TopSearch from "@/comps/top-search"
import Banner from "@/comps/banner"

export default {
	props: {
		value: {}
	},
    data() {
		return {
			titIndex: -1,
			showDropbox: true,
			stationOpts: [],
            filterData: [],
            bannerList: [],
            searchKey: ""
		}
	},
	methods: {
        getAdv() {
			this.$ADV_API.getList('hot').then(data => {
				this.bannerList = data.adverts
				this.searchKey = data.serachbar.projectName
			})
		},
		confirm() {
            let model = this.$refs.filter.getModel();
			this.$emit('getFilterParmas', model.params )
			this.showDropbox = false
		},
		reset() {
			this.$refs.filter.reset()
		},
		tabClick(tit, index) {
            this.showDropbox = true
			this.titIndex = index
		},
		_initData() {
            this.cityAreaOpts = [
                { name: '上城区', value: 1 }
            ]
            getAreaList({parentId: 2}).then(data => {
				this.cityAreaOpts.push(...data)
			})
			this.filterData = [
                 {
                    name: '区域', key: 'district',
                    options: this.cityAreaOpts
                },
                {
                    name: '总价', key: 'minTotalPrice',
                    options: [
                        { name: '100万', value: 100 },
                        { name: '200万', value: 200 },
                        { name: '300万', value: 300 },
                        { name: '400万', value: 400 },
                        { name: '500万', value: 500 },
                        { name: '800万', value: 800 },
                        { name: '1000万', value: 1000 },
                    ]
                },
                {
                    name: '单价', key: 'unitPrice',
                    options: [
                        { name: '1万以下', value: { minPrice:1 } },
                        { name: '1-2万', value: { minPrice:1, maxPrice: 2} },
                        { name: '2-3万', value: { minPrice:2, maxPrice: 3 } },
                        { name: '3-4万', value: { minPrice:3, maxPrice:4 } },
                        { name: '4-5万', value: { minPrice:4, maxPrice:5 } },
                        { name: '5万以上', value: { maxPrice:1 } },
                    ]
                },
                {
                    name: '面积', key: 'projectAreaType',
                    options: [
                        { name: '50以下', value: 0 },
                        { name: '50-70', value: 1 },
                        { name: '70-90', value: 2 },
                        { name: '90-110', value: 3 },
                        { name: '110-130', value: 4 },
                        { name: '130-150', value: 5 },
                        { name: '150以上', value: 6 },
                    ]
                },
                { name: '房屋户型',key: 'houseType', options: [
                        { name: '一室', value: 1 },
                        { name: '二室', value: 2  },
                        { name: '三室', value: 3 },
                        { name: '四室', value: 4 },
                        { name: '四室以上', value: 5  },
                ] }
            ]
		}
	},
	created() {
        this._initData()
        this.getAdv()
	},
	watch: {
		value: {
			immediate: true,
			handler(flag) {
				this.showDropbox = flag
			}
		},
		showDropbox(flag) {
			this.$emit('input', flag)

			if(!flag) {
				this.titIndex = -1
			}
		}
	},
	components: {
		FilterMore, TopSearch, Banner
	}
}
</script>

<style lang="scss" scoped>
.filter-box{
   position:relative; width: 100%; font-size: $font; background: #fff;
    &.open{
        min-height: 100vh; z-index:10;
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
		display: flex; padding: $gap; position: fixed; width: 100%; bottom: 0;
		@include gray-shadow;background: #fff; box-sizing: border-box;
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

.filter-con{
    &.hidden{
        display: none;
    }
    
    
}


</style>
