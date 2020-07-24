<template>
   <view class="filter-tab-con" :class="{find: find}">
        <view class="more-type" v-for="(first, oi) in otherData" :key="oi">
            <view class="title">{{first.name}}</view>
            <view class="list-con">
                <view   class="list" 
                        v-for="(second, si) in first.options" 
                        :key="si" 
                        :class="{active:si == active[oi]}" 
                        @tap="onItemTap(second,oi, si, first.key)">
                        {{second.name}}
                </view>
            </view>
        </view>
   </view>
</template>

<script>

let DEF = {
    0: -1,
                1: -1,
                2: -1,
                3: -1,
                4: -1,
                5: -1,
                6: -1,
                7: -1,
                8: -1,
                9: -1,
                10: -1,
                11: -1,
                12: -1,
                13: -1,
                14: -1,
                15: -1,
                16: -1,
                17: -1,18: -1,
}
export default {
    props: {
        otherData:{},
        value: {},
        find: {}
    },
    data() {
        return {
            myModel: {},
            active: {
                ...DEF
            }
        }
    },
    methods: {
        onItemTap(item, findex, index, key) {
            if(this.active[findex] != index) {
                this.active[findex] = index
                this.myModel[key] = item.value
                this.txtName = item.value
            }else{
                this.active[findex] = null

                this.myModel[key] = ""
            }
        },
        _onItemTap(item,fIndex, index, key) {
            let activeObj = this.active[fIndex]
            let flag = !activeObj[index]

            activeObj[index] = flag
            
            let curVal = this.myModel[key]

            if(flag) {
                if(curVal) {
                    this.myModel[key] = this.myModel[key]+','+item.value

                    this.txtName = this.txtName+',' + item.name
                }else{
                    this.myModel[key] = item.value
                    this.txtName = item.name
                }
            }else{
                curVal = curVal.split(',')
                let txtName = this.txtName.spilt(',')

                curVal.find((val,i) => {
                    let flag = item.value == val
                    if(flag) {
                        curVal.splice(i, 1)
                        txtName.splice(i, 1)
                    }
                    return flag
                })

                this.myModel[key] = curVal.join(',')
                this.txtName = txtName.join(',')
            }
        },
        getModel() {
            let { unitPrice } = this.myModel,
                params = { ...this.myModel }

            if(unitPrice) {
                let { minPrice, maxPrice } = unitPrice
                if(minPrice) params.minPrice = minPrice
                if(maxPrice) params.maxPrice = maxPrice

                delete params.unitPrice
            }
            
            return {
                params,
                txtName: this.txtName
            }
        },
        reset() {
            this.txtName = ""
            this.myModel = {}
            this.active = { ...DEF }
        }
    },
    computed: {
        activeObj() {
            return (oi, si) => {
                let flag = this[`active_${oi}`][si]
                return flag
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.filter-tab-con{
    height: 600rpx;
    &.find{
       height: auto; padding-bottom: 160rpx;
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
</style>

