<template>
   <view class="filter-tab-con">
        <view class="row-first">
            <view class="first-item list-item" 
                v-for="(first, oi) in areaData" 
                :class="{active: oi==firstIndex}"
                @click="onFItemClick(first, oi, 'first')" 
                :key="oi">
                {{first.name}}
            </view>
        </view>

        <view class="row-second">
            
            <filter-check-box v-if="firstIndex==0&&isReseted" :options=secondOpts @changedVal="getCityAreaChecked" />
            <view v-else class="second-item list-item" 
                v-for="(second, si) in secondOpts" 
                :class="{active: si==secondIndex}"
                @click="onFItemClick(second, si, 'second')"  
                :key="si">
                {{second.name}}
            </view>

        </view>
        <view class="row-third" v-if="thirdOpts.length>0&&isReseted">
            <filter-check-box :options=thirdOpts @changedVal="getStationChecked" />
        </view>
   </view>
</template>

<script>
import FilterCheckBox from "./filter-checkbox"
import { getAreaList, getTrafficRoutes,getTrafficStations } from "@/api"

export default {
    data() {
        return {
            firstIndex: 0,
            secondIndex: 0,
            areaData: [],
            isReseted: true
        }
    },
    methods: {
        getCityAreaChecked(val) {
            this.cityAreaModel = val
        },
        getStationChecked(val) {
            this.stationModel = val
        },
        getModel() {
            //城区接口
            let ret = null
            if(this.firstIndex == 0) {
                let val = this.cityAreaModel && this.cityAreaModel.join(',')
                ret = {
                    params: {
                        district: val
                    },
                    txtName: val                    
                }
            }else{
                //线路-站点
                let route = this.secondObj.name,
                    subwayRoute = this.stationModel.map(item => route+'-'+item).join(',')

                ret = {
                    params: {
                        subwayRoute: subwayRoute
                    },
                    txtName: subwayRoute 
                }
            }
            return ret
        },
        onFItemClick( item, index, type) {
            if(type == "first") {
                this.firstIndex = index
            }else{
                this.secondIndex = index
                this._getStations()
            }
        },
        _getStations() {
            if(this.thirdOpts.length == 0 && this.secondObj.type!="nolimit") {
                getTrafficStations({route: this.secondObj.name}).then(data => {
                    this.thirdOpts = data.map(item => ({name: item}))
                    this.thirdOpts.unshift({name: '不限'})
                })
			}
        },
        _getCityArea() {
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
            
            this.areaData = [
				{ name: '城区', isChecked: true, options: this.cityAreaOpts},
				{ name: '地铁', options: this.stationOpts }
            ]
            
            this._getCityArea()
        },
        reset() {
            this.firstIndex = 0
            this.secondIndex = 0
            this.isReseted = false

            setTimeout(() => {
                this.isReseted = true
            }, 100)
        }
    },
    computed: {
        secondObj() {
            return this.secondOpts[this.secondIndex]
        },
        secondOpts() {
            return this.areaData[this.firstIndex].options
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
    },
    created() {
        this._initData()
    },
    components: {
        FilterCheckBox
    }
}
</script>

<style lang="scss" scoped>

.filter-tab-con{
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

.list-item.active{
    color: $theme;
}
</style>
