<template>
   <view class="filter-tab-con">
        <view class="row-first">
            <div class="first-item list-item" 
                v-for="(first, oi) in priceData" 
                :class="{active: oi==firstIndex}"
                @click="onFItemClick(first, oi, 'first')" 
                :key="oi">
                {{first.name}}
            </div>
        </view>

        <view class="row-second">
            <view class="second-item list-item" 
                v-for="(second, si) in secondOpts" 
                :class="{active: si==secondIndex}"
                @click="onFItemClick(second, si, 'second')"  
                :key="si">
                {{second.name}}
            </view>

            <view class="area-box">
                <input v-model="minPrice"  class="min-area area-input" />
                    -
                <input v-model="maxPrice"  class="max-area area-input" />
            </view>
        </view>
   </view>
</template>

<script>
export default {
    data() {
        return {
            priceData: [],
            firstIndex: 0,
            secondIndex: 0,
            minPrice: "",
            maxPrice: ""
        }
    },
    methods: {
        getModel() {
            let ret = {},
                txtName = "不限"
            if(this.minPrice > 0 || this.minPrice === 0) {
                ret.minPrice = this.minPrice
                txtName = ret.minPrice
            }
            if(this.maxPrice > 0) {
                ret.maxPrice = this.maxPrice
                txtName = ret.maxPrice
            }
            if(this.minPrice > 0 && this.maxPrice > 0) {
                txtName = ret.maxPrice+'-'+ret.minPrice
            }
            return {
                params: ret,
                txtName
            }
        },
        onFItemClick( item, index, type) {
            if(type == "first") {
                this.firstIndex = index
            }else{
                this.secondIndex = index
            }
        },
        reset() {
            this.minPrice = ""
            this.maxPrice = ""
        }
    },
    computed: {
        secondOpts() {
			let sec = this.priceData[this.firstIndex]
			return sec && sec.options
        },
        
        isInputedPrice() {
            return this.minPrice || this.maxPrice
        }
    },
    watch: {
        isInputedPrice(val) {
            this.secondIndex = val ? 1 : 0
        }
    },
    created() {
        this.priceData = [
            { name: '总价', options: [ { name: '价格不限' }] },
        ]
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

.area-box{
	margin-top: 30rpx; 
	.area-input{
		display: inline-block; width: 200rpx; background: #eee; height: 70rpx; vertical-align: middle;
	}
}
</style>