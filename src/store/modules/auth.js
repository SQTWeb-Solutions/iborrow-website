import axios from 'axios'
import Cookies from 'js-cookie'
import * as types from '../mutation-types'

// state
export const state = {
  user: null,
  token: Cookies.get('token'),
  roles: Cookies.get('roles')
}

// getters
export const getters = {
  user: state => state.user,
  token: state => state.token,
  roles: state => state.roles,
  check: state => state.user !== null
}

// mutations
export const mutations = {
  // fer user information from the token from the server
  [types.FETCH_USER_SUCCESS] (state, { user }) {
    state.user = user
  },
  // if the fetch user fails then set the user state to logout and relogin again
  [types.FETCH_USER_FAILURE] (state) {
    state.token = null
    state.roles = null
    Cookies.remove('token')
    Cookies.remove('roles')
  }
}

// actions
export const actions = {
  // ajax request to check the logged in user information
  async fetchUser ({ commit }) {
    try {
      // TODO: Connect to API to fecth the logged in user
      const { data } = await axios.get(`${process.env.VUE_APP_PROXY_URL}/api/users/me`)
      commit(types.FETCH_USER_SUCCESS, { user: data })
    } catch (e) {
      commit(types.FETCH_USER_FAILURE)
    }
  }

}
