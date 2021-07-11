import AuthStore from '~/store/auth'
export default function ({ store, redirect }) {
  if (!AuthStore.isAuthenticated) {
    return redirect('/')
  }
}
