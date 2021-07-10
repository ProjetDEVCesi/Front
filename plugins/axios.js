<<<<<<< HEAD
export default ({ $axios, $store }) => {
  // $axios.onRequest((config) => {
  //   config.headers.Authorization = 'Bearer '+ store.state.user.token
  // })
  // $axios.setToken($store.getters['getToken'],'Bearer')
=======
export default ({ store, app: { $axios } }) => {
  $axios.onRequest((config) => {
    config.headers.Authorization = 'Bearer ' + store.state.user.token
  })
>>>>>>> 1b2a830787738521ffb22cd22d25d8653b62771f
}
