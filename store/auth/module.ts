import { AuthState } from '~/store/auth/state'

export const AuthStoreModule = {
  namespaced: false,
  state: () => ({ ...new AuthState() }),
  getters: {
    authenticated(state: AuthState): boolean {
      return state.authenticated
    },
    user(state: AuthState) {
      return state.user
    },
  },
  mutations: {},
}
