<template>
    <checkbox-group @change="checkSubway">
        <label class="third-item" 
            v-for="item in options" 
            @tap="onItemTap(item)"  
            :key="item.name">
            {{item.name}}
            <checkbox :value="item.name" class="fr" />
        </label>
    </checkbox-group>
</template>

<script>
export default {
    props: {
        options: {}
    },
    data() {
        return {

        }
    },
    methods: {
        checkSubway(e) {
			this.$emit('changedVal', e.detail.value)
        },
        onItemTap() {

        }
    }
}
</script>

<style lang="scss" scoped>
.third-item{
    display: block; height: 70rpx; line-height: 70rpx;
}
</style>
