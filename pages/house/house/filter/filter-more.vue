<template>
   <view class="filter-tab-con">
        <view class="more-type" v-for="(first, oi) in otherData" :key="oi">
            <view class="title">{{first.name}}</view>
            <view class="list-con">
                <view   class="list" 
                        v-for="(second, si) in first.options" 
                        :key="si" 
                        :class="{active:active[oi][si]}" 
                        @tap="onItemTap(second,oi, si, first.key)">
                        {{second.name}}
                </view>
            </view>
        </view>
   </view>
</template>

<script>
export default {
    props: {
        otherData:{},
        value: {}
    },
    data() {
        return {
            myModel: {},

            active: {
                0: { 0: null, 1: null, 2: null, 3:null, 4:null },
                1: { 0: null, 1: null, 2: null, 3:null, 4:null },
            }
        }
    },
    methods: {
        onItemTap(item,fIndex, index, key) {
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
            return {
                params: {
                    ...this.myModel
                },
                txtName: this.txtName
            }
        },
        reset() {
            this.txtName = ""
            this.myModel = {}
            this.active = {
                0: { 0: null, 1: null, 2: null, 3:null, 4:null },
                1: { 0: null, 1: null, 2: null, 3:null, 4:null },
            }
        }
    },
    computed: {
        activeObj() {
            return (oi, si) => {
                let flag = this[`active_${oi}`][si]
                console.log(flag)
                return flag
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.filter-tab-con{
    height: 600rpx; 
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

