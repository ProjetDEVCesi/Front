<template>
  <div class="md:w-2/3 m-auto">
    <div class="px-10 pt-6">
      <p class="text-2xl">
        Hello <span class="font-bold">{{ user.prenom }}</span> !
      </p>
      <div class="text-gray-500">You are Online</div>
    </div>
    <div class="flex rounded border bg-gray-300 m-auto my-2 w-5/6"></div>
    <div v-for="commande in commandes" :key="commande._id">
      <CourrierOrderCard
        v-if="commande.status === 'en cours de préparation'"
        :customer="commande.customer_id"
        :status="commande.status"
        :restaurant-name="commande.restaurant_name"
        :restaurant-id="commande._id"
      />
    </div>
  </div>
</template>

<script>
import CourrierOrderCard from '@/components/CourrierOrderCard'
import { mapState } from 'vuex'
export default {
  components: {
    CourrierOrderCard,
  },
  layout: 'NavCourrier',
  middleware: ['user-auth'],
  async asyncData({ $axios }, callback) {
    await $axios
      .get('http://localhost:8004/utilisateur-final/getAllCommands')
      .then((res) => {
        callback(null, { commandes: res.data })
      })
      .catch((err) => {
        throw err
      })
  },
  data() {
    return {
      commandes: [],
      customer: '1',
      status: 'en cours',
      restaurant: 'Magdo',
    }
  },
  computed: mapState(['user']),
}
</script>
