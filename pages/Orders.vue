<template>
  <div>
    <div class="shadow-md flex justify-center items-center w-full h-28">
      <div class="font-bold text-3xl tracking-widest">ORDERS</div>
    </div>
    <div v-for="commande in commandes" :key="commande.id">
      <div>
        <OrderCard
          :price="commande.price"
          :status="commande.status"
          :restaurant="commande.restaurant_name"
          :items="commande.items"
        />
      </div>
    </div>
    <div class="h-32 bg-transparent"></div>
  </div>
</template>

<script>
import OrderCard from '@/components/OrderCard'

export default {
  components: {
    OrderCard,
  },
  middleware: ['user-auth', 'utilisateur'],
  asyncData({ $axios, store }, callback) {
    $axios
      .post('http://localhost:8004/utilisateur-final/getCommand', {
        customerId: store.state.user.id,
      })
      .then((res) => {
        callback(null, { commandes: res.data })
      })
  },
  data() {
    return {
      commandes: [],
    }
  },
}
</script>
