import BaseStoreService from '~/store/abstract'
import { AuthStoreModule } from '~/store/auth/module'
import { AuthState } from '~/store/auth/state'

class AuthStore extends BaseStoreService<AuthState> {
  public mutations = AuthStoreModule.mutations
  public getters = AuthStoreModule.getters

  get isAuthenticated (): boolean {
    return this.read<any>(this.getters.authenticated)
  }
  get user (): object {
    return this.read<any>(this.getters.user)
  }
  
  

}
export default new AuthStore()
