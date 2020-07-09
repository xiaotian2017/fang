<template>
	<view class="consultant-list layer">
		<!--点击查看顾问详情-->
		<view class="er-item" v-for="(item,i) in arr" :key="i">
			<view class="top">
				<view class="t-l fl">
					<img-box class="avatar" mode="aspectFill" />
					<view class="txt-w">
						<view>{{temp.name}}</view>
						<view>电话{{temp.tel}}</view>
					</view>
				</view>
				<view class="ranking fr">
					NO.{{i+1}}
				</view>
				<view class="clear"></view>
			</view>
			<view class="bot">
				<view class="tel">
					<uni-icons type="phone" class="icon" />
					打电话	
				</view>
				<view>
					<uni-icons type="heart" class="icon" />
					关注
				</view> 
			</view>
		</view>
	</view>
</template>

<script>
//关注
export default {
	data() {
		return {
			arr: [0,0,0,0,0,0],
			temp: {
				avatar: '',
				name: "张恒",
				tel:"13456789876",
				building: '中大恒福',
			}
		}
	},
	methods: {
		
	}
}
</script>

<style lang="scss">
.consultant-list{
	padding-bottom: 40rpx;
	.er-item{
		padding: 30rpx 40rpx  0; border-radius: 10rpx; margin-bottom: 35rpx; background: #fff;
		box-shadow: 0 0 10rpx 10rpx rgba(0,0,0,0.05);
		.top{
			border-bottom: 1px solid $border; padding-bottom: 20rpx;
			.t-l{
				.avatar{
					width: 80rpx; height: 80rpx; display:inline-block;
					/deep/ image{
						border-radius: 100%;
					}
				}
				.txt-w{
					display:inline-block; vertical-align: top; margin-left: 20rpx;
				}
			}
		}
		.bot{
			display: flex;
			view{
				flex: 1; margin: 20rpx; text-align:center;
				&.tel{
					border-right: 1px solid $border;
				}
				.icon{
					display: inline-block; vertical-align: middle;margin-right: 10rpx;
				}
			}
		}
	}
}
</style>
