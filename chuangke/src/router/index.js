import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home/home'
import Class from '@/pages/Class/class'
import Answer from '@/pages/Answer/answer'
import Mine from '@/pages/Mine/mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home1',
      component: Home
    },
    {
      path: '/class',
      name: 'Class',
      component: Class
    },
    {
      path: '/answer',
      name: 'Answer',
      component: Answer
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/other',
      name: 'Other',
      component: Other
    }
  ]
})
