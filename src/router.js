import Vue from 'vue'
import Router from 'vue-router'
import ViewUI from 'view-design'

import Home from './views/home'
// 概况
import Main from './views/main'

// 权限
import Login from './views/login.vue'
import emptyPage from './views/404/index.vue'
import NoAuthority from './views/404/403.vue'
import ChangePassword from './views/auth/change-password.vue'

// 运营
import Banner from './views/operation/list.vue'
import BannerEdit from './views/operation/edit.vue'
import BannerAdd from './views/operation/add.vue'

Vue.use(ViewUI)

Vue.use(Router)
const routes = [
  {
    path: '/404',
    component: emptyPage,
    name: 'emptyPage'
  },
  {
    path: '/403',
    component: NoAuthority,
    name: 'NoAuthority'
  },
  {
    path: '/auth/change-password',
    component: ChangePassword,
    name: 'ChangePassword'
  },
  {
    path: '/operation/list',
    component: Banner,
    name: 'Banner'
  },
  {
    path: '/operation/edit/:id',
    component: BannerEdit,
    name: 'BannerEdit'
  },
  {
    path: '/operation/add',
    component: BannerAdd,
    name: 'BannerAdd'
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
      component: Login
    },
    {
      path: '/main',
      component: Main,
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
  /* const _auth = to.meta ? to.meta.auth : null
  if (_auth) {
    let me = JSON.parse(localStorage.getItem('me'))
    if (me) {
      if (!auth.can(_auth)) {
        return next({ path: '/403' })
      }
    } else {
      return next({ path: '/login' })
    }
  } */
  return next()
})
router.afterEach(route => {
  ViewUI.LoadingBar.finish()
})
export default router
