const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  roles: state => state.user.roles,
  Id: state => state.user.Id,
  avatar: state => state.user.avatar,
  account: state => state.user.account
}
export default getters
