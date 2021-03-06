import { getInfo, login } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'

const getDefaultState = () => {
  return {
    token: getToken(),
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif'
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_ACCOUNT: (state, account) => {
    state.account = account
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
    console.log(roles)
  },
  SET_ID: (state, Id) => {
    state.Id = Id
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  }
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { account, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ account: account.trim(), password: password }).then(response => {
        const { data } = response
        console.log(data)
        commit('SET_TOKEN', data.token)
        commit('SET_ACCOUNT', data.account)
        // TODO 网络上的动图修改为本地动图
        commit('SET_AVATAR', 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif')
        commit('SET_ROLES', data.roles)
        setToken(data.token)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // get user info  state.token
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      console.log('wewe')
      console.log(state.token)
      getInfo({ token: state.token }).then(response => {
        const { data } = response
        console.log('dddddddd')
        console.log(data)
        if (!data) {
          return reject('Verification failed, please Login again.')
        }

        // const { name, avatar } = data
        // commit('SET_ROLES', data.roles)
        commit('SET_ACCOUNT', data.account)
        commit('SET_ID', data.id)
        commit('SET_ROLES', data.role)
        // commit('SET_NAME', name)
        // commit('SET_AVATAR', avatar)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      removeToken() // must remove  token  first
      resetRouter()
      commit('RESET_STATE')
      resolve()
      // logout(state.token).then(() => {
      //   removeToken() // must remove  token  first
      //   resetRouter()
      //   commit('RESET_STATE')
      //   resolve()
      // }).catch(error => {
      //   reject(error)
      // })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

