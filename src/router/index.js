import Vue from 'vue'
import Router from 'vue-router'
import { ViewBox } from 'vux'
import VueScroller from 'vue-scroller'
import Main from '@/components/main'
import More from '@/components/moreNews'

Vue.use(Router)
Vue.use(VueScroller);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/more/:id',
      component: More,
      meta: { keepAlive: false }
    }
  ]
})
