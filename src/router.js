import Vue from 'vue'
import Router from 'vue-router'
import ViewUI from 'view-design'

import Home from './views/home'

Vue.use(ViewUI)

Vue.use(Router)
const routes = [
  {
    path: '/404',
    component: () => import('./views/404/index')
  },
  {
    path: '/403',
    component: () => import('./views/404/403')
  },
  {
    path: '/auth/change-password',
    component: () => import('./views/auth/change-password')
  },
  {
    path: '/form/list',
    component: () => import('./views/form/list')
  },
  {
    path: '/form/edit/:id',
    component: () => import('./views/form/edit')
  },
  {
    path: '/form/add',
    component: () => import('./views/form/add')
  },
  {
    path: '/main',
    component: Home
  }
]

const router = new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      component: () => import('./views/login')
    },
    {
      path: '/main',
      component: () => import('./views/main'),
      children: routes
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})

router.beforeEach((to, from, next) => {
  ViewUI.LoadingBar.start()
  return next()
})
router.afterEach(route => {
  ViewUI.LoadingBar.finish()
})
export default router
