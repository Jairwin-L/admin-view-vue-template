import fly from './fly'

export function list (params) {
  return fly.get('/api/banners', params)
}

export function store (params) {
  return fly.post('/api/banners', params)
}

export function show (id) {
  return fly.get('/api/banners/' + id, id)
}

export function update (id, params) {
  return fly.put('/api/banners/' + id, params)
}

export function destroy (id) {
  return fly.delete('/api/banners/' + id)
}

export function clone (id) {
  return fly.post('/api/banners/' + id + '/clone')
}
