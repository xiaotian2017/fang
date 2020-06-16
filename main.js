import Vue from 'vue'
import App from './App'
import uniIcons from "@/components/uni-icons/uni-icons.vue";

Vue.config.productionTip = false

Vue.component('uni-icons', uniIcons)
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
