<template>
    <view class="find-house">
        <filter-box v-model="filterVisible" @getFilterParmas="getFilterParmas" />

        <wrap v-if="!filterVisible">
			<house-list  v-for="(item,i) in dataList" :key="i" :house=item  />
		</wrap>
    </view>
</template>

<script>
import FilterBox from "./findHouse/filter-box"
import ListMixins from "common/js/listMixins"
import { getHouseList } from "@/api"
import HouseList from "@/comps/list/house-list.vue"

export default {
    data() {
        return {
            filterVisible: true,
            listApi: getHouseList
        }
    },
    mixins: [ListMixins],
    methods: {
        getFilterParmas(params) {
            this.pageNum = 1
            this.addParams = {
                pageType: this.pageType,
                ...params
            }
			this._getList()
		}
    },
    onLoad() {
        this.pageType = 1
        this.addParams = {
            pageType: this.pageType,
        }
        
		this._getList()
    },
    components: {
        FilterBox, HouseList
    }
}
</script>

<style lang="scss" scoped>

</style>

