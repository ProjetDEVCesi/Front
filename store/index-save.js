// const generateArray = (items) => {
//   const arr = []
//   for (const id in items) {
//     arr.push(items[id])
//   }
//   return arr
// }
export const defaultState = () => {
  return {
    cartItems: {
      totalQty: 0,
      totalPrice: 0,
      cartItem: [],
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
  // Cart mutations
  addItem(state, payload) {
    state.cartItems = payload
  },
  decrementQty(state, id) {
    const cartItem = state.cartItems.cartItem.find((item) => item.itemId === id)
    const qtyPrice = cartItem.price / cartItem.quatity
    cartItem.quantity -= 1
    cartItem.price = cartItem.price - qtyPrice
    state.cartItems.totalQty -= 1
    state.cartItems.totalPrice -= qtyPrice
    const obj = {
      ...cartItem,
    }
    state.cartItems.cartItem.splice(
      state.cartItems.cartItem.indexOf(cartItem),
      1,
      obj
    )
  },
}
export const getters = {
  getToken(state) {
    return state.token
  },
  getUser(state) {
    return state.user
  },
  quatity(state) {
    return state.cartItems.totalQty
  },
  cartItems(state) {
    return state.cartItems
  },
}
export const actions = {
  changeAuth(commit) {
    commit('toggle')
  },
  addToCart(commit) {
    console.log(commit(this.getUser()))
  },
}
