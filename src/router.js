import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Overview from './views/Overview.vue'
import Unit1 from './views/Unit1.vue'
import Unit2 from './views/Unit2.vue'
import Unit3 from './views/Unit3.vue'
import Unit4 from './views/Unit4.vue'
import Unit5 from './views/Unit5.vue'
import Unit6 from './views/Unit6.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
        },
        {
            path: '/overview',
            name: 'overview',
            component: Overview
        },
        {
            path: '/unit1',
            name: 'unit1',
            component: Unit1
        },
        {
            path: '/unit2',
            name: 'unit2',
            component: Unit2
        },
        {
            path: '/unit3',
            name: 'unit3',
            component: Unit3
        },
        {
            path: '/unit4',
            name: 'unit4',
            component: Unit4
        },
        {
            path: '/unit5',
            name: 'unit5',
            component: Unit5
        },
        {
            path: '/unit6',
            name: 'unit6',
            component: Unit6
        }
  ]
})
