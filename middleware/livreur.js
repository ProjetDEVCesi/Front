export default function ({ store, redirect }) {
  if (store.state.user.type !== 'livreur') {
    return redirect('/')
  }
}
