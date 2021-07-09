<template>
  <div>
    <div class="shadow-md flex justify-center items-center w-full h-28">
      <div class="font-bold text-3xl tracking-widest">ORDERS</div>
    </div>
    <div class="md:w-2/3 m-auto">
      <div v-for="commande in commandes" :key="commande.id">
        <OrderCard
          :restaurant="commande.restaurant_name"
          :price="commande.price"
          :status="commande.status"
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
