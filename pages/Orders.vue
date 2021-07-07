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
  </div>
</template>

<script>
import OrderCard from '@/components/OrderCard'

export default {
  components: {
    OrderCard,
  },
  asyncData({ $axios }, callback) {
    $axios
      .get('http://localhost:8004/utilisateur-final/getAllCommands')
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
