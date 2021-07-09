export default function ({ store, redirect }) {
  if (store.state.user.type !== 'utilisateur') {
    return redirect('/')
  }
}
