import Vue from 'vue'
import Router from 'vue-router'
 
Vue.use(Router)
 
export default new Router({
  routes: [
    
    {
      path: '/',
      component: () => import('./pages/WorkStand.vue')
    },
    {
      path: '/indentTable',
      component: () => import('./pages/IndentTable.vue')
    }
  ]
})
