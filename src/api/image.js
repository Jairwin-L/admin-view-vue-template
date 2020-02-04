import fly from './fly'

export function list (params) {
  return fly.get('/api/images', params)
}

export function groups () {
  return fly.get('/api/image-groups')
}

export function storeGroup (params) {
  return fly.post('/api/image-groups', params)
}

export function destroy (id) {
  return fly.delete('/api/images/' + id)
}

export function deleteGroup (id) {
  return fly.delete('/api/image-groups/' + id)
}
export function upDateGroup (id, params) {
  return fly.put('/api/image-groups/' + id, params)
}
