<template>
    <!--二手房查价-->
    <view class="check-price">
        <!-- <mpvue-echarts class="ec-canvas"  :echarts=echarts @onInit="lineInit" canvasId="line" ref="lineChart" /> -->
    </view>
</template>

<script>
// const echarts = require('./echarts.min.js');
const colors = ['#5793f3', '#d14a61', '#675bba']
const options = {
    color: colors,

    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    grid: {
        right: '5%'
    },
    dataZoom: [
            {
                show: true,
                start: 94,
                end: 100
            },
            {
                type: 'inside',
                start: 94,
                end: 100
            }
        ],
    legend: {
        data: ['蒸发量', '降水量', '平均温度']
    },
    xAxis: [
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            silent: false,
            splitLine: {
                show: false
            },
            splitArea: {
                show: false
            },
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '蒸发量',
            min: 0,
            max: 250,
            position: 'right',
            axisLine: {
                lineStyle: {
                    color: colors[0]
                }
            },
            axisLabel: {
                formatter: '{value} ml'
            }
        },
        {
            type: 'value',
            name: '降水量',
            min: 0,
            max: 250,
            position: 'right',
            offset: 80,
            axisLine: {
                lineStyle: {
                    color: colors[1]
                }
            },
            axisLabel: {
                formatter: '{value} ml'
            }
        },
        {
            type: 'value',
            name: '温度',
            min: 0,
            max: 25,
            position: 'left',
            axisLine: {
                lineStyle: {
                    color: colors[2]
                }
            },
            axisLabel: {
                formatter: '{value} °C'
            }
        }
    ],
    series: [
        {
            name: '蒸发量',
            type: 'bar',
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
            large: true
        },
        {
            name: '降水量',
            type: 'bar',
            yAxisIndex: 1,
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
        },
        {
            name: '平均温度',
            type: 'line',
            yAxisIndex: 2,
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
        }
    ]
};

import mpvueEcharts from '@/components/mpvue-echarts/src/echarts';

export default {
	data() {
		return {
			echarts: { ...echarts,setCanvasCreator: echarts.setCanvasCreator },
			// lineInit: lineInit
		}
	},
	methods: {
		lineInit(e) {
			let { width, height } = e

			let canvas = this.$refs.lineChart.canvas;
			echarts.setCanvasCreator(() => canvas);
			let lineChart = echarts.init(canvas, null, {
				width: width,
				height: height
			});
			canvas.setChart(lineChart);
			lineChart.setOption(options);
			console.log(lineChart, this.$refs.lineChart)
			this.$refs.lineChart.setChart(lineChart);
			//console.log(e)
		}
	},
    mounted() {
		console.log('---',this.echarts.setCanvasCreator)
		// setTimeout(() => {
			
		// }, 1000)

		// let query = uni.createSelectorQuery()
		// let dom=query.select('chart')

		// console.log(dom)
    },
    components: {
       mpvueEcharts
    }
}
</script>

<style lang="scss" scoped>
.ec-canvas{
	width: 700rpx; height: 700rpx; display:block; 
}
</style>

