export default ({ store, app: { $axios } }) => {
  $axios.onRequest((config) => {
    config.headers.Authorization = 'Bearer ' + store.state.user.token
  })
}
