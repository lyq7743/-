import Vue from 'vue'
import Router from 'vue-router'

import Class from '../pages/Class/class.vue'
import Home from '../pages/Home/home.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/class',
      name: 'Class',
      component: Class
    },
  ]
})
