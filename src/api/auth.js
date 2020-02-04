import fly from './fly'

export function login (params) {
  return fly.post('/api/login', params)
}

export function me () {
  return fly.get('/api/me')
}
export function token () {
  return fly.get('/api/token')
}

export function changePassword (params) {
  return fly.post('/api/change-password', params)
}

export function logout () {
  return fly.post('/api/logout')
}

export function menus () {
  return fly.get('/api/my-admin-menus')
}
