import { CartState } from '~/store/cart/state'

export const CartStoreModule = {
  namespaced: false,
  state: () => ({ ...new CartState() }),
  getters: {
    items (state: CartState): Array<any> {
      return state.items
    }
  },
  mutations: {
    setCart (state: CartState, items: Array<any>) {
      state.items = items
    },
    addItemsToCart (state: CartState, payload: { quantity: number, item: any | any, restaurant: any}) {
      let items: Array<any> = []
      let id = 0
      if (state.items[0]) {
        id = state.items.length
      }

      for (let index = id; index < id + payload.quantity; index++) {
        items = [...items, { id: index, item: payload.item, restaurant: payload.restaurant }]
      }
      state.items = [...state.items, ...items]
    },
    removeItemsFromCart (state: CartState, idItem:number) {
      const indexItem = state.items.findIndex(item => item.id === idItem)
      state.items.splice(indexItem, 1)
    }
  }
}
