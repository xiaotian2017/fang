<template>
	<view class="img-swiper" v-show="isShow"  @tap="onMask">
        <view class="sum">{{currentIndex+1}}/{{listes.length}}</view>
		<swiper class="swiper-con"  :current="currentIndex"  :duration=10 @change=changeItem>
			<swiper-item v-for="(item, i) in listes" :key="i" class="swiper-item">
				<image class="abs" @tap.stop :src="item.src" mode="widthFix" />
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
export default {
    props: {
    },
    data() {
        return {
            currentIndex: 0,
            isShow: false,
            listes: [
                { src: '../../../static/list/product1.jpg' },
                { src: '../../../static/list/adv.png' },
                { src: '../../../static/list/product2.png' },
				{ src: '../../../static/list/adv.png' },
				{ src: '../../../static/list/product2.png' },
				{ src: '../../../static/list/product1.jpg' },
            ]
        }
    },
    methods: {
        changeItem(e) {
            this.currentIndex = e.detail.current
        },
        init({listes, current}){
            //this.listes = listes
            this.currentIndex = current
            this.isShow = true
        },
        onMask() {
            this.isShow = false
        }
    },
    computed: {

    },
    watch: {
        current:{
            immediate: true,
            handler(val) {
                this.currentIndex = parseInt(val)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.img-swiper{
    height: 100vh; background: rgba(0,0,0,0.4); position:fixed; top:0;left:0;width:100%;height:100%;
    .swiper-con{
        position: relative;  height: calc(100vh - 60rpx); top: 60rpx;
        .swiper-item{
            position: relative;
            image{
                width: 100%;
            }
        }
    }
    .sum{
        position:absolute; top: 30rpx; color: #fff; width: 100%; text-align:center;
    }
}
</style>

