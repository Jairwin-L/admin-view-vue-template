const prePath = '/operation/banner/'
const router = [
  {
    path: 'list',
    component: () => import('./list'),
    meta: {
    }
  },
  {
    path: 'edit/:id',
    component: () => import('./edit'),
    meta: {
    }
  },
  {
    path: 'add',
    component: () => import('./add'),
    meta: {
    }
  }
]

router.forEach(item => {
  item.path = prePath + item.path
})

export default router
