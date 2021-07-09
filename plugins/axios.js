export default ({ $axios, $store }) => {
  // $axios.onRequest((config) => {
  //   config.headers.Authorization = 'Bearer '+ store.state.user.token
  // })
  $axios.setToken($store.getters['getToken'],'Bearer')
}
