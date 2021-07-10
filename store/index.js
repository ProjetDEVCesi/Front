export const state = () => ({
  authenticated: true,
  user: {
    prenom: 'prenom',
    nom: 'nom',
    type: 'utilisateur',
    token: '',
  },
})
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
}
export const getters = {
  getToken(state) {
    return state.token
  },
}
