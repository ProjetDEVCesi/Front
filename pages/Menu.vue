<template>
  <div class="bg-gray-200 h-screen">
    <div class="bg-white pb-2">
      <div class="shadow-md bg-gray-900 w-full h-32">
        <BackButton />
      </div>
      <p class="font-bold text-2xl mx-8 mt-4">O'Tacos</p>
      <p class="text-gray-400 text-xs mx-8 mt-1">Tacos • Fries</p>
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
          1.10 km away • 0.99€ delivery • 8.00€ minimum • 1 rue Baudimont, 62000
          Arras • View map
        </p>
      </div>
      <div class="inline-flex text-gray-400 text-xs mx-8 mt-4">
        "Did you ever hear the tragedy of Darth Plagueis The Wise? I thought
        not. It’s not a story the Jedi would tell you. It’s a Sith legend. Darth
        Plagueis was a Dark Lord of the Sith, so powerful and so wise he could
        use the Force to influence the midichlorians to create life…"
      </div>
      <div class="flex rounded border bg-gray-300 m-auto my-2 w-5/6"></div>
    </div>
    <div class="md:w-2/3 m-auto">
      <p class="font-bold text-2xl mx-8 my-4">Menus</p>
      <div v-for="menu in menus" :key="menu.id">
        <MenuCard :price="menu.price" />
      </div>
      <div class="h-32 bg-transparent"></div>
    </div>
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
  asyncData({ $axios }, callback) {
    $axios.get('http://localhost:8001/menus/getAllMenus').then((res) => {
      callback(null, { menus: res.data })
    })
  },
  data() {
    return {
      menus: [],
    }
  },
}
</script>
