import fly from './fly'

export function list (params) {
  return fly.get('/api/users', params)
}

export function detail (id) {
  return fly.get('/api/users/' + id)
}

export function upGrade (id) {
  return fly.post('/api/users/' + id + '/upgrade')
}

export function changePhone (id, phone) {
  return fly.post('/api/users/' + id + '/change-phone', { phone: phone })
}

export function teamUsers (params) {
  return fly.get('/api/users/' + params.team_id + '/team-users', params)
}

export function customers (params) {
  return fly.get('/api/users/' + params.user_id + '/customers', params)
}

export function changeInviteUserRecords (params) {
  return fly.get('/api/change-invite-user-records', params)
}

export function changeInviteUser (params) {
  return fly.post('/api/change-invite-user', params)
}

export function setService (userId) {
  return fly.post('/api/users/' + userId + '/set-service')
}

export function setTalent (userId) {
  return fly.post('/api/users/' + userId + '/set-talent')
}

export function saleData (id) {
  return fly.get('/api/users/' + id + '/sale-data')
}

export function increaseScore (userId, params) {
  return fly.post('/api/users/' + userId + '/increase-score',
    params)
}

export function deductScore (userId, params) {
  return fly.post('/api/users/' + userId + '/deduct-score',
    params)
}

export function userScoreChangeRecords (id, params) {
  return fly.get('/api/users/' + id + '/user-score-change-records',
    params)
}

export function disable (userId) {
  return fly.post('/api/users/' + userId + '/disable')
}

export function enable (userId) {
  return fly.post('/api/users/' + userId + '/enable'
  )
}

export function clearMpOpenid (userId) {
  return fly.post('/api/users/' + userId + '/clear-mp-openid')
}

export function clearOpenid (userId) {
  return fly.post('/api/users/' + userId + '/clear-openid')
}

export function profits (userId, params) {
  return fly.get('/api/users/' + userId + '/profits', params)
}

export function profitsMoney (userId, params) {
  return fly.get('/api/users/' + userId + '/profits-money', params)
}

export function dTeamUserAmount (userId, params) {
  return fly.get('/api/users/' + userId + '/d-team-user-amount', params)
}
