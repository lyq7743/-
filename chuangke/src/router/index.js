import Vue from 'vue'
import Router from 'vue-router'

import Class from '../pages/Class/class.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Class',
      component: Class
    },

  ]
})
