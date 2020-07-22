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
            <view class="tab-con" :class="{more: isMoreType}">
				<template v-if="!isMoreType">

					<view class="row-first">
						<div class="first-item" 
							v-for="(first, oi) in firstOpts" 
							:class="{active: oi==firstIndex}"
							@click="onFItemClick(first, oi, 'first')" 
							:key="oi">
							{{first.name}}
						</div>
					</view>

					<view class="row-second">
						<template v-if="titIndex==0">
							<filter-check-box v-if="firstIndex==0" :options=secondOpts @changedVal="getCityAreaVal" />	

							<view v-else class="second-item" 
								v-for="(second, si) in secondOpts" 
								:class="{active: si==secondIndex}"
								@click="onFItemClick(second, si, 'second')"  
								:key="si">
								{{second.name}}
							</view>
						</template>
						

						<view v-if="titIndex==1" class="area-box">
							<input v-model="minArea"  class="min-area area-input" />
							 -
							<input v-model="maxArea"  class="max-area area-input" />
						</view>

					</view>
					<view class="row-third" v-if="thirdOpts.length>0">
						<filter-check-box :options=thirdOpts />
					</view>
				</template>
				<template v-else>
					<view class="more-type" v-for="(first, oi) in firstOpts" :key="oi">
						<view class="title">{{first.name}}</view>
						<view class="list-con">
							<view class="list" v-for="(second, si) in first.options" :key="si">{{second.name}}</view>
						</view>
					</view>
				</template>
            </view>
            <view class="tab-btn">
                <button class="reset mbtn" @tap="reset">重置</button>
                <button class="confirm mbtn" @tap="confirm">确定</button>
            </view>
        </view>

        
    </view>
</template>

<script>
import { getAreaList, getTrafficRoutes,getTrafficStations } from "@/api"
// import { filterCheckBox } from "./filter-checkbox"

export default {
    data() {
		return {
			titIndex: 0,
			showDropbox: true,
			firstIndex:0,
			secondIndex: 0,
			areaIndex: 0,
			stationIndex: 0,
			priceIndex:0,
			tabData: [
				{ key: 'area', name: '区域', },
				{ key: 'price', name: '价格', },
				{ key: 'layout', name: '户型'},
				{ key: 'more', name: '更多' }
			],
			area: [],
			price: [
				//加上输入的
				{ name: '总价', options: [
					{ name: '价格不限' },
				] },
			],
			layout: [
				{ name: '房屋户型', options: [
					{ name: '一室' },
					{ name: '二室' },
					{ name: '三室' },
					{ name: '四室' },
					{ name: '四室以上' },
				] }
			],
			more: [
				{ name: '类型', options: [
					{ name: '住宅' },
					{ name: '商业' },
					{ name: '别墅' },
				] },
				{ name: '装修', options: [
					{ name: '毛坯' },
					{ name: '精装' }
				] }
			],
			order: [
				{ name: '默认排序' },
				{ name: '浏览量由高到低' },
				{ name: '评论量由高到低' }
			],
			stationOpts: [],
			formModel: {
				cityAreas: [],
				station: []
			}
		}
	},
	methods: {
		confirm() {

		},
		reset() {

		},
		getCityAreaVal(val) {
			this.formModel.cityAreas = val
		},
		onFItemClick(item, i, type) {
			let fnMap = {
				first: () => {
					this.firstIndex = i
				},
				second: () => {
					this.secondIndex = i

					if(this.firstIndex == 1) {
						if(this.thirdOpts.length == 0 && this.secondVal.type!="nolimit") {
							getTrafficStations({route: this.secondVal.name}).then(data => {
								this.thirdOpts = data.map(item => ({name: item}))
								this.thirdOpts.unshift({name: '不限'})
							})
						}
					}
				}
			}
			fnMap[type] && fnMap[type]()
		},
		tabClick(tit, index) {
            this.showDropbox = true
			this.titIndex = index
		},
		getCityArea() {
			getAreaList({parentId: 2}).then(data => {
				this.cityAreaOpts.push(...data)
			})
			getTrafficRoutes().then(data => {
				data.map(route => {
					this.stationOpts.push({ name: route })
				})
				
			})
			
		},
		_initData() {
			this.cityAreaOpts = [
				{ name: '不限' },
			]
			this.stationOpts = [
				{ name: '不限', type: 'nolimt'}
			]
			this.area = [
				{ name: '城区', isChecked: true, options: this.cityAreaOpts},
				{ name: '地铁', options: this.stationOpts }
			]
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
		firstOpts() {
			return this[this.tabData[this.titIndex].key]
		},
		secondOpts() {
			let sec = this.firstOpts[this.firstIndex]
			return sec && sec.options
		},
		thirdOpts:{
			set(val) {
				this.$set(this.stationOpts[this.secondIndex], 'options', val)
			},
			get() {
				if(this.secondOpts && this.secondOpts.length > 0) {
					let temp = this.secondOpts[this.secondIndex]
					return temp&&temp.options || []
				}
				return []
			}
		},
		hasThird() {
			return this.thirdOpts.length > 0
		},
		secondVal() {
			return this.secondOpts[this.secondIndex]
		},
		isMoreType() {
			return this.titIndex > 1
		}
	},
	created() {
		this._initData()
		this.getCityArea()

		this.storageStatus = {}
	},
	components: {
		//filterCheckBox
	}
}
</script>

<style lang="scss" scoped>
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
		.tab-con{
			height: 600rpx; display: flex;
			&.more{
				display: block;
		 	}
			.row-first{
				width: 150rpx; background: #fff;
				border-right: 1px solid $border; padding: 30rpx 0 30rpx 30rpx;
				.first-item{
					height: 80rpx; line-height: 80rpx; border-bottom: 1px solid $border; text-align:center;
				}
			}
			.row-second, .row-third{
				flex: 1; padding: 40rpx; border-right: 1px solid $border;
				.second-item,.third-item{
					height: 70rpx; line-height: 70rpx;
				}
			}
			.row-third {
				width: 230rpx; flex: auto;
				.checkbox{
					transform: scale(0.6)
				}
			}
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

.more-type {
	padding: 30rpx $gap;
	.title{
		font-weight: bold; font-size: 36rpx;
	}
	.list-con{
		.list{
			display: inline-block; padding: 10rpx 20rpx; background: #eee; color: #333; margin: 20rpx 30rpx 0 0;	
			&.active{
				color: $theme;
			} 
		}
	}
}

.area-box{
	margin-top: 30rpx; 
	.area-input{
		display: inline-block; width: 200rpx; background: #eee; height: 70rpx; vertical-align: middle;
	}
}
</style>>
