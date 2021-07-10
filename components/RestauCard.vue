<template>
  <div
    class="relative shadow-md rounded-lg bg-gray-200 m-auto my-8 h-40 w-4/5"
    @click="goMenu"
  >
    <div class="rounded-t-lg h-16">
      <div class="grid grid-cols-5">
        <div class="col-span-4 font-bold text-black py-2 mx-6">
          {{ restaurant }}
        </div>
        <div class="col-span-4 text-black py-2 mx-6 text-xs">
          {{ address }}
        </div>
      </div>
      <div class="absolute text-xs text-black bottom-0 mx-6 my-4">
        1.99 € Delivery Fee • 15 - 25 min
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    restaurant: {
      type: String,
      required: true,
      // eslint-disable-next-line prettier/prettier
      default: () => 'Undefined',
    },
    address: {
      type: String,
      required: true,
      // eslint-disable-next-line prettier/prettier
      default: () => 'Undefined',
    },
    restaurantId: {
      type: String,
      required: true,
      default: () => '',
    },
  },
  computed: {
    getRestauId() {
      return this.restaurantId
    },
  },
  methods: {
    goMenu() {
      this.$router.push({
        name: 'menus-id',
        params: { id: this.getRestauId },
      })
    },
  },
}
</script>
