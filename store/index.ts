import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import { CartStoreModule } from './cart/module'
import { AuthStoreModule } from './auth/module'
import { RootState } from '~/store/root'

Vue.use(Vuex)

const store: Store<RootState> = new Vuex.Store<RootState>({
  state: () => ({}),
  mutations: {},
  getters: {},
  actions: {
    nuxtServerInit() {},
    async nuxtClientInit() {},
  },
  modules: {
    cart: CartStoreModule,
    auth: AuthStoreModule,
  },
})
export default function () {
  return store
}
