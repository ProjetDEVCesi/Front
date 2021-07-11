import AuthStore from '~/store/auth'
export default function ({ store, redirect }) {
  if (AuthStore.user.type !== 'utilisateur') {
    return redirect('/')
  }
}
