import fly from './fly'

export function uploadImage (file, data) {
  const formData = new FormData()
  if (data) {
    if (data.group_id) {
      formData.append('group_id', data.group_id)
    }
  }
  formData.append('file', file)
  return fly.post('/api/upload', formData, { contentType: 'multipart/form-data; charset=UTF-8' })
}
