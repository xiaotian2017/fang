<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
/*每个页面公共css */
@import './common/css/common.scss';

.layer{
	padding: 0 $gap; font-size: 28rpx; background: #f6f8fa; min-height: 100vh;
}

</style>
