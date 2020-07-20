<template>
    <view class="filter-box" :class="{open: showDropbox}">
        <view class="mask" @touchstart="showDropbox=false"></view>

        <view class="filter-tab" >
            <view class="tit" v-for="(tit, i) in tabData" :key="i" :class="{active: i==titIndex}" @touchstart="tabClick(tit, i)" >
                {{tit.txt}}
                <uni-icons class="icon" color="#666" size="14" type="arrowdown" />
            </view>
        </view>

        <view class="filter-con" v-if="showDropbox">
            <view class="tab-con">
                <view class="row-first">
                    <div class="first-item" 
                        v-for="(first, oi) in firstOpts" 
                        :class="{active: oi==firstIndex}"
                        @click="onFItemClick(first, oi, 'first')" 
                        :key="oi">
                        {{first.txt}}
                    </div>
                </view>
                <view class="row-second">
                    <div class="second-item" 
                        v-for="(second, si) in secondOpts" 
                        :class="{active: si==secondIndex}"
                        @click="onFItemClick(second, si, 'second')"  
                        :key="si">
                        {{second.txt}}
                    </div>
                </view>
                <view class="row-third" v-if="thirdOpts.length>0">
                    <checkbox-group @change="checkSubway">
                        <div class="third-item" 
                            v-for="(third, si) in thirdOpts" 
                            :class="{active: si==thirdIndex}" 
                            @click="onFItemClick(third, si, 'third')"  
                            :key="si">
                            {{third.txt}}
                            <checkbox class="fr"  value="cb" />
                        </div>
                    </checkbox-group>
                </view>
            </view>
            <view class="tab-btn">
                <button class="reset mbtn">重置</button>
                <button class="confirm mbtn">确定</button>
            </view>
        </view>

        
    </view>
</template>

<script>
export default {
    data() {
		return {
			titIndex: 0,
			firstIndex: 0,
			secondIndex: 0,
			thirdIndex: 0,
			showDropbox: false,
			tabData: [
				{ key: 'area', txt: '区域' },
				{ key: 'price', txt: '价格' },
				{ key: 'layout', txt: '户型' },
				{ key: 'more', txt: '更多' }
			],
			area: [
				{ txt: '城区', isChecked: true, options: [
					{ txt: '不限' },
					{ txt: '上城区' },
					{ txt: '下城区' },
				] },
				{ txt: '地铁', options: [
					{ txt: '不限' },
					{ txt: '1号线', options: [
						{ txt: '机场东', },
						{ txt: '固戍', }
					] },
					{ txt: '2号线' ,  options: [
						{ txt: '蛇口', },
						{ txt: '南山', }
					] },
				] }
			],
			price: [
				//加上输入的
				{ txt: '总价', options: [
					{ txt: '价格不限' },
				] },
			],
			layout: [
				{ txt: '房屋户型', options: [
					{ txt: '一室' },
					{ txt: '二室' },
					{ txt: '三室' },
				] }
			],
			more: [
				{ txt: '面积', options: [
					{ txt: '50㎡以下' },
					{ txt: '50㎡-70㎡' },
					{ txt: '70㎡-90㎡' },
				] },
				{ txt: '类型', options: [
					{ txt: '住宅' },
					{ txt: '商业' },
					{ txt: '别墅' },
				] },
				{ txt: '装修', options: [
					{ txt: '毛坯' },
					{ txt: '精装' }
				] }
			],
			order: [
				{ txt: '默认排序' },
				{ txt: '浏览量由高到低' },
				{ txt: '评论量由高到低' }
			]
		}
	},
	methods: {
		checkSubway(val) {
			console.log(val)
		},
		onFItemClick(item, i, type) {
			let fnMap = {
				first: () => {
					this.firstIndex = i
				},
				second: () => {
					this.secondIndex = i
				},
				third: () => {
					this.thirdIndex = i
				}
			}
			fnMap[type] && fnMap[type]()
		},
		tabClick(tit, index) {
            this.showDropbox = true
			this.titIndex = index
		}
	},
	computed: {
		firstOpts() {
			return this[this.tabData[this.titIndex].key]
		},
		secondOpts() {
			return this.firstOpts[this.firstIndex].options
		},
		thirdOpts() {
			let temp = this.secondOpts[this.secondIndex]
			return temp&&temp.options || []
		},
		hasThird() {
			return this.thirdOpts.length > 0
		}
	},
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
				width: 320rpx;
				checkbox{
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
</style>>
