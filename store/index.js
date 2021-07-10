export const defaultState = () => {
  return {
    authenticated: true,
    user: {
      prenom: 'Félix',
      nom: 'Arcelin',
      type: 'utilisateur',
      token: '',
    },
  }
}
export const state = defaultState()
export const mutations = {
  toggle(state) {
    state.authenticated = !state.authenticated
  },
  changeUser(state, user) {
    state.user = user
  },
  setToken(state, token) {
    state.user.token = token
  },
  clear: (state) => Object.assign(state, defaultState()),
}
export const getters = {
  getToken(state) {
    return state.token
  },
  getUser(state) {
    return state.user
  },
}
export const actions = {
  changeAuth(commit) {
    commit('toggle')
  },
}
