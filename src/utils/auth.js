import Cookies from 'js-cookie'

const TokenKey = 'X-Token'

export function getToken() {
  return Cookies.get('token')
}

export function setToken(token) {
  Cookies.set('token', token)
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
