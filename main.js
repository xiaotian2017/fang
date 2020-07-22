import Vue from 'vue'
import App from './App'
import UniIcons from "@/components/uni-icons/uni-icons.vue";
import Wrap from "@/comps/wrap"
import ImgBox from "@/comps/img/img-box"
import store from './store'
import { ADV_API } from "api/complex"

Vue.config.productionTip = false

Vue.component('uni-icons', UniIcons)
Vue.component('wrap', Wrap)
Vue.component('ImgBox', ImgBox)

Vue.prototype.$ADV_API = ADV_API

App.mpType = 'app'

const app = new Vue({
    ...App,
    store
})
app.$mount()
