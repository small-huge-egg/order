import Vue from 'vue'
import Router from 'vue-router'
 
Vue.use(Router)
 
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Index'
    },
    {
      path: '/Index',
      component: () => import('./pages/Index.vue')
    },
    {
      path: '/indentTable',
      component: () => import('./pages/IndentTable.vue')
    }
  ]
})
