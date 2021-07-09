<template>
  <div>
    <div class="shadow-md flex justify-center items-center w-full h-28">
      <div class="font-bold text-3xl tracking-widest">ORDERS</div>
    </div>
<<<<<<< HEAD
    <div class="md:w-2/3 m-auto">
      <div v-for="commande in commandes" :key="commande.id">
        <OrderCard
          :restaurant="commande.restaurant_name"
          :price="commande.price"
          :status="commande.status"
=======
    <div v-for="commande in commandes" :key="commande.id">
      <div>
        <OrderCard
          :price="commande.price"
          :status="commande.status"
          :restaurant="commande.restaurant_name"
          :items="commande.items"
>>>>>>> 677dcbb0202ca8b094f48114ef64bf4f329fe802
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
