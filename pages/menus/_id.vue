<template>
  <div class="bg-gray-200 h-screen">
    <div class="bg-white pb-2">
      <div class="shadow-md bg-gray-900 w-full h-32">
        <BackButton />
      </div>
      <p class="font-bold text-2xl mx-8 mt-4">{{ restaurants.name }}</p>
      <p class="text-gray-400 text-xs mx-8 mt-1">{{ restaurants.category }}</p>
      <div class="flex mx-8 mt-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="text-gray-400 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <p class="inline-flex text-gray-400 text-xs mx-2 h-5">
          {{ restaurants.address }}
        </p>
      </div>
      <div class="inline-flex text-gray-400 text-xs mx-8 mt-4">
        {{ restaurants.description }}
      </div>
      <div class="flex rounded border bg-gray-300 m-auto my-2 w-5/6"></div>
    </div>
    <p class="font-bold text-2xl mx-8 my-4">Menus</p>
    <div v-for="menu in restaurants.menus" :key="menu.nom">
      <MenuCard
        :menus="menu.nom"
        :articles="menu.articles"
        :price="menu.price"
      />
    </div>
    <div class="bg-gray-300 m-auto my-4 w-full h-1"></div>
  </div>
</template>

<script>
import MenuCard from '@/components/MenuCard'
import BackButton from '@/components/BackButton'

export default {
  components: {
    MenuCard,
    BackButton,
  },
  layout: 'NoNav',
  async asyncData({ $axios, params }, callback) {
    await $axios
      .post('http://localhost:8004/utilisateur-final/getRestaurant', {
        _id: params.id,
      })
      .then((res) => {
        callback(null, { restaurants: res.data })
      })
  },
  data() {
    return {
      restaurants: [],
      restauId: '',
    }
  },
  created() {
    this.restauId = this.$route.params
  },
}
</script>
