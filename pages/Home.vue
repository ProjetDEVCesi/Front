<template>
  <div>
    <div class="shadow-md bg-gray-100 w-full pt-8 h-56">
      <div class="grid grid-cols-5 grid-rows-2 h-24">
        <input
          class="
            col-span-3
            bg-gray-300
            rounded
            justify-center
            placeholder-gray-800
            mx-4
            my-auto
            w-4/5
            px-5
            h-8
          "
          type="text"
          placeholder="Location"
        />
        <button
          class="
            bg-white
            text-xs
            font-bold
            justify-center
            rounded-full
            m-auto
            w-3/4
            h-6
          "
          :disabled="isActive"
          :class="{ 'bg-red-600 text-white': isActive }"
          @click="toggle"
        >
          Delivery
        </button>
        <button
          class="
            bg-white
            text-xs
            font-bold
            justify-center
            rounded-full
            m-auto
            w-3/4
            h-6
          "
          :disabled="!isActive"
          :class="{ 'bg-red-600 text-white': !isActive }"
          @click="toggle"
        >
          Pickup
        </button>
        <div
          class="
            flex
            col-span-4
            bg-gray-200
            rounded-full
            mx-4
            my-auto
            px-5
            w-full
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="my-auto text-gray-500 h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            class="
              bg-gray-200
              rounded-full
              justify-center
              m-auto
              px-2
              w-4/5
              h-8
            "
            type="text"
            placeholder="Restaurants, cuisines, dishes..."
          />
        </div>
        <button class="m-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            />
          </svg>
        </button>
      </div>
      <div class="flex rounded border bg-gray-300 m-auto my-2 w-5/6"></div>
      <div
        class="flex flex-nowrap overflow-x-auto mt-2 px-6 w-full no-scrollbar"
      >
        <button class="flex-none text-xs mx-6 h-16 w-16">
          <div class="bg-gray-800 mx-auto h-8 w-8"></div>
          Bakery
        </button>
        <button class="flex-none text-xs mx-6 h-16 w-16">
          <div class="bg-gray-800 mx-auto h-8 w-8"></div>
          Pizza
        </button>
        <button class="flex-none text-xs mx-6 h-16 w-16">
          <div class="bg-gray-800 mx-auto h-8 w-8"></div>
          Taco
        </button>
        <button class="flex-none text-xs mx-6 h-16 w-16">
          <div class="bg-gray-800 mx-auto h-8 w-8"></div>
          Fast Food
        </button>
        <button class="flex-none text-xs mx-6 h-16 w-16">
          <div class="bg-gray-800 mx-auto h-8 w-8"></div>
          Burgers
        </button>
        <button class="flex-none text-xs mx-6 h-16 w-16">
          <div class="bg-gray-800 mx-auto h-8 w-8"></div>
          Sandwichs
        </button>
      </div>
    </div>
    <div v-for="restaurant in restaurants" :key="restaurant.id">
      <RestauCard :restaurant="restaurant.name" :address="restaurant.address" />
    </div>
  </div>
</template>

<script>
import RestauCard from '@/components/RestauCard'

export default {
  components: {
    RestauCard,
  },
  asyncData({ $axios }, callback) {
    $axios
      .get('http://localhost:8004/utilisateur-final/getAllRestaurants')
      .then((res) => {
        callback(null, { restaurants: res.data })
      })
  },
  data() {
    return {
      restaurants: [],
      isActive: true,
    }
  },

  methods: {
    toggle() {
      if (!this.isActive) {
        this.isActive = true
      } else {
        this.isActive = false
      }
    },
  },
}
</script>

<style>
/* Hide scrollbar for Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
