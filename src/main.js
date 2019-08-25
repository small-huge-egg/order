import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
// import VCharts from 'v-charts'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import G2 from '@antv/g2'
import Viser from "viser-vue";

// import 'vue-g2'
// import { View } from '@antv/data-set'
import Antv from 'antv'
// import 'antv/dist/antv.css'
 
Vue.use(Antv)
Vue.use(Viser)


Vue.use(ElementUI)
Vue.use(router)
Vue.use(G2)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
