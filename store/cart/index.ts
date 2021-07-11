import BaseStoreService from '~/store/abstract'
import { CartStoreModule } from '~/store/cart/module'
import { CartState } from '~/store/cart/state'

class CartStore extends BaseStoreService<CartState> {
  public mutations = CartStoreModule.mutations
  public getters = CartStoreModule.getters

  get items (): Array<any> {
    return this.read<any>(this.getters.items)
  }

  setCart (items: Array<any>) {
    this.commit(this.mutations.setCart, items)
  }

  addItemsToCart (quantity: number, item: any, restaurant: any) {
    this.commit(this.mutations.addItemsToCart, { quantity, item, restaurant })
  }

  removeItemsFromCart (idItem: number) {
    this.commit(this.mutations.removeItemsFromCart, idItem)
  }
}
export default new CartStore()
