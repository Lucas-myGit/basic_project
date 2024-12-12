import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'
import classTheme from '@/views/classTheme'
import multipleCss from '@/views/multipleCss'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/classTheme',
      name: 'classTheme',
      component: classTheme
    },
    {
      path: '/multipleCss',
      name: 'multipleCss',
      component: multipleCss
    },
  ]
})
